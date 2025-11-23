import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, School, Users, Globe, Camera, Heart, Shield, Scale, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

export default function TermsOfService() {
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const sections = [
    {
      icon: FileText,
      title: "Agreement to Terms",
      content: "By accessing or using the TarbiyaX Islamic Academy website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
    },
    {
      icon: School,
      title: "Enrollment and Admissions",
      subsections: [
        {
          subtitle: "Application Process",
          description: "Enrollment at TarbiyaX Islamic Academy is subject to:",
          items: [
            "Completion of all required application materials",
            "Availability of space in the requested grade level",
            "Meeting age and academic requirements",
            "Payment of all applicable fees",
            "Acceptance by the school administration",
          ],
        },
        {
          subtitle: "Tuition and Fees",
          description: "All tuition and fees are non-refundable unless otherwise stated in writing. Payment schedules and late fees are outlined in the enrollment agreement. The school reserves the right to adjust fees with reasonable notice.",
        },
      ],
    },
    {
      icon: Users,
      title: "Student Conduct and Expectations",
      description: "Students and families are expected to:",
      items: [
        "Adhere to the school's code of conduct and Islamic values",
        "Show respect to teachers, staff, and fellow students",
        "Complete assignments and maintain academic standards",
        "Attend classes regularly and punctually",
        "Follow dress code and other school policies",
        "Communicate openly and respectfully with school staff",
      ],
      note: "Violation of conduct expectations may result in disciplinary action, including suspension or dismissal from the school.",
    },
    {
      icon: Heart,
      title: "Parent and Guardian Responsibilities",
      description: "Parents and guardians agree to:",
      items: [
        "Support the school's mission and Islamic educational philosophy",
        "Ensure timely payment of all tuition and fees",
        "Attend parent-teacher conferences and school events",
        "Provide accurate and current contact information",
        "Support their child's learning at home",
        "Communicate concerns through appropriate channels",
        "Pick up and drop off students according to school policies",
      ],
    },
    {
      icon: Globe,
      title: "Website Use",
      subsections: [
        {
          subtitle: "Acceptable Use",
          description: "You may use our website for lawful purposes only. You agree not to:",
          items: [
            "Violate any applicable laws or regulations",
            "Infringe on intellectual property rights",
            "Transmit harmful or malicious code",
            "Attempt unauthorized access to our systems",
            "Interfere with the proper functioning of the website",
          ],
        },
        {
          subtitle: "Content Accuracy",
          description: "While we strive to provide accurate and up-to-date information, we make no warranties about the completeness, accuracy, or reliability of any information on our website.",
        },
      ],
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: "All content on this website, including text, graphics, logos, images, and software, is the property of TarbiyaX Islamic Academy and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our written permission.",
    },
    {
      icon: Camera,
      title: "Photography and Media Release",
      content: "The school may photograph or video students during school activities for promotional and educational purposes. Parents who do not wish their child to be photographed must notify the school in writing.",
    },
    {
      icon: Heart,
      title: "Health and Safety",
      description: "The school maintains policies to protect student health and safety. Parents must:",
      items: [
        "Provide accurate medical and emergency information",
        "Notify the school of health conditions or allergies",
        "Keep sick children at home to prevent illness spread",
        "Provide required immunization records",
        "Authorize emergency medical treatment when necessary",
      ],
    },
    {
      icon: FileText,
      title: "Withdrawal and Dismissal",
      content: "Parents may withdraw their child with written notice as specified in the enrollment agreement. The school reserves the right to dismiss students for non-payment, behavioral issues, or other violations of school policies. Refund policies are outlined in the enrollment agreement.",
    },
    {
      icon: Shield,
      title: "Limitation of Liability",
      content: "To the fullest extent permitted by law, TarbiyaX Islamic Academy shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services. We do not guarantee uninterrupted or error-free operation of our website.",
    },
    {
      icon: Scale,
      title: "Dispute Resolution",
      content: "Any disputes arising from these terms shall be resolved through good faith negotiation. If negotiation fails, disputes may be submitted to mediation or arbitration as outlined in the enrollment agreement.",
    },
    {
      icon: FileText,
      title: "Changes to Terms",
      content: "We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of our website or services after changes constitutes acceptance of the modified terms.",
    },
    {
      icon: Scale,
      title: "Governing Law",
      content: "These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction in which the school operates, without regard to conflict of law principles.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-primary origin-left z-50"
      />

      {/* Hero Header */}
      <motion.section
        style={{ y: headerY, opacity: headerOpacity }}
        className="relative pt-32 pb-20 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-r from-secondary/30 via-transparent to-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-primary/30 via-transparent to-secondary/20 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="relative inline-block mb-8"
            >
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-secondary via-accent to-primary flex items-center justify-center shadow-2xl">
                <FileText className="w-12 h-12 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-accent to-primary rounded-3xl blur-2xl opacity-50" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-foreground"
            >
              Terms of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-primary">
                Service
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground"
            >
              Please read these terms carefully before using our services.
            </motion.p>

            {/* Date Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-card/50 backdrop-blur-xl border border-border/50 text-sm font-semibold text-muted-foreground"
            >
              <FileText className="w-4 h-4 text-secondary" />
              Last updated: November 2024
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Sections */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative group"
              >
                {/* Section Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/10 via-accent/10 to-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500" />

                {/* Section Card */}
                <div className="relative backdrop-blur-xl bg-card/50 border border-border/50 rounded-3xl p-8 md:p-10 hover:border-secondary/30 transition-all duration-500">
                  {/* Section Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative"
                    >
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 backdrop-blur-sm border border-secondary/20">
                        <section.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl opacity-50" />
                    </motion.div>

                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70 flex-1">
                      {section.title}
                    </h2>
                  </div>

                  {/* Section Content */}
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    {section.content && (
                      <p className="text-lg">{section.content}</p>
                    )}

                    {section.description && (
                      <p className="text-lg">{section.description}</p>
                    )}

                    {section.items && (
                      <ul className="space-y-3">
                        {section.items.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-3 group/item"
                          >
                            <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                            <span className="text-base">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    {section.note && (
                      <p className="text-base italic border-l-2 border-secondary/50 pl-4 py-2">
                        {section.note}
                      </p>
                    )}

                    {section.subsections && (
                      <div className="space-y-6">
                        {section.subsections.map((subsection, subIdx) => (
                          <div key={subIdx} className="pl-4 border-l-2 border-secondary/30 space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                              {subsection.subtitle}
                            </h3>
                            <p className="text-base">{subsection.description}</p>
                            {subsection.items && (
                              <ul className="space-y-2">
                                {subsection.items.map((item, itemIdx) => (
                                  <li key={itemIdx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Contact Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary via-accent to-primary rounded-3xl opacity-20 blur-2xl" />

              {/* Contact Card */}
              <div className="relative backdrop-blur-xl bg-card/50 border border-secondary/30 rounded-3xl p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative"
                  >
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-secondary to-accent">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-2xl blur-xl opacity-50" />
                  </motion.div>

                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent flex-1">
                    Contact Information
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  If you have questions about these Terms of Service, please contact us:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <Mail className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Email</p>
                        <a href="mailto:info@nuralilm.edu" className="text-muted-foreground hover:text-secondary transition-colors">
                          info@nuralilm.edu
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Phone</p>
                        <a href="tel:+15551234567" className="text-muted-foreground hover:text-accent transition-colors">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Address</p>
                      <p className="text-muted-foreground">
                        <strong className="block text-foreground">TarbiyaX Islamic Academy</strong>
                        123 Education Lane<br />
                        City, State 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
