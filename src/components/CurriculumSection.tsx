import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Beaker,
  Calculator,
  Globe,
  Palette,
  Music,
  Heart,
  Languages,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const subjects = [
  {
    id: "islamic-studies",
    icon: Heart,
    title: "Islamic Studies",
    description: "Quran, Hadith, and character development",
    color: "text-emerald-500",
    bg: "bg-emerald-500/20",
    image:
      "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "language-arts",
    icon: BookOpen,
    title: "Language Arts",
    description: "Reading, writing, and literature",
    color: "text-blue-500",
    bg: "bg-blue-500/20",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "mathematics",
    icon: Calculator,
    title: "Mathematics",
    description: "Problem-solving and critical thinking",
    color: "text-indigo-500",
    bg: "bg-indigo-500/20",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "science",
    icon: Beaker,
    title: "Science",
    description: "Exploration and discovery",
    color: "text-cyan-500",
    bg: "bg-cyan-500/20",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "social-studies",
    icon: Globe,
    title: "Social Studies",
    description: "History, geography, and culture",
    color: "text-orange-500",
    bg: "bg-orange-500/20",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "arabic",
    icon: Languages,
    title: "Arabic Language",
    description: "Speaking, reading, and writing",
    color: "text-rose-500",
    bg: "bg-rose-500/20",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "arts",
    icon: Palette,
    title: "Creative Arts",
    description: "Visual arts and creativity",
    color: "text-pink-500",
    bg: "bg-pink-500/20",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "music",
    icon: Music,
    title: "Nasheed & Music",
    description: "Islamic songs and rhythm",
    color: "text-violet-500",
    bg: "bg-violet-500/20",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=400&fit=crop&q=80",
  },
];

export function CurriculumSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section
      id="curriculum"
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-muted/30 via-background to-background"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/30 via-transparent to-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-secondary/30 via-transparent to-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-1/4 w-80 h-80 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full blur-3xl pointer-events-none"
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm  text-sm font-semibold uppercase tracking-wider mb-6"
          >
            <BookOpen className="w-4 h-4" />
            Our Curriculum
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight leading-tight">
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent animate-gradient-x">
              Learning
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            A well-rounded curriculum designed to nurture mind, body, and soul
            through integrated knowledge and practical application.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />

              {/* Card */}
              <div
                onClick={() => navigate(`/subject/${subject.id}`)}
                className="relative glass-card overflow-hidden h-full cursor-pointer border-border/50 hover:border-primary/30 transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

                  {/* Image */}
                  <img
                    src={subject.image}
                    alt={subject.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Floating Icon Badge */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="absolute top-4 right-4 z-20"
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl ${subject.bg} backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl`}
                    >
                      {/* Icon Glow */}
                      <div
                        className={`absolute inset-0 ${subject.bg} rounded-2xl blur-lg opacity-60`}
                      />
                      <subject.icon
                        className={`relative w-7 h-7 ${subject.color} z-10`}
                      />
                    </div>
                  </motion.div>

                  {/* Title Overlay on Image */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-foreground transition-colors">
                      {subject.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative bg-card/50 backdrop-blur-sm">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {subject.description}
                  </p>

                  {/* Bottom Action */}
                  <div className="flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore Subject
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Animated Bottom Border */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-full transition-all duration-500 ease-out rounded-full" />
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Want to learn more about our teaching methodology?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/curriculum")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            View Full Curriculum
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          {/* Decorative Element */}
          <div className="relative mt-12">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full blur-xl opacity-50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
