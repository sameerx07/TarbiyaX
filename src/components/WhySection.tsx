import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Heart,
  Users,
  Award,
  Sparkles,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Holistic Curriculum",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    description:
      "Our comprehensive program balances Islamic studies with core academics (Math, Science, Language Arts) and enrichment activities like art and robotics.",
  },
  {
    icon: Heart,
    title: "Islamic Values",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    description:
      "We integrate Quranic teachings, character development, and moral education into daily learning, helping students develop strong ethical foundations.",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    description:
      "With a 12:1 student-teacher ratio, we ensure personalized attention and meaningful relationships that support each child's unique learning journey.",
  },
  {
    icon: Award,
    title: "Experienced Educators",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    description:
      "Our certified teachers combine professional expertise with genuine care, creating engaging lessons that inspire curiosity and critical thinking.",
  },
  {
    icon: Sparkles,
    title: "Modern Facilities",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    description:
      "State-of-the-art classrooms, technology labs, library, and prayer spaces provide safe, inspiring environments where students can explore and create.",
  },
  {
    icon: Shield,
    title: "Safe & Nurturing",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    description:
      "We maintain rigorous safety protocols and foster an inclusive culture of respect, ensuring every child feels valued, supported, and empowered.",
  },
];

export function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      id="why"
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/10"
    >
      {/* Animated Mesh Gradient Background */}
      {/* <div className="absolute inset-0 opacity-20 dark:opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-l from-secondary/30 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-accent/30 to-transparent rounded-full blur-3xl animate-pulse delay-700" />
      </div> */}

      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-1/4 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 left-1/3 w-96 h-96 bg-gradient-to-tl from-secondary/20 to-primary/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Grid Pattern Overlay */}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm text-primary text-sm font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight leading-tight">
            Excellence in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary animate-gradient-x">
              Every Aspect
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Discover what makes TarbiyaX the premier choice for Islamic
            education, where we combine faith with future-ready skills.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500" />

              {/* Card Content */}
              <div className="relative glass-card p-8 h-full border-border/50 hover:border-primary/30 transition-all duration-500">
                {/* Icon Container */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={`relative w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center shadow-lg`}
                  >
                    {/* Icon Glow */}
                    <div
                      className={`absolute inset-0 ${feature.bg} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                    />
                    <feature.icon
                      className={`relative w-8 h-8 ${feature.color} z-10`}
                    />
                  </motion.div>

                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold text-foreground leading-tight mb-1">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-base mb-6">
                  {feature.description}
                </p>

                {/* Animated Bottom Line */}
                <div className="relative h-1 w-full bg-border/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                  />
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <div className="relative">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full blur-xl opacity-50" />
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
