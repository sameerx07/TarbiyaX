import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  User,
  ArrowRight,
  Clock,
  Tag,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const blogPosts = [
  {
    slug: "building-character-through-islamic-education",
    title: "Building Character Through Islamic Education",
    excerpt:
      "Discover how our holistic approach integrates Islamic values with modern pedagogy to shape well-rounded individuals.",
    author: "Dr. Amina Hassan",
    role: "Principal",
    date: "March 15, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=80",
    category: "Education",
    color: "bg-blue-500",
  },
  {
    slug: "importance-early-childhood-development",
    title: "The Importance of Early Childhood Development",
    excerpt:
      "Learn why the K-5 years are crucial for cognitive, social, and spiritual growth in children.",
    author: "Sr. Aisha Khan",
    role: "Lead Educator",
    date: "March 10, 2025",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop&q=80",
    category: "Child Development",
    color: "bg-emerald-500",
  },
  {
    slug: "balancing-faith-and-academics",
    title: "Balancing Faith and Academics: A Modern Approach",
    excerpt:
      "How we create harmony between Islamic teachings and contemporary educational standards.",
    author: "Br. Omar Malik",
    role: "Curriculum Director",
    date: "March 5, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&q=80",
    category: "Islamic Studies",
    color: "bg-purple-500",
  },
];

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section
      id="blog"
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20 dark:opacity-20">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-l from-primary/30 via-transparent to-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-secondary/30 via-transparent to-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 left-1/4 w-72 h-72 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl pointer-events-none"
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-sm text-secondary text-sm font-semibold uppercase tracking-wider mb-6"
          >
            <TrendingUp className="w-4 h-4" />
            News & Insights
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight leading-tight">
            From Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary  animate-gradient-x">
              Blog
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Stay informed with the latest educational insights, school updates,
            and parenting tips from our expert educators.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col h-full"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500" />

              {/* Card */}
              <div
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="relative glass-card h-full overflow-hidden cursor-pointer border-border/50 hover:border-primary/30 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

                  {/* Image */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Floating Category Badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute top-4 left-4 z-20"
                  >
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white rounded-full shadow-xl backdrop-blur-md ${post.color} bg-opacity-90`}
                    >
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </motion.div>

                  {/* Reading Time Badge */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 text-white text-xs font-semibold bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-md shadow-xl">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-7 flex flex-col flex-grow bg-card/50 backdrop-blur-sm">
                  {/* Date */}
                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-medium">{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2 min-h-[3.5rem]">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

                  {/* Footer: Author & Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold text-sm border border-primary/20">
                          {post.author.charAt(0)}
                        </div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-md opacity-50" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-foreground">
                          {post.author}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.role}
                        </span>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>

                {/* Animated Bottom Border */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-full transition-all duration-700 ease-in-out rounded-full" />

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
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/blog")}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Button Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

            {/* Button Content */}
            {/* <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              View All Articles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span> */}

            {/* Shine Effect */}
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
          </motion.button>
        </motion.div>

        {/* Bottom Decorative Element */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mt-12"
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
