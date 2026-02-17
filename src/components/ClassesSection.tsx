import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const bollywoodImage = "https://res.cloudinary.com/dncupgwgb/image/upload/v1769412299/484975682_667662669117184_3424837219811799355_n_mw79fa.jpg";
const kathakImage = "https://res.cloudinary.com/dncupgwgb/image/upload/v1769411981/f7813bbd-6411-43b4-8bae-40dccc027c99.png";
const bhangraImage = "https://res.cloudinary.com/dncupgwgb/image/upload/v1769412216/484306386_665305262686258_4502363489410499043_n_qlyajv.jpg";
const folkImage = "https://res.cloudinary.com/dncupgwgb/image/upload/v1769412155/484374994_665302069353244_6440850370147422592_n_jvt2qk.jpg";

const classes = [
  {
    id: 1,
    title: 'Bollywood',
    description: 'High-energy Bollywood dance combining traditional Indian movements with modern choreography. Perfect for all ages and skill levels.',
    image: bollywoodImage,
    duration: '60 min',
    level: 'All Levels',
    intensity: 'High',
  },
  {
    id: 2,
    title: 'Kathak',
    description: 'Classical North Indian dance form featuring intricate footwork, graceful spins, and expressive storytelling through movement.',
    image: kathakImage,
    duration: '75 min',
    level: 'All Levels',
    intensity: 'Medium',
  },
  {
    id: 3,
    title: 'Bhangra',
    description: 'Energetic Punjabi folk dance with powerful movements, vibrant rhythms, and infectious energy that will get everyone moving.',
    image: bhangraImage,
    duration: '60 min',
    level: 'All Levels',
    intensity: 'High',
  },
  {
    id: 4,
    title: 'Folk Dances',
    description: 'Traditional Indian folk dances from various regions including Garba, Raas, and other cultural dance forms.',
    image: folkImage,
    duration: '60 min',
    level: 'All Levels',
    intensity: 'Medium',
  },
];

const ClassesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % classes.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + classes.length) % classes.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeClass = classes[activeIndex];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center blur-3xl opacity-20 scale-110"
            style={{ backgroundImage: `url(${activeClass.image})` }}
          />
          <div className="absolute inset-0 bg-background/90" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="inline-block px-4 py-2 text-xs font-medium tracking-[0.3em] uppercase glass rounded-full mb-4">
              Our Classes
            </span>
            <h2 className="font-display text-4xl md:text-6xl tracking-wider">
              Find Your <span className="gradient-text">Rhythm</span>
            </h2>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full glass glass-hover flex items-center justify-center cursor-hover"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full glass glass-hover flex items-center justify-center cursor-hover"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Active Class Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="glass rounded-3xl overflow-hidden cursor-hover"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-80 md:h-[500px] overflow-hidden">
                <img
                  src={activeClass.image}
                  alt={activeClass.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/40" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-display text-4xl md:text-5xl tracking-wider mb-4"
                >
                  {activeClass.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-muted-foreground mb-8 leading-relaxed"
                >
                  {activeClass.description}
                </motion.p>

                {/* Meta Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-4 mb-8"
                >
                  <div className="flex items-center gap-2 text-sm glass rounded-full px-4 py-2">
                    <Clock size={16} className="text-primary" />
                    <span>{activeClass.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm glass rounded-full px-4 py-2">
                    <Users size={16} className="text-primary" />
                    <span>{activeClass.level}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm glass rounded-full px-4 py-2">
                    <Zap size={16} className="text-primary" />
                    <span>{activeClass.intensity}</span>
                  </div>
                </motion.div>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-brand rounded-full font-semibold uppercase tracking-wider text-sm w-fit hover:shadow-[0_0_30px_hsl(300_90%_55%_/_0.5)] transition-all cursor-hover"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {classes.map((cls, index) => (
            <button
              key={cls.id}
              onClick={() => setActiveIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 cursor-hover ${
                index === activeIndex
                  ? 'w-8 bg-gradient-brand'
                  : 'w-3 bg-muted hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
