import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Share2,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { useEffect } from "react";

interface ContentBlock {
  type: "paragraph" | "heading";
  text: string;
}

interface BlogPost {
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: ContentBlock[];
}

const blogData: Record<string, BlogPost> = {
  "building-character-through-islamic-education": {
    title: "Building Character Through Islamic Education",
    author: "Dr. Amina Hassan",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "In today's rapidly changing world, character education has become more crucial than ever. At TarbiyaX Islamic Academy, we believe that academic excellence must be paired with strong moral foundations rooted in Islamic values.",
      },
      {
        type: "heading",
        text: "The Foundation of Character",
      },
      {
        type: "paragraph",
        text: "Islamic education provides a comprehensive framework for character development. The teachings of the Quran and the exemplary life of Prophet Muhammad (peace be upon him) offer timeless guidance on virtues such as honesty, compassion, patience, and integrity. These are not mere abstract concepts but lived values that we integrate into every aspect of our curriculum.",
      },
      {
        type: "paragraph",
        text: "Research shows that children who receive values-based education demonstrate better emotional regulation, stronger social skills, and increased empathy towards others. By embedding Islamic ethics into daily lessons, discussions, and activities, we help students internalize these principles naturally.",
      },
      {
        type: "heading",
        text: "Practical Application in the Classroom",
      },
      {
        type: "paragraph",
        text: "Our teachers model Islamic character traits and create opportunities for students to practice them. Whether it's showing sabr (patience) when facing academic challenges, demonstrating adl (justice) in peer interactions, or expressing shukr (gratitude) for blessings, students learn through experience.",
      },
      {
        type: "paragraph",
        text: "We incorporate character themes into literature studies, use real-world scenarios for ethical discussions, and celebrate students who exemplify Islamic virtues. This holistic approach ensures that character development is not confined to a single class but woven throughout the school day.",
      },
      {
        type: "heading",
        text: "Partnership with Families",
      },
      {
        type: "paragraph",
        text: "Character education is most effective when there is consistency between home and school. We partner with families through regular communication, parent workshops, and shared expectations. When children see the same values reinforced in both environments, they develop a strong moral compass that guides them through life.",
      },
      {
        type: "paragraph",
        text: "Our monthly character themes are communicated to families with suggested activities and discussion questions, creating a unified approach to nurturing the whole child. Together, we're raising a generation of compassionate, ethical leaders who will make positive contributions to society.",
      },
    ],
  },
  "importance-early-childhood-development": {
    title: "The Importance of Early Childhood Development",
    author: "Sr. Aisha Khan",
    date: "March 10, 2025",
    readTime: "6 min read",
    category: "Child Development",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=600&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "The early years of a child's life are a period of remarkable growth and development. During the K-5 years, children's brains form critical neural connections that lay the foundation for all future learning, behavior, and health. Understanding this crucial window helps us appreciate why quality early education matters so much.",
      },
      {
        type: "heading",
        text: "Brain Development in Early Years",
      },
      {
        type: "paragraph",
        text: "Neuroscience research reveals that 90% of a child's brain development occurs before age five. During this time, children's brains are exceptionally receptive to learning and environmental influences. Every interaction, experience, and lesson shapes neural pathways that will serve them throughout life.",
      },
      {
        type: "paragraph",
        text: "This is why our approach at TarbiyaX emphasizes rich, multi-sensory learning experiences. We know that young children learn best through play, exploration, and meaningful relationships. Our curriculum is designed to stimulate cognitive development while nurturing emotional and social growth.",
      },
      {
        type: "heading",
        text: "Social-Emotional Learning",
      },
      {
        type: "paragraph",
        text: "Beyond academics, early childhood is when children develop essential social-emotional skills. They learn to recognize and manage emotions, build relationships, show empathy, and navigate conflicts. These competencies are predictors of success in school and life.",
      },
      {
        type: "paragraph",
        text: "Our Islamic values framework provides an excellent structure for social-emotional learning. Concepts like rahmah (mercy), ta'awun (cooperation), and adab (good manners) give children concrete guidance for interacting positively with others. Through stories of the Prophets and role-playing activities, students practice these skills in safe, supportive environments.",
      },
      {
        type: "heading",
        text: "Creating Optimal Learning Environments",
      },
      {
        type: "paragraph",
        text: "Young children thrive in environments that balance structure with flexibility, challenge with support, and independence with guidance. Our small class sizes (12:1 ratio) allow teachers to know each child deeply and tailor instruction to individual needs and interests.",
      },
      {
        type: "paragraph",
        text: "We create classrooms that are inviting, organized, and filled with age-appropriate materials that encourage exploration. From our reading nooks to our science discovery centers, every space is intentionally designed to spark curiosity and foster learning.",
      },
      {
        type: "heading",
        text: "Long-Term Impact",
      },
      {
        type: "paragraph",
        text: "Studies consistently show that children who receive high-quality early education demonstrate better outcomes in literacy, numeracy, school readiness, and social adjustment. These benefits persist well into adolescence and adulthood, influencing everything from graduation rates to career success.",
      },
      {
        type: "paragraph",
        text: "At TarbiyaX, we're not just preparing students for the next grade—we're laying groundwork for lifelong learning, strong character, and meaningful contributions to their communities. Investing in early childhood is investing in a brighter future.",
      },
    ],
  },
  "balancing-faith-and-academics": {
    title: "Balancing Faith and Academics: A Modern Approach",
    author: "Br. Omar Malik",
    date: "March 5, 2025",
    readTime: "7 min read",
    category: "Islamic Studies",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "One of the most common questions prospective parents ask is: 'How do you balance Islamic education with meeting academic standards?' It's a valid concern, but at TarbiyaX, we've discovered that faith and academics are not competing priorities—they're complementary dimensions of a truly holistic education.",
      },
      {
        type: "heading",
        text: "Islam Encourages Seeking Knowledge",
      },
      {
        type: "paragraph",
        text: "The very first revelation in Islam was 'Iqra' (Read). The Quran and Hadith repeatedly emphasize the importance of knowledge, critical thinking, and intellectual pursuit. The Prophet Muhammad (peace be upon him) said, 'Seeking knowledge is obligatory upon every Muslim.' This makes it clear that academic excellence is not separate from Islamic values—it's an expression of them.",
      },
      {
        type: "paragraph",
        text: "Throughout Islamic history, Muslim scholars made groundbreaking contributions in mathematics, astronomy, medicine, philosophy, and more. We draw inspiration from this legacy, showing students that being a good Muslim includes striving for excellence in all areas of knowledge.",
      },
      {
        type: "heading",
        text: "Integrated Curriculum Design",
      },
      {
        type: "paragraph",
        text: "Rather than treating Islamic studies and secular subjects as separate silos, we integrate them meaningfully. When studying science, we discuss the signs of Allah in creation. In history lessons, we explore Islamic contributions to civilization. Literature classes include both contemporary works and classical Islamic texts.",
      },
      {
        type: "paragraph",
        text: "This integrated approach helps students see connections between different fields of knowledge and understand how their faith informs their worldview. They learn that being Muslim shapes how they think about ethics in science, justice in social studies, and beauty in the arts.",
      },
      {
        type: "heading",
        text: "Meeting and Exceeding Standards",
      },
      {
        type: "paragraph",
        text: "We're proud that our students consistently meet or exceed state academic standards. Our rigorous curriculum, qualified teachers, and commitment to individualized instruction ensure that students master core competencies in all subject areas.",
      },
      {
        type: "paragraph",
        text: "But we go beyond minimum standards. Our graduates leave not only academically prepared but also equipped with critical thinking skills, ethical reasoning, and a sense of purpose. They understand that their education is a trust (amanah) and that they have responsibilities to use their knowledge for good.",
      },
      {
        type: "heading",
        text: "The Best of Both Worlds",
      },
      {
        type: "paragraph",
        text: "Families choose TarbiyaX because they want their children to be confident in both their Muslim identity and their ability to succeed in any academic or professional setting. Our graduates go on to excel in competitive high schools and universities while maintaining strong Islamic values.",
      },
      {
        type: "paragraph",
        text: "The balance we've achieved isn't about compromise—it's about integration. When faith and academics work together, children receive an education that prepares them not just for tests and college, but for life as thoughtful, ethical, capable individuals who contribute positively to society.",
      },
    ],
  },
};

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? blogData[slug] : null;
  const { scrollYProgress } = useScroll();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Post Not Found
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold"
          >
            Return Home
          </motion.button>
        </div>
      </div>
    );
  }

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-50"
      />

      {/* Hero Banner with Parallax */}
      <motion.section
        style={{ y: heroY }}
        className="relative h-[70vh] min-h-[500px] overflow-hidden"
      >
        {/* Banner Image - Fully Visible */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient only at bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* Glass Navigation Bar */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-0 left-0 right-0 z-20"
        >
          <div className="backdrop-blur-xl bg-background/30 border-b border-white/10">
            <div className="container mx-auto px-4 sm:px-6 py-4">
              <motion.button
                whileHover={{ x: -5 }}
                onClick={() => navigate("/")}
                className="group flex items-center gap-2 text-white hover:text-primary transition-colors font-semibold"
              >
                <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm group-hover:bg-primary/20 transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                <span>Back to Home</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-0 left-0 right-0 z-10"
        >
          <div className="container mx-auto px-4 sm:px-6 pb-12">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-4xl"
            >
              {/* Category Badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-block mb-6"
              >
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-xl border border-white/30 text-white text-sm font-bold rounded-full shadow-2xl">
                  <Sparkles className="w-4 h-4" />
                  {post.category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 t leading-tight drop-shadow-2xl"
              >
                {post.title}
              </motion.h1>

              {/* Meta Info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-wrap items-center gap-6"
              >
                <div className="flex items-center gap-2 text-white/90">
                  <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={sharePost}
                  className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-xl border border-white/30 text-white hover:bg-white/30 transition-all"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="font-medium">Share</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Content Section - Full Width, No Cards */}
      <section className="relative py-16 md:py-24">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Content */}
            <div className="prose prose-xl max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed">
              {post.content.map((block: any, index: number) => {
                if (block.type === "heading") {
                  return (
                    <motion.h2
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent"
                    >
                      {block.text}
                    </motion.h2>
                  );
                }
                return (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg md:text-xl leading-relaxed mb-8"
                  >
                    {block.text}
                  </motion.p>
                );
              })}
            </div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="my-16 h-px bg-gradient-to-r from-transparent via-border to-transparent"
            />

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              {/* Glass Effect Background */}
              <div className="relative inline-block">
                <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-3xl" />

                <div className="relative backdrop-blur-xl bg-card/50 border border-border/50 rounded-3xl p-12 shadow-2xl">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-8 shadow-xl"
                  >
                    <Sparkles className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    Want to Learn More?
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Schedule a visit or contact us to discuss your child's
                    educational journey at TarbiyaX Academy.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      navigate("/");
                      setTimeout(() => {
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                    className="relative px-10 py-5 rounded-xl font-bold text-lg overflow-hidden group"
                  >
                    {/* Button Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

                    {/* Button Content */}
                    <span className="relative z-10 text-white flex items-center gap-3">
                      Get in Touch
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>

                    {/* Shine Effect */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.article>
        </div>
      </section>
    </div>
  );
}
