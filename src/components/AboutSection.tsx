import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Calendar, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const studioImage = "https://res.cloudinary.com/dncupgwgb/image/upload/v1769411663/Screenshot_2026-01-26_124304_iilblt.png";

const stats = [
  { icon: Users, value: '2000+', label: 'Students' },
  { icon: Award, value: '50+', label: 'Awards' },
  { icon: Calendar, value: '15+', label: 'Years' },
  { icon: Star, value: '4.9', label: 'Rating' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
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
            The Art of <span className="gradient-text">Movement</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Large Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 glass rounded-3xl overflow-hidden group cursor-hover"
          >
            <div className="relative h-full min-h-[400px]">
              <motion.img
                src={studioImage}
                alt="Our Studio"
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-3xl tracking-wider mb-3">Our Studio</h3>
                <p className="text-muted-foreground max-w-md">
                  State-of-the-art facilities designed to inspire creativity and push boundaries. 
                  Where passion meets perfection.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="glass rounded-2xl p-6 hover-lift cursor-hover group"
            >
              <stat.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-display text-4xl gradient-text mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass rounded-2xl p-8 flex flex-col justify-between cursor-hover hover-lift"
          >
            <div>
              <h4 className="font-display text-xl tracking-wider mb-3">Our Mission</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Inspire and persevere to excel. We nurture talent, build confidence, 
                and create dancers who carry the joy of movement throughout their lives.
              </p>
            </div>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-4 group/link"
            >
              Learn More 
              <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
