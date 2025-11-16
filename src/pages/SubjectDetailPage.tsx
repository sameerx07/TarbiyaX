import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Target, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const subjectData: Record<string, any> = {
  "islamic-studies": {
    title: "Islamic Studies",
    description: "Comprehensive Islamic education rooted in Quran and Sunnah",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=1200&h=600&fit=crop",
    overview:
      "Our Islamic Studies program provides students with a deep understanding of Islamic faith, values, and practices. Through engaging lessons in Quranic recitation, Hadith studies, and character development, we help students build a strong foundation in their deen.",
    learningOutcomes: [
      "Master proper Quranic recitation with Tajweed rules",
      "Understand the five pillars of Islam and their application",
      "Learn from the life of Prophet Muhammad (PBUH)",
      "Develop strong moral character and Islamic ethics",
      "Memorize essential Duas and Surahs",
      "Apply Islamic values in daily life situations",
    ],
    curriculum: [
      { grade: "Kindergarten", focus: "Basic Islamic concepts, simple Duas, stories of Prophets" },
      { grade: "Grade 1-2", focus: "Quran reading basics, Wudu and Salah, Islamic manners" },
      { grade: "Grade 3-4", focus: "Advanced Tajweed, Hadith introduction, Islamic history" },
      { grade: "Grade 5", focus: "Deeper Quranic understanding, comprehensive Seerah study" },
    ],
    materials: [
      "Age-appropriate Quran translations and Tafsir",
      "Interactive Islamic learning apps and games",
      "Authentic Hadith collections for children",
      "Character-building storybooks",
      "Prayer mats and learning aids",
    ],
  },
  "language-arts": {
    title: "Language Arts",
    description: "Building strong literacy skills through reading, writing, and communication",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=600&fit=crop",
    overview:
      "Our Language Arts curriculum develops proficient readers, confident writers, and articulate communicators. We use a balanced literacy approach that includes phonics, reading comprehension, creative writing, grammar, and public speaking.",
    learningOutcomes: [
      "Decode and comprehend age-appropriate texts",
      "Express ideas clearly through various writing forms",
      "Develop strong vocabulary and grammar skills",
      "Analyze literary elements in stories and poems",
      "Present information confidently and persuasively",
      "Appreciate diverse literary genres and cultures",
    ],
    curriculum: [
      { grade: "Kindergarten", focus: "Letter recognition, phonics, basic sight words, storytelling" },
      { grade: "Grade 1-2", focus: "Reading fluency, simple sentence writing, spelling patterns" },
      { grade: "Grade 3-4", focus: "Reading comprehension strategies, paragraph writing, research skills" },
      { grade: "Grade 5", focus: "Literary analysis, essay writing, formal presentations" },
    ],
    materials: [
      "Diverse library collection including Islamic literature",
      "Phonics and reading intervention programs",
      "Writing workshop materials and journals",
      "Digital literacy tools and educational software",
      "Age-appropriate novels and chapter books",
    ],
  },
  "mathematics": {
    title: "Mathematics",
    description: "Developing problem-solving skills and mathematical thinking",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop",
    overview:
      "Our math program builds conceptual understanding through hands-on exploration, real-world applications, and systematic skill development. We emphasize critical thinking, problem-solving strategies, and mathematical reasoning.",
    learningOutcomes: [
      "Master fundamental arithmetic operations",
      "Understand and apply mathematical concepts",
      "Solve multi-step word problems effectively",
      "Recognize patterns and make predictions",
      "Use mathematical tools and technology",
      "Connect math to real-world situations",
    ],
    curriculum: [
      { grade: "Kindergarten", focus: "Number sense, counting, shapes, basic patterns" },
      { grade: "Grade 1-2", focus: "Addition, subtraction, place value, measurement basics" },
      { grade: "Grade 3-4", focus: "Multiplication, division, fractions, geometry" },
      { grade: "Grade 5", focus: "Decimals, percentages, algebraic thinking, data analysis" },
    ],
    materials: [
      "Manipulatives for hands-on learning",
      "Interactive math software and apps",
      "Problem-solving workbooks and challenges",
      "Geometric tools and measurement instruments",
      "Real-world math project materials",
    ],
  },
  "science": {
    title: "Science",
    description: "Inspiring curiosity through exploration and discovery",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&h=600&fit=crop",
    overview:
      "Our science curriculum encourages students to ask questions, conduct investigations, and understand the natural world around them. We integrate Islamic perspectives on creation and stewardship of Earth.",
    learningOutcomes: [
      "Apply the scientific method to investigations",
      "Understand fundamental concepts in life, earth, and physical sciences",
      "Make observations and collect data systematically",
      "Explain scientific phenomena using evidence",
      "Appreciate Allah's creation and natural wonders",
      "Practice environmental stewardship",
    ],
    curriculum: [
      { grade: "Kindergarten", focus: "Five senses, living vs non-living, weather observations" },
      { grade: "Grade 1-2", focus: "Plants and animals, simple machines, states of matter" },
      { grade: "Grade 3-4", focus: "Ecosystems, energy forms, water cycle, human body" },
      { grade: "Grade 5", focus: "Earth science, chemistry basics, forces and motion" },
    ],
    materials: [
      "Science lab equipment and safety gear",
      "Living organisms and habitat models",
      "Experiment kits and supplies",
      "Digital simulations and virtual labs",
      "Field trip experiences to nature centers",
    ],
  },
  "social-studies": {
    title: "Social Studies",
    description: "Understanding our world, history, and diverse cultures",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&h=600&fit=crop",
    overview:
      "Social Studies helps students understand their place in the world and appreciate diverse cultures and histories. We explore geography, history, civics, and Islamic contributions to civilization.",
    learningOutcomes: [
      "Understand basic geography and map skills",
      "Appreciate cultural diversity and Islamic heritage",
      "Learn about historical events and their impact",
      "Recognize rights and responsibilities as citizens",
      "Develop empathy and global awareness",
      "Connect past events to current issues",
    ],
    curriculum: [
      { grade: "Kindergarten", focus: "Family, community helpers, basic geography" },
      { grade: "Grade 1-2", focus: "Maps and globes, American history basics, cultures" },
      { grade: "Grade 3-4", focus: "World geography, Islamic Golden Age, government basics" },
      { grade: "Grade 5", focus: "U.S. history, world religions, current events" },
    ],
    materials: [
      "Interactive maps and globes",
      "Historical artifacts and replicas",
      "Multicultural books and resources",
      "Documentary films and virtual tours",
      "Timeline tools and graphic organizers",
    ],
  },
  "arabic": {
    title: "Arabic Language",
    description: "Mastering the language of the Quran",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=600&fit=crop",
    overview:
      "Our Arabic program teaches students to read, write, and speak the language of the Quran. We use immersive methods and cultural connections to make learning engaging and meaningful.",
    learningOutcomes: [
      "Recognize and write Arabic letters and words",
      "Understand basic Arabic grammar and sentence structure",
      "Engage in simple conversations in Arabic",
      "Read Quranic verses with understanding",
      "Appreciate Arabic literature and poetry",
      "Connect language skills to Islamic studies",
    ],
    curriculum: [
      { grade: "Kindergarten", focus: "Arabic alphabet, basic vocabulary, simple phrases" },
      { grade: "Grade 1-2", focus: "Letter connections, common words, greetings" },
      { grade: "Grade 3-4", focus: "Reading fluency, basic grammar, conversational skills" },
      { grade: "Grade 5", focus: "Advanced reading, writing composition, Quranic vocabulary" },
    ],
    materials: [
      "Arabic alphabet charts and manipulatives",
      "Bilingual dictionaries and flashcards",
      "Arabic storybooks and readers",
      "Language learning software and apps",
      "Cultural materials and authentic texts",
    ],
  },
  "arts": {
    title: "Creative Arts",
    description: "Fostering creativity and self-expression",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=600&fit=crop",
    overview:
      "Our arts program nurtures creativity through visual arts, crafts, and Islamic art forms. Students explore various media, techniques, and cultural art traditions while developing fine motor skills and aesthetic appreciation.",
    learningOutcomes: [
      "Explore various art media and techniques",
      "Express ideas and emotions through art",
      "Appreciate Islamic geometric patterns and calligraphy",
      "Develop fine motor skills and hand-eye coordination",
      "Understand basic design principles",
      "Create original artwork with confidence",
    ],
    curriculum: [
      { grade: "Kindergarten", focus: "Basic shapes, colors, textures, free exploration" },
      { grade: "Grade 1-2", focus: "Drawing, painting, simple crafts, pattern making" },
      { grade: "Grade 3-4", focus: "Islamic geometric art, calligraphy basics, mixed media" },
      { grade: "Grade 5", focus: "Advanced projects, art history, portfolio development" },
    ],
    materials: [
      "Paints, markers, crayons, and drawing tools",
      "Clay, paper, fabric, and craft supplies",
      "Calligraphy pens and practice sheets",
      "Geometric pattern templates",
      "Art appreciation books and prints",
    ],
  },
  "music": {
    title: "Nasheed & Music",
    description: "Learning through Islamic songs and rhythm",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1200&h=600&fit=crop",
    overview:
      "Our music program focuses on Islamic nasheeds (a cappella songs) and rhythm activities that align with Islamic values. Students learn to appreciate melodious voices, maintain rhythm, and express faith through song.",
    learningOutcomes: [
      "Sing Islamic nasheeds with proper pitch and rhythm",
      "Understand basic musical concepts (tempo, rhythm, melody)",
      "Appreciate the beauty of vocal harmony",
      "Develop confidence in group performances",
      "Learn nasheeds in Arabic and English",
      "Use rhythm instruments appropriately",
    ],
    curriculum: [
      { grade: "Kindergarten", focus: "Simple nasheeds, clapping rhythms, movement activities" },
      { grade: "Grade 1-2", focus: "Expanding nasheed repertoire, basic rhythm instruments" },
      { grade: "Grade 3-4", focus: "Harmony singing, nasheed meanings, performance skills" },
      { grade: "Grade 5", focus: "Advanced nasheeds, group performances, nasheed composition" },
    ],
    materials: [
      "Collection of Islamic nasheeds and recordings",
      "Simple percussion instruments (daff, rhythm sticks)",
      "Lyrics sheets and song books",
      "Audio recording equipment",
      "Performance costumes and props",
    ],
  },
};

export default function SubjectDetailPage() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const subject = subjectId ? subjectData[subjectId] : null;

  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Subject Not Found</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

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
            src={subject.image}
            alt={subject.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-6 text-white hover:text-white/80"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {subject.title}
            </h1>
            <p className="text-xl text-white/90">{subject.description}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Overview</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {subject.overview}
              </p>
            </motion.div>

            {/* Learning Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Learning Outcomes</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {subject.learningOutcomes.map((outcome: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <p>{outcome}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Curriculum by Grade */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Curriculum by Grade</h2>
              </div>
              <div className="space-y-4">
                {subject.curriculum.map((level: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      {level.grade}
                    </h3>
                    <p className="text-muted-foreground">{level.focus}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Materials & Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Materials & Resources</h2>
              </div>
              <ul className="space-y-3">
                {subject.materials.map((material: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * index }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    {material}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                Interested in Our {subject.title} Program?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact us to learn more or schedule a visit.
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
