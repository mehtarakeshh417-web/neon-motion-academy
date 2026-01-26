import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clock, Users, Zap, ArrowRight, Calendar, DollarSign } from 'lucide-react';
import hiphopDancer from '@/assets/hiphop-dancer.jpg';
import contemporaryDancer from '@/assets/contemporary-dancer.jpg';
import classicalDancer from '@/assets/classical-dancer.jpg';

const allClasses = [
  {
    id: 1,
    title: 'Hip-Hop',
    category: 'Urban',
    description: 'High-energy street dance with urban flair. Master the latest moves, grooves, and styles that dominate the dance scene.',
    longDescription: 'From breaking to popping, locking to krumping, our hip-hop classes cover the full spectrum of urban dance styles. Learn from instructors who have performed with major artists and bring authentic street culture to every session.',
    image: hiphopDancer,
    duration: '60 min',
    level: 'All Levels',
    intensity: 'High',
    schedule: 'Mon, Wed, Fri',
    price: '$25/class',
    color: 'from-neon-blue to-neon-purple',
  },
  {
    id: 2,
    title: 'Contemporary',
    category: 'Modern',
    description: 'Expressive, fluid movements that blend ballet, modern, and jazz. Perfect for those seeking artistic expression through dance.',
    longDescription: 'Contemporary dance pushes boundaries and encourages personal expression. Our classes focus on floor work, improvisation, and emotional storytelling through movement. Perfect for dancers looking to expand their artistic vocabulary.',
    image: contemporaryDancer,
    duration: '75 min',
    level: 'Intermediate',
    intensity: 'Medium',
    schedule: 'Tue, Thu, Sat',
    price: '$30/class',
    color: 'from-neon-purple to-neon-magenta',
  },
  {
    id: 3,
    title: 'Classical Indian',
    category: 'Traditional',
    description: 'Traditional Indian dance forms including Bharatanatyam and Kathak. Experience the rich cultural heritage through graceful movements.',
    longDescription: 'Dive deep into the ancient art forms of India. Our classical dance program covers Bharatanatyam, Kathak, and other traditional styles. Learn the intricate mudras, expressions, and rhythmic patterns that have been passed down through generations.',
    image: classicalDancer,
    duration: '90 min',
    level: 'All Levels',
    intensity: 'Medium',
    schedule: 'Wed, Sat, Sun',
    price: '$35/class',
    color: 'from-neon-magenta to-neon-coral',
  },
];

const categories = ['All', 'Urban', 'Modern', 'Traditional'];

const Classes = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredClass, setHoveredClass] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredClasses = activeCategory === 'All' 
    ? allClasses 
    : allClasses.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Dynamic Background */}
        <motion.div
          key={hoveredClass}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center blur-2xl opacity-30"
            style={{ 
              backgroundImage: `url(${hoveredClass ? allClasses.find(c => c.id === hoveredClass)?.image : allClasses[0].image})` 
            }}
          />
          <div className="absolute inset-0 bg-background/80" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 text-xs font-medium tracking-[0.3em] uppercase glass rounded-full mb-6"
          >
            Our Programs
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="kinetic-heading"
          >
            Dance <span className="gradient-text">Classes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-muted-foreground max-w-2xl mx-auto"
          >
            From urban beats to classical grace, discover the perfect class to ignite your passion for dance.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sticky top-20 z-30 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all cursor-hover ${
                  activeCategory === category
                    ? 'bg-gradient-brand'
                    : 'glass glass-hover'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section ref={ref} className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="space-y-12 max-w-6xl mx-auto">
            {filteredClasses.map((cls, index) => (
              <motion.div
                key={cls.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredClass(cls.id)}
                onMouseLeave={() => setHoveredClass(null)}
                className="glass rounded-3xl overflow-hidden cursor-hover hover-lift"
              >
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-80 md:h-[450px] overflow-hidden">
                    <motion.img
                      src={cls.image}
                      alt={cls.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${cls.color} opacity-30 mix-blend-overlay`} />
                    <div className="absolute top-6 left-6 px-4 py-2 glass rounded-full text-xs uppercase tracking-wider">
                      {cls.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-4">{cls.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{cls.longDescription}</p>

                    {/* Meta Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-3 glass rounded-xl p-3">
                        <Clock size={18} className="text-primary" />
                        <div>
                          <div className="text-xs text-muted-foreground">Duration</div>
                          <div className="text-sm font-medium">{cls.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 glass rounded-xl p-3">
                        <Users size={18} className="text-primary" />
                        <div>
                          <div className="text-xs text-muted-foreground">Level</div>
                          <div className="text-sm font-medium">{cls.level}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 glass rounded-xl p-3">
                        <Calendar size={18} className="text-primary" />
                        <div>
                          <div className="text-xs text-muted-foreground">Schedule</div>
                          <div className="text-sm font-medium">{cls.schedule}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 glass rounded-xl p-3">
                        <DollarSign size={18} className="text-primary" />
                        <div>
                          <div className="text-xs text-muted-foreground">Price</div>
                          <div className="text-sm font-medium">{cls.price}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Link
                        to="/contact"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-brand rounded-full font-semibold uppercase tracking-wider text-sm hover:shadow-[0_0_30px_hsl(300_90%_55%_/_0.5)] transition-all cursor-hover"
                      >
                        Book Now
                        <ArrowRight size={16} />
                      </Link>
                      <button className="px-6 py-3 glass glass-hover rounded-full font-semibold uppercase tracking-wider text-sm cursor-hover">
                        Trial Class
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-card">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl tracking-wider mb-6"
          >
            Ready to <span className="gradient-text">Start Dancing?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Book your free trial class today and experience the magic of dance at Nennu's Dance Academy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-brand rounded-full font-semibold uppercase tracking-wider hover:shadow-[0_0_30px_hsl(300_90%_55%_/_0.5)] transition-all cursor-hover"
            >
              Get Started Free
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Classes;
