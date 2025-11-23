import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, GraduationCap, Mail, Linkedin } from "lucide-react";

const teachers = [
  {
    name: "Dr. Amina Hassan",
    specialty: "Islamic Studies & Arabic",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&h=500&fit=crop&crop=faces&q=80",
    quote: "Every child has the potential to be a light in this world. Our duty is to kindle that flame with knowledge and faith.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    name: "Mr. Ibrahim Ali",
    specialty: "Mathematics & Science",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=faces&q=80",
    quote: "Learning is a journey of discovery. I strive to make every equation and experiment a moment of wonder.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    name: "Sr. Fatima Ahmed",
    specialty: "Language Arts",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop&crop=faces&q=80",
    quote: "Words have power to change hearts and minds. We empower students to find their voice and use it for good.",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    name: "Br. Omar Malik",
    specialty: "Social Studies",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop&crop=faces&q=80",
    quote: "Understanding our past is the key to shaping a just and prosperous future for our community.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    name: "Sr. Aisha Khan",
    specialty: "Early Childhood Education",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop&crop=faces&q=80",
    quote: "Nurturing young minds requires patience, love, and an environment where they feel safe to explore.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
];

export function TeachersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play logic with pause on hover
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teachers.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % teachers.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + teachers.length) % teachers.length);
  };

  // Calculate visible cards (Left, Center, Right)
  const getVisibleTeachers = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + teachers.length) % teachers.length;
      visible.push({ ...teachers[index], position: i, id: index });
    }
    return visible;
  };

  return (
    <section id="teachers" ref={ref} className="py-24 relative overflow-hidden bg-primary/5">
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-secondary/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6">
            Our Team
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Educators</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Passionate professionals committed to nurturing your child's success through
            academic excellence and moral guidance.
          </p>
        </motion.div>

        {/* 3D Carousel Area */}
        <div 
          className="relative h-[550px] max-w-6xl mx-auto flex items-center justify-center perspective-1000"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {getVisibleTeachers().map((teacher) => {
              // Determine animation properties based on position (-1, 0, 1)
              const isCenter = teacher.position === 0;
              const xOffset = teacher.position * (window.innerWidth < 640 ? 40 : 380); // Responsive spacing
              const scale = isCenter ? 1 : 0.85;
              const opacity = isCenter ? 1 : 0.4;
              const zIndex = isCenter ? 10 : 0;
              const rotateY = teacher.position * -15;

              return (
                <motion.div
                  key={teacher.name}
                  layoutId={teacher.name}
                  initial={{ 
                    x: xOffset, 
                    scale: 0.8, 
                    opacity: 0,
                    zIndex,
                    rotateY 
                  }}
                  animate={{ 
                    x: xOffset, 
                    scale, 
                    opacity, 
                    zIndex,
                    rotateY,
                    filter: isCenter ? "blur(0px)" : "blur(2px)",
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30 
                  }}
                  className="absolute top-0 w-[320px] sm:w-[380px] md:w-[420px]"
                  style={{ 
                    left: "50%", 
                    marginLeft: window.innerWidth < 640 ? "-160px" : "-210px", // Center alignment fix
                    transformStyle: "preserve-3d" 
                  }}
                >
                  {/* Card Content */}
                  <div className={`relative h-full bg-card/80 dark:bg-card/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col ${isCenter ? 'shadow-primary/20' : ''}`}>
                    
                    {/* Top Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-card/90 z-10`} />
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Specialty Badge */}
                      <div className="absolute bottom-4 left-4 z-20">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${teacher.bg} ${teacher.color} backdrop-blur-md`}>
                          <GraduationCap className="w-3 h-3" />
                          {teacher.specialty}
                        </span>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="p-8 pt-4 flex-grow flex flex-col text-center">
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {teacher.name}
                      </h3>
                      
                      {/* Quote */}
                      <div className="mt-6 mb-6 relative">
                        <Quote className={`w-8 h-8 absolute -top-4 -left-2 opacity-20 ${teacher.color}`} />
                        <p className="text-muted-foreground italic text-lg leading-relaxed relative z-10 px-2">
                          "{teacher.quote}"
                        </p>
                      </div>

                      {/* Social Actions */}
                      <div className="mt-auto flex justify-center gap-4 pt-6 border-t border-border/50">
                        <button className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors">
                          <Mail className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-blue-500/10 text-muted-foreground hover:text-blue-500 transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Gradient Border Bottom */}
                    <div className={`h-1.5 w-full bg-gradient-to-r from-transparent via-${teacher.color.split('-')[1]}-500 to-transparent opacity-50`} />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-8 mt-12">
          <button
            onClick={goToPrev}
            className="w-12 h-12 rounded-full flex items-center justify-center border border-border bg-background/50 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg group"
            aria-label="Previous Teacher"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Indicators */}
          <div className="flex gap-2">
            {teachers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/20 hover:bg-primary/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-12 h-12 rounded-full flex items-center justify-center border border-border bg-background/50 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg group"
            aria-label="Next Teacher"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}