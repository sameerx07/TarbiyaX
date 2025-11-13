import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";

const carouselTexts = [
  {
    title: "Nurturing Young Minds",
    subtitle: "Through Islamic Values & Excellence",
  },
  {
    title: "Building Tomorrow's Leaders",
    subtitle: "With Faith, Knowledge & Character",
  },
  {
    title: "Where Learning Meets Purpose",
    subtitle: "Empowering K-5 Students to Thrive",
  },
];

const floatingIcons = [
  { Icon: BookOpen, x: "10%", y: "20%", delay: 0 },
  { Icon: Users, x: "85%", y: "30%", delay: 0.5 },
  { Icon: Award, x: "15%", y: "70%", delay: 1 },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselTexts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background" />

      {/* Floating Elements */}
      {floatingIcons.map(({ Icon, x, y, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/20 hidden md:block"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-16 h-16" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* 3D Carousel Text */}
          <div className="mb-8 h-48 flex items-center justify-center perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-primary">
                  {carouselTexts[currentIndex].title}
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground">
                  {carouselTexts[currentIndex].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {carouselTexts.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              asChild
            >
              <a href="#contact">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 glass-card"
              asChild
            >
              <a href="#about">Learn More</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: "500+", label: "Students" },
              { value: "25+", label: "Expert Teachers" },
              { value: "10+", label: "Years Excellence" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
