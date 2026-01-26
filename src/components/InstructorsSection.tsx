import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Award } from 'lucide-react';
import instructor1 from '@/assets/instructor-1.jpg';
import instructor2 from '@/assets/instructor-2.jpg';
import instructor3 from '@/assets/instructor-3.jpg';

const instructors = [
  {
    id: 1,
    name: 'Maya Rodriguez',
    role: 'Hip-Hop & Street Dance',
    image: instructor1,
    experience: '12+ years',
    specialty: 'Urban choreography & Breakdance',
    instagram: '@maya.dances',
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Contemporary & Modern',
    image: instructor2,
    experience: '10+ years',
    specialty: 'Fusion dance & Improvisation',
    instagram: '@james.moves',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Classical Indian Dance',
    image: instructor3,
    experience: '15+ years',
    specialty: 'Bharatanatyam & Kathak',
    instagram: '@priya.classical',
  },
];

const InstructorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-card">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-xs font-medium tracking-[0.3em] uppercase glass rounded-full mb-4">
            Meet The Team
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider">
            World-Class <span className="gradient-text">Instructors</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Learn from industry professionals who have performed on global stages 
            and trained thousands of aspiring dancers.
          </p>
        </motion.div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-hover"
            >
              <div className="relative mb-6">
                {/* Glow Ring */}
                <div className="absolute inset-0 rounded-full ring-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image Container */}
                <div className="relative w-56 h-56 mx-auto rounded-full overflow-hidden gradient-border">
                  <motion.img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <a 
                      href="#" 
                      className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Instagram size={18} />
                      {instructor.instagram}
                    </a>
                  </div>
                </div>

                {/* Experience Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 glass rounded-full text-xs font-medium flex items-center gap-2"
                >
                  <Award size={14} className="text-primary" />
                  {instructor.experience}
                </motion.div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-display text-2xl tracking-wider mb-1">
                  {instructor.name}
                </h3>
                <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">
                  {instructor.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {instructor.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            to="/instructors"
            className="inline-flex items-center gap-2 px-8 py-4 glass glass-hover rounded-full font-semibold uppercase tracking-wider text-sm cursor-hover"
          >
            View All Instructors
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorsSection;
