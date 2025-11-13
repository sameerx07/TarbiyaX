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
    description:
      "Our comprehensive program balances Islamic studies with core academics (Math, Science, Language Arts, Social Studies) and enrichment activities like art, physical education, and technology.",
  },
  {
    icon: Heart,
    title: "Islamic Values",
    description:
      "We integrate Quranic teachings, character development, and moral education into daily learning, helping students develop strong ethical foundations and spiritual awareness.",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description:
      "With a 12:1 student-teacher ratio, we ensure personalized attention, differentiated instruction, and meaningful relationships that support each child's unique learning journey.",
  },
  {
    icon: Award,
    title: "Experienced Educators",
    description:
      "Our certified teachers combine professional expertise with genuine care, creating engaging lessons that inspire curiosity, critical thinking, and a lifelong love of learning.",
  },
  {
    icon: Sparkles,
    title: "Modern Facilities",
    description:
      "State-of-the-art classrooms, technology labs, library, prayer space, and playground provide safe, inspiring environments where students can explore, create, and grow.",
  },
  {
    icon: Shield,
    title: "Safe & Nurturing",
    description:
      "We maintain rigorous safety protocols, foster an inclusive culture of respect, and partner with families to ensure every child feels valued, supported, and empowered to succeed.",
  },
];

export function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Excellence in Every Aspect
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover what makes Nur Al-Ilm the premier choice for Islamic education
            in our community.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
              >
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
              </motion.div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Border Effect */}
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
