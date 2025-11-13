import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AlertBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenBanner = sessionStorage.getItem("enrollment-banner-seen");
      if (!hasSeenBanner) {
        setIsVisible(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("enrollment-banner-seen", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-6 left-6 z-50 w-80 max-w-[calc(100vw-3rem)]"
        >
          <div className="glass-card p-6 shadow-2xl border-2 border-primary/20">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-4">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-primary text-primary-foreground p-3 rounded-xl"
              >
                <Bell className="w-6 h-6" />
              </motion.div>

              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">
                  Enrollment Open!
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Secure your child's spot for the 2025 academic year. Limited seats available.
                </p>
                <Button
                  size="sm"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <a href="#contact">Apply Now</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
