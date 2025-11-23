import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Heart, Star, Users, Target } from "lucide-react";

/**
 * AboutSection
 * - Animations restart every time the section comes into view
 * - Includes extra content: mission, animated stats, CTA
 * - Uses your existing glass-card / design tokens in index.css
 */

const images = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=1066&fit=crop&q=80",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=1066&fit=crop&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=1066&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=1066&fit=crop&q=80",
];

const values = [
  { icon: Heart, label: "Faith-Based", description: "Integrative Islamic values in every lesson" },
  { icon: Star, label: "Excellence", description: "Rigorous academics & critical thinking" },
  { icon: Users, label: "Community", description: "Strong partnership with families" },
  { icon: Target, label: "Growth", description: "Focus on whole-child development" },
];

const statsSeed = [
  { label: "Students", value: 1240, suffix: "+" },
  { label: "Graduation Rate", value: 98, suffix: "%" },
  { label: "Years Teaching", value: 12, suffix: "+" },
];

export function AboutSection() {
  const ref = useRef(null);
  // set once: false so inView toggles every time
  const isInView = useInView(ref, { once: false, margin: "-120px" });
  const controls = useAnimation();

  // for counters
  const [countersActive, setCountersActive] = useState(false);
  const [counters, setCounters] = useState(statsSeed.map(() => 0));

  // animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, when: "beforeChildren" },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  useEffect(() => {
    // start or reset animations when visibility changes
    if (isInView) {
      controls.start("visible");
      setCountersActive(true);
    } else {
      // reverse to hidden state so animations re-run next time
      controls.start("hidden");
      setCountersActive(false);
      // reset counters visually when leaving (so they animate again)
      setCounters(statsSeed.map(() => 0));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  // animate numeric counters (vanilla, no deps)
  useEffect(() => {
    let rafId;
    let startTs = null;
    const duration = 900; // ms

    if (!countersActive) return;

    const startValues = counters.map((c) => c);
    const targetValues = statsSeed.map((s) => s.value);

    const step = (ts) => {
      if (!startTs) startTs = ts;
      const elapsed = ts - startTs;
      const t = Math.min(1, elapsed / duration);
      const easeOut = 1 - Math.pow(1 - t, 3); // easeOut cubic

      const next = startValues.map((_, i) =>
        Math.round(targetValues[i] * easeOut)
      );
      setCounters(next);

      if (t < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countersActive]);

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 relative overflow-hidden bg-background"
      aria-labelledby="about-heading"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/6 -skew-x-12 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl mix-blend-multiply pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column: Text Content */}
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-secondary rounded-full" />
              <span className="text-secondary font-bold text-sm uppercase tracking-widest">
                About TarbiyaX
              </span>
            </div>

            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Inspiring Young Muslims to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Excel & Lead
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At <strong className="text-foreground font-medium">TarbiyaX Islamic Academy</strong>,
              we blend <strong className="text-foreground font-medium">rigorous academics</strong> with
              <strong className="text-foreground font-medium"> spiritual formation</strong>. Our approach
              targets the whole child — intellect, character, and leadership — in a warm, faith-centered
              learning environment.
            </p>

            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Our mission: <em className="font-semibold">to cultivate confident, compassionate, and capable young leaders</em>
              — rooted in Islamic values, prepared for the future.
            </motion.p>

            {/* Quick mission bullets */}
            <motion.ul variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="glass-card p-3 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Character First</div>
                  <div className="text-sm text-muted-foreground">Values & leadership lessons daily</div>
                </div>
              </li>
              <li className="glass-card p-3 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">High Expectations</div>
                  <div className="text-sm text-muted-foreground">Small classes, personalized growth</div>
                </div>
              </li>
            </motion.ul>

            {/* Values Grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-4 flex items-start gap-4 hover:border-primary/30 transition-all group cursor-default"
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-base">{value.label}</h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-snug">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats + CTA */}
            <motion.div variants={fadeUp} className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex gap-4 items-center">
                {statsSeed.map((s, i) => (
                  <div key={s.label} className="text-left">
                    <div className="text-3xl md:text-4xl font-extrabold text-foreground">
                      {counters[i]}
                      <span className="text-xl font-semibold text-primary ml-1">{s.suffix}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href="#enroll"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg glass-card"
                >
                  Enroll Now
                </a>
                <a
                  href="#visit"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/10 text-foreground bg-background/60 glass-card"
                >
                  Schedule a Visit
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Image Collage + overlay content */}
          <motion.div variants={fadeUp} className="relative">
            {/* Abstract shape behind images */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] rotate-3 scale-105 blur-2xl -z-10" />

            <div className="grid grid-cols-2 gap-4 h-[600px]">
              {images.map((src, index) => (
                <motion.figure
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0.6, scale: 0.95 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + index * 0.12,
                    type: "spring",
                    bounce: 0.2,
                  }}
                  whileHover={{ scale: 1.03 }}
                  className={`relative rounded-2xl overflow-hidden shadow-xl group border border-white/10 ${index === 1 || index === 3 ? "mt-12" : ""}`}
                >
                  {/* subtle hover overlay */}
                  <div className="absolute inset-0 bg-primary/12 opacity-0 group-hover:opacity-80 transition-opacity duration-500 mix-blend-multiply z-10 pointer-events-none" />
                  <img
                    src={src}
                    alt={`School life ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* small badge */}
                  <figcaption className="absolute left-3 bottom-3 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-foreground">
                    Learn • Play • Pray
                  </figcaption>
                </motion.figure>
              ))}
            </div>

            {/* small testimonial / micro-quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-6 text-sm text-muted-foreground"
            >
              “TarbiyaX offered our child an environment where faith and learning go hand-in-hand —
              teachers are caring and expectations are high.” — Parent of Grade 3 student
            </motion.blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
