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
} from "lucide-react";

const subjects = [
  {
    id: "islamic-studies",
    icon: Heart,
    title: "Islamic Studies",
    description: "Quran, Hadith, and character development",
    color: "from-primary to-primary/70",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=400&h=300&fit=crop",
  },
  {
    id: "language-arts",
    icon: BookOpen,
    title: "Language Arts",
    description: "Reading, writing, and literature",
    color: "from-secondary to-secondary/70",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
  },
  {
    id: "mathematics",
    icon: Calculator,
    title: "Mathematics",
    description: "Problem-solving and critical thinking",
    color: "from-accent to-accent/70",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
  },
  {
    id: "science",
    icon: Beaker,
    title: "Science",
    description: "Exploration and discovery",
    color: "from-primary to-secondary",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
  },
  {
    id: "social-studies",
    icon: Globe,
    title: "Social Studies",
    description: "History, geography, and culture",
    color: "from-secondary to-primary",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&h=300&fit=crop",
  },
  {
    id: "arabic",
    icon: Languages,
    title: "Arabic Language",
    description: "Speaking, reading, and writing",
    color: "from-accent to-secondary",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
  },
  {
    id: "arts",
    icon: Palette,
    title: "Creative Arts",
    description: "Visual arts and creativity",
    color: "from-primary to-accent",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
  },
  {
    id: "music",
    icon: Music,
    title: "Nasheed & Music",
    description: "Islamic songs and rhythm",
    color: "from-secondary to-accent",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=300&fit=crop",
  },
];

export function CurriculumSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section id="curriculum" ref={ref} className="py-24 overflow-hidden bg-gradient-to-br from-muted/20 via-background to-accent/10">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Curriculum
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 text-foreground">
            Comprehensive Learning Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            A well-rounded curriculum designed to nurture mind, body, and soul.
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate(`/subject/${subject.id}`)}
                className="flex-shrink-0 w-80 snap-center cursor-pointer group"
              >
                <div className="glass-card overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-80 z-10`} />
                    <img
                      src={subject.image}
                      alt={subject.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <subject.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {subject.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {subject.description}
                    </p>

                    {/* Animated Border on Hover */}
                    <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full group-hover:w-full transition-all duration-700" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-4 text-sm text-muted-foreground"
          >
            ← Scroll to explore all subjects →
          </motion.div>
        </div>
      </div>
    </section>
  );
}
