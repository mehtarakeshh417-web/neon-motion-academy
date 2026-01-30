import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Play } from 'lucide-react';
const heroDancer = "https://res.cloudinary.com/dncupgwgb/image/upload/v1769411481/ChatGPT_Image_Jan_26_2026_12_37_47_PM_sl7umg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroDancer})` }}
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </motion.div>

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 text-xs font-medium tracking-[0.3em] uppercase glass rounded-full">
            Texas's Premier Dance Academy
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="kinetic-heading mb-6"
        >
          <span className="block gradient-text">Nennu's Dance</span>
          <span className="block">Academy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10"
        >
          Inspire and persevere to excel. Experience world-class dance training 
          at Nennu's Dance Academy, where passion meets perfection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/classes"
            className="group px-8 py-4 bg-gradient-brand rounded-full font-semibold uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-[0_0_30px_hsl(300_90%_55%_/_0.5)] cursor-hover"
          >
            Explore Classes
          </Link>
          <button className="group flex items-center gap-3 px-8 py-4 glass glass-hover rounded-full font-semibold uppercase tracking-wider text-sm cursor-hover">
            <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Play size={16} fill="currentColor" />
            </span>
            Watch Our Story
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-hover"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
          <ChevronDown size={20} className="text-primary" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;
