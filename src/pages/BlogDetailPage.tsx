import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const blogData: Record<string, any> = {
  "building-character-through-islamic-education": {
    title: "Building Character Through Islamic Education",
    author: "Dr. Amina Hassan",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Education",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop",
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

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
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
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -50, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="relative pt-32 pb-20 overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-6">
              {post.category}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={sharePost}
                className="ml-auto"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto glass-card p-8 md:p-12"
          >
            <div className="prose prose-lg max-w-none dark:prose-invert">
              {post.content.map((block: any, index: number) => {
                if (block.type === "heading") {
                  return (
                    <motion.h2
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="text-3xl font-bold mt-12 mb-6 text-primary"
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
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * index }}
                    className="text-lg leading-relaxed mb-6 text-muted-foreground"
                  >
                    {block.text}
                  </motion.p>
                );
              })}
            </div>
          </motion.article>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-16 text-center glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-4">
              Want to Learn More About Our Programs?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule a visit or contact us to discuss your child's educational journey.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
