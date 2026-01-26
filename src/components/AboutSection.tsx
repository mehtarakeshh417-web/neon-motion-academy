import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Calendar, Star } from 'lucide-react';
import studioInterior from '@/assets/studio-interior.jpg';

const stats = [
  { icon: Users, value: '2000+', label: 'Students Trained' },
  { icon: Award, value: '50+', label: 'Awards Won' },
  { icon: Calendar, value: '15+', label: 'Years Experience' },
  { icon: Star, value: '4.9', label: 'Rating' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-xs font-medium tracking-[0.3em] uppercase glass rounded-full mb-4">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider">
            The <span className="gradient-text">Future</span> of Dance in Texas
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Main Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 md:row-span-2 glass rounded-3xl overflow-hidden group cursor-hover hover-lift"
          >
            <div className="relative h-full min-h-[400px]">
              <img
                src={studioInterior}
                alt="Dance Studio"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-3xl md:text-4xl tracking-wider mb-4">
                  State-of-the-Art Studio
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Our 10,000 sq ft facility features professional-grade sprung floors, 
                  floor-to-ceiling mirrors, and cutting-edge sound systems for the 
                  ultimate dance experience.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-3xl p-8 hover-lift cursor-hover"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6">
              <Star size={24} />
            </div>
            <h3 className="font-display text-2xl tracking-wider mb-3">Our Mission</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To inspire dancers of all ages and skill levels, providing a nurturing 
              environment where creativity flourishes and dreams take flight.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-3xl p-8 hover-lift cursor-hover"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6">
              <Award size={24} />
            </div>
            <h3 className="font-display text-2xl tracking-wider mb-3">Our Vision</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To be the leading dance institution in Texas, recognized globally for 
              excellence in dance education and artistic innovation.
            </p>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover-lift cursor-hover group"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <div className="font-display text-3xl md:text-4xl gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
