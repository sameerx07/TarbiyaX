import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bell, MessageCircle, UserPlus } from "lucide-react";

// Helper component for the button
const CustomButton = ({ children, className = "", onClick, variant = "primary" }) => {
  const baseClasses = "flex items-center justify-center gap-2 font-semibold text-sm rounded-xl transition-all duration-300 shadow-lg";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:scale-105 active:scale-95",
    whatsapp: "bg-[#25D366] hover:bg-[#20BA5A] text-white hover:shadow-xl hover:shadow-[#25D366]/30 hover:scale-105 active:scale-95",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

const WHATSAPP_NUMBER = "918978704174"; // Your WhatsApp number (with country code, no + or spaces)
const WHATSAPP_MESSAGE = "Hi! I'm interested in enrolling my child at TarbiyaX Academy. Can you provide more information?";

export default function AlertBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCount, setShowCount] = useState(0);

  useEffect(() => {
    // Show banner 2 seconds after mount
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
      setShowCount(1);
    }, 2000);

    // Show banner again every 30 seconds, even if it was closed temporarily
    const recurringTimer = setInterval(() => {
      setIsVisible(true);
      setShowCount((prev) => prev + 1);
    }, 30000); // 30 seconds

    return () => {
      clearTimeout(initialTimer);
      clearInterval(recurringTimer);
    };
  }, []);

  // Temporary close - banner will reappear in 30 seconds (via interval)
  const handleClose = () => {
    setIsVisible(false);
  };

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    handleClose(); // Temporarily close banner
  };

  const handleEnroll = () => {
    handleClose(); // Temporarily close banner
    // Scroll to contact section smoothly
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -400, opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ x: 0, opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ x: -400, opacity: 0, scale: 0.8, rotateY: -15 }}
          transition={{ type: "spring", damping: 20, stiffness: 150 }}
          className="fixed bottom-6 left-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
        >
          {/* Glass Card */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-30 blur-xl group-hover:opacity-40 transition-all duration-500" />

            {/* Main Card */}
            <div className="relative p-6 rounded-3xl backdrop-blur-xl bg-card/80 dark:bg-card/60 shadow-2xl border border-white/20 dark:border-white/10 overflow-hidden">
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Close Button */}
              <motion.button
                onClick={handleClose}
                className="absolute top-3 right-3 z-10 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted/50 backdrop-blur-sm"
                aria-label="Close Alert"
                title="Close (will reappear in 30s)"
              >
                <X className="w-4 h-4" />
              </motion.button>

              <div className="flex items-start gap-4 relative">
                {/* Animated Icon */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-primary to-secondary text-white p-3.5 rounded-2xl shadow-xl flex-shrink-0">
                    <Bell className="w-7 h-7" />
                  </div>
                  {/* Icon Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-lg opacity-50" />
                </motion.div>

                {/* Content */}
                <div className="flex-1 overflow-hidden pt-1">
                  <motion.h3
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="font-extrabold text-xl text-foreground mb-2 leading-tight"
                  >
                    🎓 Enrollment Open!
                  </motion.h3>
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm text-muted-foreground mb-5 leading-relaxed"
                  >
                    Secure your child's spot for 2024-25. Limited seats available at TarbiyaX Academy.
                  </motion.p>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-3"
                  >
                    <CustomButton
                      className="flex-1 py-3"
                      variant="whatsapp"
                      onClick={handleWhatsApp}
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </CustomButton>

                    <CustomButton
                      className="flex-1 py-3"
                      variant="primary"
                      onClick={handleEnroll}
                    >
                      <UserPlus className="w-4 h-4" />
                      Enroll Now
                    </CustomButton>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { AlertBanner };
