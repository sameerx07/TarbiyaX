import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Clock, Send, User, GraduationCap, MessageSquare } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@nuralilm.edu",
    link: "mailto:info@nuralilm.edu",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  // {
  //   icon: MapPin,
  //   title: "Visit Us",
  //   value: "123 Education Lane, City, State",
  //   link: "https://maps.google.com",
  //   color: "text-orange-500",
  //   bg: "bg-orange-500/10",
  // },
  // {
  //   icon: Clock,
  //   title: "Office Hours",
  //   value: "Mon-Fri: 8:00 AM - 4:00 PM",
  //   link: null,
  //   color: "text-purple-500",
  //   bg: "bg-purple-500/10",
  // },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    
    setIsSuccess(true);
    reset();
    setIsSubmitting(false);
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden bg-background">
      
      {/* --- Animated Bubbles Background --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            y: [0, -20, 0], 
            x: [0, 10, 0],
            scale: [1, 1.1, 1] 
          }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl mix-blend-multiply" 
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0], 
            x: [0, -10, 0],
            scale: [1, 1.2, 1] 
          }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl mix-blend-multiply" 
        />
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.05, 1]
          }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl mix-blend-multiply" 
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10  text-sm font-semibold uppercase tracking-wider mb-6">
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions about admissions or our curriculum? We're here to help. 
            Reach out and let's discuss how we can serve your family.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
          
          {/* --- Left: Contact Form --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 sm:p-10 relative overflow-hidden border border-white/20 shadow-2xl shadow-primary/5">
              
              {/* Success Overlay */}
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="absolute inset-0 z-20 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you shortly.</p>
                </motion.div>
              )}

              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Parent Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Parent/Guardian Name
                    </label>
                    <input
                      {...register("parentName", { required: "Parent name is required" })}
                      className="w-full px-4 py-3 rounded-xl bg-background/50 border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                    {errors.parentName && <p className="text-xs text-red-500">{errors.parentName.message}</p>}
                  </div>

                  {/* Student Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-secondary" />
                      Student Name
                    </label>
                    <input
                      {...register("studentName")}
                      className="w-full px-4 py-3 rounded-xl bg-background/50 border border-input focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <input
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                    })}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="family@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <input
                    type="tel"
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="(555) 000-0000"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-accent" />
                    Message
                  </label>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-input focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>Send Message <Send className="w-5 h-5" /></>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* --- Right: Info & Map --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Info Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-4`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Stylized Map */}
            {/* <div className="glass-card p-2 overflow-hidden h-80 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0" />
              <div className="w-full h-full rounded-xl overflow-hidden relative z-10 bg-slate-100 dark:bg-slate-800">
                <div className="absolute inset-0 opacity-50" 
                     style={{ 
                       backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)', 
                       backgroundSize: '30px 30px' 
                     }} 
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="relative">
                     <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute inset-0" />
                     <div className="w-4 h-4 bg-primary rounded-full relative z-10 border-2 border-white shadow-lg" />
                     <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 px-3 py-1 rounded-lg shadow-lg text-xs font-bold whitespace-nowrap">
                       We are here
                     </div>
                   </div>
                </div>
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center"
              >
                <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-black px-6 py-2 rounded-full font-bold shadow-xl">
                  Open in Maps
                </button>
              </a>
            </div> */}

          </motion.div>
        </div>
      </div>
    </section>
  );
}