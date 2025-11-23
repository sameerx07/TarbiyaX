import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Send,
} from "lucide-react";

const footerLinks = {
  school: [
    { label: "About Us", href: "#about" },
    { label: "Our Mission", href: "#about" },
    { label: "Faculty", href: "#teachers" },
    { label: "Admissions", href: "#contact" },
    { label: "Careers", href: "#contact" },
  ],
  academics: [
    { label: "Curriculum", href: "#curriculum" },
    { label: "Islamic Studies", href: "/subject/islamic-studies" },
    { label: "Programs", href: "#why" },
    { label: "Library", href: "#" },
    { label: "Academic Calendar", href: "#" },
  ],
  resources: [
    { label: "Blog & News", href: "#blog" },
    { label: "Events", href: "#blog" },
    { label: "Parent Portal", href: "#contact" },
    { label: "Student Portal", href: "#contact" },
    { label: "Uniform Shop", href: "#" },
  ],
};

const socialLinks = [
  {
    Icon: Facebook,
    href: "https://facebook.com",
    label: "Facebook",
    color: "hover:bg-[#1877F2]",
  },
  {
    Icon: Twitter,
    href: "https://twitter.com",
    label: "Twitter",
    color: "hover:bg-[#1DA1F2]",
  },
  {
    Icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram",
    color: "hover:bg-[#E4405F]",
  },
  {
    Icon: Youtube,
    href: "https://youtube.com",
    label: "YouTube",
    color: "hover:bg-[#FF0000]",
  },
  {
    Icon: Mail,
    href: "mailto:info@nuralilm.edu",
    label: "Email",
    color: "hover:bg-emerald-500",
  },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-slate-900 text-slate-300 pt-20 pb-10 overflow-hidden font-sans">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Contact Column (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary to-blue-600 text-white p-2.5 rounded-xl shadow-xl">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              </motion.div>
              <div>
                <h3 className="font-bold text-2xl text-white leading-none tracking-tight">
                  TarbiyaX
                </h3>
                <p className="text-xs text-slate-400 font-medium tracking-widest uppercase mt-1">
                  Islamic Academy
                </p>
              </div>
            </Link>

            <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
              Nurturing young minds through a holistic blend of Islamic values
              and academic excellence. Building the leaders of tomorrow, today.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 pt-2">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-sm text-slate-400 group cursor-pointer"
              >
                <div className="relative">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5 relative z-10" />
                  <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                </div>
                <span className="group-hover:text-slate-300 transition-colors">
                  123 Knowledge Avenue, <br />
                  Education City, ST 12345
                </span>
              </motion.div>
              <motion.a
                href="tel:+15551234567"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm text-slate-400 group"
              >
                <div className="relative">
                  <Phone className="w-5 h-5 text-primary shrink-0 relative z-10" />
                  <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                </div>
                <span className="group-hover:text-slate-300 transition-colors">
                  +1 (555) 123-4567
                </span>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              {socialLinks.map(({ Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-300 hover:text-white hover:shadow-lg ${color}`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns (Span 5) */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* School */}
            <div>
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-widest">
                School
              </h4>
              <ul className="space-y-3">
                {footerLinks.school.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Academics */}
            <div>
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-widest">
                Academics
              </h4>
              <ul className="space-y-3">
                {footerLinks.academics.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-secondary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-secondary/0 group-hover:bg-secondary transition-all" />
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-widest">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-accent transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/0 group-hover:bg-accent transition-all" />
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Column (Span 3) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-widest">
                Stay Updated
              </h4>
              <p className="text-sm text-slate-400 mb-6">
                Subscribe to our newsletter for the latest school news and
                updates.
              </p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-xl overflow-hidden group"
                >
                  {/* Button Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

                  {/* Button Content */}
                  <span className="relative z-10 flex items-center gap-2">
                    Subscribe Now
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>

                  {/* Shine Effect */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  />
                </motion.button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-slate-500 flex items-center gap-1"
            >
              © {new Date().getFullYear()} TarbiyaX - ILM Renaissance Academy. Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-3 h-3 text-red-500 fill-current" />
              </motion.span>{" "}
              for the humanity.
            </motion.p>

            <div className="flex gap-6">
              <Link
                to="/privacy-policy"
                className="text-xs text-slate-500 hover:text-white transition-colors relative group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                to="/terms-of-service"
                className="text-xs text-slate-500 hover:text-white transition-colors relative group"
              >
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                to="/cookies"
                className="text-xs text-slate-500 hover:text-white transition-colors relative group"
              >
                Cookie Policy
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
