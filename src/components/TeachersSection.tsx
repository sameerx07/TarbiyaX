import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const teachers = [
  {
    name: "Dr. Amina Hassan",
    specialty: "Islamic Studies & Arabic",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=faces",
    quote: "Every child has the potential to be a light in this world.",
  },
  {
    name: "Mr. Ibrahim Ali",
    specialty: "Mathematics & Science",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
    quote: "Learning is a journey of discovery and wonder.",
  },
  {
    name: "Sr. Fatima Ahmed",
    specialty: "Language Arts",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces",
    quote: "Words have power to change hearts and minds.",
  },
  {
    name: "Br. Omar Malik",
    specialty: "Social Studies",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces",
    quote: "Understanding our past shapes a better future.",
  },
  {
    name: "Sr. Aisha Khan",
    specialty: "Early Childhood Education",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces",
    quote: "Nurturing young minds with love and patience.",
  },
];

export function TeachersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teachers.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teachers.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + teachers.length) % teachers.length);
  };

  const getVisibleTeachers = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + teachers.length) % teachers.length;
      visible.push({ ...teachers[index], position: i });
    }
    return visible;
  };

  return (
    <section id="teachers" ref={ref} className=" bg-gradient-to-br from-secondary/10 via-background to-primary/10">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary bg-orange/10 backdrop-blur-sm text-primary text-sm font-semibold uppercase tracking-wider mb-6"
          >
            Our Team
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-3 text-foreground">
            Meet Our Dedicated Educators
          </h2>
          <p className="text-lg text-muted-foreground">
            Passionate professionals committed to your child's success.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[500px] flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {getVisibleTeachers().map((teacher) => (
                <motion.div
                  key={teacher.name}
                  initial={{
                    x: teacher.position * 400,
                    scale: teacher.position === 0 ? 1 : 0.8,
                    opacity: teacher.position === 0 ? 1 : 0.4,
                    zIndex: teacher.position === 0 ? 10 : 1,
                  }}
                  animate={{
                    x: teacher.position * 400,
                    scale: teacher.position === 0 ? 1 : 0.8,
                    opacity: teacher.position === 0 ? 1 : 0.4,
                    zIndex: teacher.position === 0 ? 10 : 1,
                  }}
                  exit={{
                    x: teacher.position * 400,
                    scale: 0.8,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute"
                >
                  <div className="glass-card p-4 w-80 pointer-events-none">
                    <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-center mb-2">
                      {teacher.name}
                    </h3>

                    <p className="text-primary text-center font-semibold mb-4">
                      {teacher.specialty}
                    </p>

                    <blockquote className="text-center italic text-muted-foreground">
                      "{teacher.quote}"
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-1 mt-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              className="rounded-full glass-card"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-2">
              {teachers.map((_, index) => (
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

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full glass-card"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}