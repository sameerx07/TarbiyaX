import { Link } from "react-router-dom";
import { BookOpen, Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const footerLinks = {
  school: [
    { label: "About Us", href: "#about" },
    { label: "Our Mission", href: "#about" },
    { label: "Faculty", href: "#teachers" },
    { label: "Admissions", href: "#contact" },
  ],
  academics: [
    { label: "Curriculum", href: "#curriculum" },
    { label: "Islamic Studies", href: "/subject/islamic-studies" },
    { label: "Programs", href: "#why" },
    { label: "Resources", href: "#blog" },
  ],
  resources: [
    { label: "Blog", href: "#blog" },
    { label: "Events", href: "#blog" },
    { label: "Parent Portal", href: "#contact" },
    { label: "Student Portal", href: "#contact" },
  ],
  contact: [
    { label: "Contact Us", href: "#contact" },
    { label: "Schedule Visit", href: "#contact" },
    { label: "Employment", href: "#contact" },
    { label: "Support", href: "#contact" },
  ],
};

const socialLinks = [
  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { Icon: Mail, href: "mailto:info@nuralilm.edu", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="bg-primary text-primary-foreground p-2 rounded-xl group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-none">Nur Al-Ilm</h3>
                <p className="text-xs text-accent-foreground/70">Islamic Academy</p>
              </div>
            </Link>
            <p className="text-sm text-accent-foreground/80 mb-6">
              Nurturing young minds through Islamic values and academic excellence since 2015.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all transform hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* School Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">School</h4>
            <ul className="space-y-2">
              {footerLinks.school.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-accent-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Academics</h4>
            <ul className="space-y-2">
              {footerLinks.academics.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-accent-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-accent-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-accent-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-accent-foreground/70">
              © {new Date().getFullYear()} Nur Al-Ilm Islamic Academy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-accent-foreground/70 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-accent-foreground/70 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-accent-foreground/70 hover:text-secondary transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
