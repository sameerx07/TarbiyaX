import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    slug: "building-character-through-islamic-education",
    title: "Building Character Through Islamic Education",
    excerpt: "Discover how our holistic approach integrates Islamic values with modern pedagogy to shape well-rounded individuals.",
    author: "Dr. Amina Hassan",
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    category: "Education",
  },
  {
    slug: "importance-early-childhood-development",
    title: "The Importance of Early Childhood Development",
    excerpt: "Learn why the K-5 years are crucial for cognitive, social, and spiritual growth in children.",
    author: "Sr. Aisha Khan",
    date: "March 10, 2025",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
    category: "Child Development",
  },
  {
    slug: "balancing-faith-and-academics",
    title: "Balancing Faith and Academics: A Modern Approach",
    excerpt: "How we create harmony between Islamic teachings and contemporary educational standards.",
    author: "Br. Omar Malik",
    date: "March 5, 2025",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    category: "Islamic Studies",
  },
];

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section id="blog" ref={ref} className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Latest News & Insights
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            From Our Blog
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay informed with educational insights, tips, and school updates.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => navigate(`/blog/${post.slug}`)}
              className="glass-card overflow-hidden cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Button
                  variant="link"
                  className="p-0 h-auto text-primary group-hover:gap-2 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
