import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import hiphopDancer from '@/assets/hiphop-dancer.jpg';
import contemporaryDancer from '@/assets/contemporary-dancer.jpg';
import classicalDancer from '@/assets/classical-dancer.jpg';

const classes = [
  {
    id: 1,
    title: 'Hip-Hop',
    description: 'High-energy street dance with urban flair. Master the latest moves, grooves, and styles that dominate the dance scene.',
    image: hiphopDancer,
    duration: '60 min',
    level: 'All Levels',
    intensity: 'High',
    color: 'from-neon-blue to-neon-purple',
  },
  {
    id: 2,
    title: 'Contemporary',
    description: 'Expressive, fluid movements that blend ballet, modern, and jazz. Perfect for those seeking artistic expression through dance.',
    image: contemporaryDancer,
    duration: '75 min',
    level: 'Intermediate',
    intensity: 'Medium',
    color: 'from-neon-purple to-neon-magenta',
  },
  {
    id: 3,
    title: 'Classical',
    description: 'Traditional Indian dance forms including Bharatanatyam and Kathak. Experience the rich cultural heritage through graceful movements.',
    image: classicalDancer,
    duration: '90 min',
    level: 'All Levels',
    intensity: 'Medium',
    color: 'from-neon-magenta to-neon-coral',
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

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Dynamic Background based on active class */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center blur-3xl opacity-20"
          style={{ backgroundImage: `url(${classes[activeIndex].image})` }}
        />
        <div className="absolute inset-0 bg-background/90" />
      </motion.div>

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

        {/* Classes Slider */}
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {classes.map((cls, index) => (
              <motion.div
                key={cls.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: index === activeIndex ? 1 : 0.5,
                  scale: index === activeIndex ? 1 : 0.9,
                  x: `${(index - activeIndex) * 100}%`,
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`flex-shrink-0 w-full md:w-2/3 ${
                  index === activeIndex ? 'z-10' : 'z-0'
                }`}
              >
                <div className="glass rounded-3xl overflow-hidden group cursor-hover">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-80 md:h-[500px] overflow-hidden">
                      <motion.img
                        src={cls.image}
                        alt={cls.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${cls.color} opacity-30 mix-blend-overlay`} />
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <motion.h3
                        className="font-display text-4xl md:text-5xl tracking-wider mb-4"
                        layoutId={`title-${cls.id}`}
                      >
                        {cls.title}
                      </motion.h3>
                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        {cls.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-8">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock size={16} className="text-primary" />
                          <span>{cls.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users size={16} className="text-primary" />
                          <span>{cls.level}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Zap size={16} className="text-primary" />
                          <span>{cls.intensity}</span>
                        </div>
                      </div>

                      <Link
                        to="/classes"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-brand rounded-full font-semibold uppercase tracking-wider text-sm w-fit hover:shadow-[0_0_30px_hsl(300_90%_55%_/_0.5)] transition-all cursor-hover"
                      >
                        Learn More
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {classes.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-hover ${
                  index === activeIndex
                    ? 'w-8 bg-gradient-brand'
                    : 'bg-muted hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
