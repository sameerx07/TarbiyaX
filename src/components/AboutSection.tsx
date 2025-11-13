import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Star, Users, Target } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&h=400&fit=crop",
];

const values = [
  { icon: Heart, label: "Faith-Based", color: "text-primary" },
  { icon: Star, label: "Excellence", color: "text-secondary" },
  { icon: Users, label: "Community", color: "text-accent" },
  { icon: Target, label: "Growth", color: "text-primary" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-semibold text-sm uppercase tracking-wider"
            >
              About Nur Al-Ilm
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl font-bold mt-4 mb-6"
            >
              Inspiring Young Muslims to Excel
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
            >
              At Nur Al-Ilm Islamic Academy, we provide a comprehensive K-5 education
              that seamlessly integrates Islamic values with academic excellence. Our
              dedicated educators create a nurturing environment where children develop
              strong character, critical thinking skills, and a deep love for learning.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              We believe every child is unique and deserves an education that honors
              their individual gifts while building a strong foundation in faith,
              academics, and social responsibility. Through innovative teaching methods
              and a warm, inclusive community, we prepare students to become confident,
              compassionate leaders.
            </motion.p>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center p-4 glass-card hover:scale-105 transition-transform"
                >
                  <value.icon className={`w-8 h-8 mx-auto mb-2 ${value.color}`} />
                  <p className="text-sm font-semibold">{value.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, rotate: 0, scale: 1 }
                      : {}
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.15,
                    type: "spring",
                  }}
                  className={`relative rounded-2xl overflow-hidden glass-card ${
                    index === 1 ? "mt-8" : ""
                  } ${index === 2 ? "-mt-8" : ""}`}
                >
                  <img
                    src={src}
                    alt={`School life ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
