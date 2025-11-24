import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award, Sparkles, PlayCircle } from "lucide-react";

// Using the Unsplash images provided, but with a slight overlay filter in CSS
const backgroundImages = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80", // Kids learning
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80", // Library/Books
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&q=80", // Creative work
];

const carouselTexts = [
  {
    badge: "Admissions Open 2024-25",
    title: "Nurturing Young Minds",
    highlight: "With Excellence",
    subtitle: "A holistic approach to K-5 education, blending Islamic values with modern academic standards.",
  },
  {
    badge: "Faith & Future",
    title: "Building Tomorrow's",
    highlight: "Leaders Today",
    subtitle: "Empowering students with the character, knowledge, and confidence to change the world.",
  },
  {
    badge: "Discover Potential",
    title: "Where Learning Meets",
    highlight: "Higher Purpose",
    subtitle: "Creating a joyful, safe, and intellectually stimulating environment for every child.",
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Students" },
  { icon: BookOpen, value: "25+", label: "Expert Educators" },
  { icon: Award, value: "100%", label: "Success Rate" },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselTexts.length);
    }, 5000); // Slowed down slightly for better readability
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-background pt-24 pb-8 md:pt-32">
      
      {/* --- Dynamic Background Layer --- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}
          />
          
          {/* Modern Gradient Overlays for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
          
          {/* Dot Pattern Overlay for texture */}
          <div className="absolute inset-0 opacity-[0.15]" 
               style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        </motion.div>
      </AnimatePresence>

      {/* --- Main Content Layer --- */}
<div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center">        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -20, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            {/* Pill Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-foreground text-sm font-medium backdrop-blur-sm">
                <Sparkles className="w-3 h-3" />
                {carouselTexts[currentIndex].badge}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-foreground drop-shadow-sm">
              {carouselTexts[currentIndex].title}{" "}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
                {carouselTexts[currentIndex].highlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              {carouselTexts[currentIndex].subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:bg-primary transition-all flex items-center gap-2 group"
              >
                Start Admission
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-white/80 dark:bg-black/30 backdrop-blur-md border border-white/20 text-foreground font-semibold text-lg hover:bg-white dark:hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <PlayCircle className="w-5 h-5" />
                Virtual Tour
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* --- Floating Stats Cards --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
className="grid grid-cols-1 gap-6 w-full max-w-4xl px-4 sm:grid-cols-3 sm:px-0"        >
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 flex items-center gap-4 group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- Scroll Indicator --- */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/50 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-5 h-8 border-2 border-current rounded-full flex justify-center p-1">
          <motion.div
            className="w-1 h-1.5 bg-current rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}