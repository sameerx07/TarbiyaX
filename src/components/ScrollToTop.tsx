import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Zap, ArrowUp } from "lucide-react";

// --- Custom Component Replacements (for self-containment) ---

const CustomButton = ({ children, className = "", onClick, size = "md", type = "button", disabled = false }) => {
  let sizeClasses;
  switch (size) {
    case "icon":
      sizeClasses = "w-10 h-10 p-2";
      break;
    case "sm":
      sizeClasses = "px-3 py-1.5 text-sm";
      break;
    case "lg": // Added for scroll button
      sizeClasses = "w-14 h-14 p-3";
      break;
    default:
      sizeClasses = "px-4 py-2";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses} ${className}`}
    >
      {children}
    </button>
  );
};

const CustomInput = ({ value, onChange, onKeyPress, placeholder, className = "", type = "text" }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    placeholder={placeholder}
    className={`w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${className}`}
  />
);

// --- Chatbot Logic and UI ---

const BOT_MODEL = "gemini-2.5-flash-preview-09-2025";
const API_KEY = ""; // Keep empty; Canvas provides the key in runtime
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${BOT_MODEL}:generateContent?key=${API_KEY}`;

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot" | "typing";
  timestamp: Date;
  sources?: { uri: string; title: string }[];
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "As-salamu alaykum! I'm TarbiyaX Bot, your AI assistant. How can I assist you with enrollment, tuition, or curriculum details today?",
    sender: "bot",
    timestamp: new Date(),
  },
];

const quickReplies = [
  "Enrollment Information",
  "Tuition Fees",
  "School Hours",
  "Curriculum Details",
];

// Retry utility with exponential backoff
const fetchWithRetry = async (url, options, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};


function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const generateBotResponse = async (userQuery: string) => {
    setIsBotTyping(true);

    const systemPrompt = "You are TarbiyaX Bot, a friendly, informative, and professional assistant for an Islamic Academy. Start your response with 'Wa alaykum assalam.' Keep responses concise, helpful, and professional, focusing on educational or administrative topics. Do not write generic customer service messages. If the user asks about the API Key, state that the key is provided by the canvas environment for testing purposes.";
    
    const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        tools: [{ "google_search": {} }],
        systemInstruction: {
            parts: [{ text: systemPrompt }]
        },
    };

    try {
        const result = await fetchWithRetry(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const candidate = result.candidates?.[0];

        if (candidate && candidate.content?.parts?.[0]?.text) {
            const text = candidate.content.parts[0].text;
            let sources = [];
            const groundingMetadata = candidate.groundingMetadata;
            if (groundingMetadata && groundingMetadata.groundingAttributions) {
                sources = groundingMetadata.groundingAttributions
                    .map(attribution => ({
                        uri: attribution.web?.uri,
                        title: attribution.web?.title,
                    }))
                    .filter(source => source.uri && source.title);
            }

            const botMessage: Message = {
                id: messages.length + 2,
                text: text,
                sender: "bot",
                timestamp: new Date(),
                sources: sources,
            };

            setMessages((prev) => [...prev, botMessage]);

        } else {
            setMessages((prev) => [
                ...prev, 
                { id: prev.length + 2, text: "Wa alaykum assalam. I apologize, I encountered an issue while processing your request. Please try again or call us for immediate assistance.", sender: "bot", timestamp: new Date() }
            ]);
        }

    } catch (error) {
        console.error("Gemini API Error:", error);
        setMessages((prev) => [
            ...prev, 
            { id: prev.length + 2, text: "Wa alaykum assalam. A connection error occurred. Please check your network or try again later.", sender: "bot", timestamp: new Date() }
        ]);
    } finally {
        setIsBotTyping(false);
    }
  };


  const handleSend = () => {
    if (!input.trim() || isBotTyping) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const query = input;
    setInput("");

    generateBotResponse(query);
  };

  const handleQuickReply = (reply: string) => {
    if (isBotTyping) return;
    setInput("");
    
    const userMessage: Message = {
        id: messages.length + 1,
        text: reply,
        sender: "user",
        timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    
    generateBotResponse(reply);
  };

  const getSenderAvatar = (sender: string) => {
    if (sender === "bot") {
        return (
            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mr-3 shadow-md">
                <Zap className="w-4 h-4" />
            </div>
        );
    }
    return null;
  };


  return (
    <>
      {/* FAB Button (Gradient & Online Status) - Positioned Bottom Right */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50 group"
      >
        <CustomButton
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-2xl shadow-indigo-600/50 hover:shadow-indigo-600/80 transition-shadow duration-300 relative overflow-hidden"
        >
          {/* Online Dot */}
          <div className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-ping opacity-75" />
          <div className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />
          
          {isOpen ? (
            <X className="w-7 h-7 transform group-hover:rotate-90 transition-transform" />
          ) : (
            <MessageCircle className="w-7 h-7 transform group-hover:scale-110 transition-transform" />
          )}
        </CustomButton>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-28 right-6 w-96 max-w-[calc(100vw-3rem)] z-50"
          >
            {/* Enhanced Glassmorphism Card */}
            <div className="flex flex-col h-[500px] rounded-2xl shadow-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/40 dark:border-gray-700/50">
              
              {/* Header */}
              <div className="p-4 rounded-t-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-primary/20 flex justify-between items-center">
                <div>
                    <h3 className="font-extrabold text-xl text-foreground">TarbiyaX Bot</h3>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full" /> 
                        {isBotTyping ? "AI is typing..." : "Online, responds in seconds"}
                    </p>
                </div>
                <CustomButton size="icon" onClick={() => setIsOpen(false)} className="w-8 h-8 bg-transparent hover:bg-white/50 dark:hover:bg-gray-700/50 text-foreground">
                    <X className="w-4 h-4" />
                </CustomButton>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div className={`${message.sender === "bot" ? "flex items-start" : ""}`}>
                        {getSenderAvatar(message.sender)}
                        <div
                            className={`max-w-[90%] p-3 rounded-2xl text-sm leading-relaxed shadow-md ${
                                message.sender === "user"
                                    ? "bg-indigo-600 text-white rounded-br-none"
                                    : "bg-gray-200 dark:bg-gray-700 text-foreground rounded-bl-none"
                            }`}
                        >
                            <p>{message.text}</p>
                            
                            {/* Sources/Citations */}
                            {message.sources && message.sources.length > 0 && (
                                <div className="mt-2 pt-2 border-t border-white/20 dark:border-gray-600/50 text-xs opacity-70">
                                    <p className="font-semibold mb-1">Source:</p>
                                    {message.sources.slice(0, 1).map((source, idx) => (
                                        <a 
                                            key={idx} 
                                            href={source.uri} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="block hover:underline truncate"
                                        >
                                            {source.title}
                                        </a>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Typing Indicator */}
                <AnimatePresence>
                    {isBotTyping && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex justify-start items-center"
                        >
                            {getSenderAvatar("bot")}
                            <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-2xl rounded-bl-none max-w-[80%] shadow-md">
                                <div className="flex space-x-1">
                                    <motion.div className="w-2 h-2 bg-gray-500 rounded-full" animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 0.5, delay: 0 }} />
                                    <motion.div className="w-2 h-2 bg-gray-500 rounded-full" animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 0.5, delay: 0.15 }} />
                                    <motion.div className="w-2 h-2 bg-gray-500 rounded-full" animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 0.5, delay: 0.3 }} />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              {messages.length < 3 && !isBotTyping && (
                <div className="px-4 pb-2 pt-1 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply) => (
                      <CustomButton
                        key={reply}
                        size="sm"
                        onClick={() => handleQuickReply(reply)}
                        className="bg-indigo-600/10 text-indigo-600 hover:bg-indigo-600/20 text-xs border border-indigo-600/30 dark:text-indigo-400 dark:bg-indigo-400/10 dark:hover:bg-indigo-400/20"
                      >
                        {reply}
                      </CustomButton>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                <div className="flex gap-2">
                  <CustomInput
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask about admissions..."
                    className="flex-1"
                  />
                  <CustomButton
                    onClick={handleSend}
                    size="icon"
                    disabled={!input.trim() || isBotTyping}
                    className="bg-gradient-to-br from-teal-500 to-indigo-600 text-white hover:opacity-90 shadow-lg shadow-indigo-600/30"
                  >
                    <Send className="w-5 h-5" />
                  </CustomButton>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// --- New Scroll To Top Button Component ---

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll smoothly to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          // Positioned at the bottom-left, as requested
          className="fixed bottom-6 left-6 z-40"
        >
          <CustomButton
            size="lg"
            onClick={scrollToTop}
            className="rounded-full bg-gradient-to-br from-teal-500 to-indigo-600 text-white shadow-xl shadow-teal-500/50 hover:opacity-90"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </CustomButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { ScrollToTopButton };