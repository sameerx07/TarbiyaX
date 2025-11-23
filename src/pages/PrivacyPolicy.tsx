import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Lock, Eye, UserCheck, FileText, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

export default function PrivacyPolicy() {
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
      title: "Introduction",
      content: "At TarbiyaX Islamic Academy, we are committed to protecting the privacy and security of our students, families, and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.",
    },
    {
      icon: Eye,
      title: "Information We Collect",
      subsections: [
        {
          subtitle: "Personal Information",
          description: "We may collect personal information that you voluntarily provide to us when you:",
          items: [
            "Submit an enrollment application",
            "Contact us through our website forms",
            "Subscribe to our newsletter",
            "Register for events or programs",
            "Participate in surveys or feedback forms",
          ],
          note: "This information may include: name, email address, phone number, mailing address, student information, and any other information you choose to provide.",
        },
        {
          subtitle: "Automatically Collected Information",
          description: "When you visit our website, we may automatically collect certain information about your device, including IP address, browser type, operating system, access times, and pages viewed.",
        },
      ],
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      description: "We use the information we collect to:",
      items: [
        "Process enrollment applications and admissions",
        "Communicate with parents and guardians about their children's education",
        "Send newsletters, updates, and promotional materials",
        "Respond to inquiries and provide customer support",
        "Improve our website and services",
        "Comply with legal obligations",
        "Protect the safety and security of our students and staff",
      ],
    },
    {
      icon: UserCheck,
      title: "Information Sharing",
      description: "We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:",
      items: [
        "With service providers who assist us in operating our school and website",
        "To comply with legal requirements or respond to lawful requests",
        "To protect the rights, property, or safety of our school, students, or others",
        "With your consent or at your direction",
      ],
    },
    {
      icon: Shield,
      title: "Children's Privacy",
      content: "We are committed to protecting children's privacy. We comply with the Children's Online Privacy Protection Act (COPPA) and do not knowingly collect personal information from children under 13 without parental consent. If you believe we have collected information from a child under 13, please contact us immediately.",
    },
    {
      icon: Lock,
      title: "Data Security",
      content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.",
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      description: "You have the right to:",
      items: [
        "Access and receive a copy of your personal information",
        "Request correction of inaccurate information",
        "Request deletion of your information (subject to legal requirements)",
        "Opt-out of marketing communications",
        "Withdraw consent where we rely on consent to process your information",
      ],
    },
    {
      icon: FileText,
      title: "Cookies and Tracking",
      content: "We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookies through your browser settings, but disabling cookies may affect website functionality.",
    },
    {
      icon: FileText,
      title: "Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last updated' date.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-50"
      />

      {/* Hero Header */}
      <motion.section
        style={{ y: headerY, opacity: headerOpacity }}
        className="relative pt-32 pb-20 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-l from-primary/30 via-transparent to-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-secondary/30 via-transparent to-primary/20 rounded-full blur-3xl animate-pulse" />
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
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-2xl">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-50" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-foreground"
            >
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                Policy
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground"
            >
              Your privacy is our priority. Learn how we protect your information.
            </motion.p>

            {/* Date Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-card/50 backdrop-blur-xl border border-border/50 text-sm font-semibold text-muted-foreground"
            >
              <FileText className="w-4 h-4 text-primary" />
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Section Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500" />

                {/* Section Card */}
                <div className="relative backdrop-blur-xl bg-card/50 border border-border/50 rounded-3xl p-8 md:p-10 hover:border-primary/30 transition-all duration-500">
                  {/* Section Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative"
                    >
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                        <section.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-50" />
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
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                            <span className="text-base">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    {section.subsections && (
                      <div className="space-y-6">
                        {section.subsections.map((subsection, subIdx) => (
                          <div key={subIdx} className="pl-4 border-l-2 border-primary/30 space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                              {subsection.subtitle}
                            </h3>
                            <p className="text-base">{subsection.description}</p>
                            {subsection.items && (
                              <ul className="space-y-2">
                                {subsection.items.map((item, itemIdx) => (
                                  <li key={itemIdx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {subsection.note && (
                              <p className="text-base italic">{subsection.note}</p>
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
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-20 blur-2xl" />

              {/* Contact Card */}
              <div className="relative backdrop-blur-xl bg-card/50 border border-primary/30 rounded-3xl p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative"
                  >
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-secondary">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-xl opacity-50" />
                  </motion.div>

                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary flex-1">
                    Contact Us
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Email</p>
                        <a href="mailto:privacy@nuralilm.edu" className="text-muted-foreground hover:text-primary transition-colors">
                          privacy@nuralilm.edu
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <Phone className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Phone</p>
                        <a href="tel:+15551234567" className="text-muted-foreground hover:text-secondary transition-colors">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <MapPin className="w-5 h-5 text-accent" />
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
