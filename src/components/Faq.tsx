import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  Search,
  BookOpen,
  GraduationCap,
  Calendar,
  DollarSign,
  Users,
  Shield,
} from "lucide-react";

const faqCategories = [
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "admissions", label: "Admissions", icon: GraduationCap },
  { id: "curriculum", label: "Curriculum", icon: BookOpen },
  { id: "fees", label: "Fees & Payment", icon: DollarSign },
  { id: "schedule", label: "Schedule", icon: Calendar },
  { id: "safety", label: "Safety", icon: Shield },
];

const faqs = [
  {
    category: "admissions",
    question: "What is the admission process for TarbiyaX Academy?",
    answer:
      "Our admission process begins with an online application form, followed by a campus tour and parent-teacher meeting. We review each application holistically, considering the child's readiness and family alignment with our Islamic values. Once accepted, we provide a comprehensive orientation to help families transition smoothly into our community.",
  },
  {
    category: "admissions",
    question: "What age groups do you accept?",
    answer:
      "We currently accept students from Kindergarten through 5th grade (ages 5-11). Our program is specifically designed for elementary education, providing age-appropriate Islamic and academic instruction. We assess each child's developmental readiness during the admission process to ensure the best fit.",
  },
  {
    category: "curriculum",
    question: "How do you balance Islamic studies with academics?",
    answer:
      "Our curriculum integrates Islamic values throughout the day while maintaining rigorous academic standards. Students receive dedicated Quran, Arabic, and Islamic Studies classes, while core subjects like Math, Science, and Language Arts incorporate Islamic perspectives. This holistic approach ensures students excel both spiritually and academically.",
  },
  {
    category: "curriculum",
    question: "What teaching methodology do you use?",
    answer:
      "We employ a blend of traditional and modern teaching methods, including project-based learning, collaborative activities, and individualized instruction. Our small class sizes (12:1 ratio) allow teachers to tailor their approach to each student's learning style while maintaining high standards and expectations.",
  },
  {
    category: "fees",
    question: "What are the tuition fees and payment options?",
    answer:
      "Our annual tuition varies by grade level. We offer flexible payment plans including monthly, quarterly, and annual options. Financial assistance is available for qualifying families. Please contact our admissions office for detailed fee structures and to discuss payment arrangements that work for your family.",
  },
  {
    category: "fees",
    question: "Are there any additional fees besides tuition?",
    answer:
      "In addition to tuition, there is a one-time registration fee and annual technology fee. Field trips, extracurricular activities, and uniform costs are separate. We maintain transparency in all costs and provide families with a complete breakdown during the admission process.",
  },
  {
    category: "schedule",
    question: "What are your school hours?",
    answer:
      "Our regular school day runs from 8:00 AM to 3:30 PM, Monday through Friday. We offer extended care programs from 7:00 AM and until 6:00 PM for working families. Half-day Kindergarten runs from 8:00 AM to 12:00 PM, with full-day options also available.",
  },
  {
    category: "schedule",
    question: "Do you follow a traditional school calendar?",
    answer:
      "We follow a modified traditional calendar with breaks aligned with both Islamic holidays and standard school holidays. Our academic year runs from late August to early June, with winter, spring, and summer breaks. We also observe major Islamic holidays including Eid al-Fitr and Eid al-Adha.",
  },
  {
    category: "safety",
    question: "What safety measures do you have in place?",
    answer:
      "Safety is our top priority. We maintain secure entry systems, visitor check-in procedures, and comprehensive emergency protocols. All staff undergo background checks and regular safety training. Our facility includes security cameras, and we conduct regular emergency drills. A school nurse is on-site during school hours.",
  },
  {
    category: "safety",
    question: "How do you handle student wellbeing and discipline?",
    answer:
      "We foster a nurturing environment based on Islamic principles of respect and compassion. Our positive discipline approach focuses on character development and conflict resolution. We maintain clear behavioral expectations while supporting each child's emotional and social growth through counseling services and restorative practices.",
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-primary text-sm font-semibold uppercase tracking-wider mb-6"
          >
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight leading-tight">
            Got{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">
              Questions?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Find answers to common questions about admissions, curriculum, fees,
            and more.
          </p>
        </motion.div>

        {/* Search Bar */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-all duration-500" />
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card/50 backdrop-blur-xl border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </motion.div> */}

        {/* Category Filters */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {faqCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                  : "bg-card/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <category.icon className="w-4 h-4 relative z-10" />
              <span className="relative z-10">{category.label}</span>
            </motion.button>
          ))}
        </motion.div> */}

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={`${faq.category}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative"
                >
                  {/* Card Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500" />

                  {/* FAQ Card */}
                  <div className="relative glass-card border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left p-6 flex items-start gap-4"
                    >
                      {/* Question Icon */}
                      <div
                        className={`p-2.5 rounded-xl transition-all duration-300 ${
                          openIndex === index
                            ? "bg-primary/20 text-primary"
                            : "bg-muted/50 text-muted-foreground"
                        }`}
                      >
                        <HelpCircle className="w-5 h-5" />
                      </div>

                      {/* Question Text */}
                      <div className="flex-1">
                        <h3
                          className={`text-lg font-bold transition-colors ${
                            openIndex === index
                              ? "text-primary"
                              : "text-foreground group-hover:text-primary"
                          }`}
                        >
                          {faq.question}
                        </h3>
                      </div>

                      {/* Chevron Icon */}
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`p-2 rounded-lg transition-colors ${
                          openIndex === index
                            ? "bg-primary/20 text-primary"
                            : "bg-muted/50 text-muted-foreground"
                        }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </button>

                    {/* Answer */}
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pl-[72px]">
                            <motion.p
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1 }}
                              className="text-muted-foreground leading-relaxed"
                            >
                              {faq.answer}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bottom Border Animation */}
                    <div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-500 rounded-full ${
                        openIndex === index ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 rounded-full bg-muted/30 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  No questions found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or category filter
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Still Have Questions CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        > */}
          {/* <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-20 blur-2xl" />
            <div className="relative glass-card p-8 max-w-2xl">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our admissions team is
                here to help.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 rounded-xl font-bold text-lg overflow-hidden group"
              > */}
                {/* Button Gradient */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-xl opacity-50 group-hover:opacity-75 transition-opacity" /> */}

                {/* Button Content */}
                {/* <span className="relative z-10 text-white flex items-center gap-2">
                  Contact Admissions
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span> */}

                {/* Shine Effect */}
                {/* <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
              </motion.button>
            </div>
          </div>
        </motion.div> */}

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center mt-16"
        >
          <div className="relative">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full blur-xl opacity-50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
