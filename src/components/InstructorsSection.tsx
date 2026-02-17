import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award } from 'lucide-react';

const nennuImage = "https://res.cloudinary.com/dncupgwgb/image/upload/v1769797563/Nennu_dp_p8qjsv.png";

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
            Meet The Founder
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider">
            World-Class <span className="gradient-text">Instructor</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Learn from an industry professional who has performed on global stages 
            and trained thousands of aspiring dancers.
          </p>
        </motion.div>

        {/* Instructor */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="group cursor-hover max-w-md"
          >
            <div className="relative mb-6">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full ring-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden gradient-border">
                <motion.img
                  src={nennuImage}
                  alt="Nennu Arora"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 glass rounded-full text-xs font-medium flex items-center gap-2"
              >
                <Award size={14} className="text-primary" />
                15+ years
              </motion.div>
            </div>

            {/* Info */}
            <div className="text-center">
              <h3 className="font-display text-2xl tracking-wider mb-1">
                Nennu Arora
              </h3>
              <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">
                Founder & Artistic Director
              </p>
              <p className="text-muted-foreground text-sm">
                Founder, Director & Choreographer
              </p>
            </div>
          </motion.div>
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
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorsSection;
