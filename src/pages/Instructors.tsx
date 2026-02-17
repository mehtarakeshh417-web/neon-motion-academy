import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Star, Quote } from 'lucide-react';

const nennuImage = "https://res.cloudinary.com/dncupgwgb/image/upload/v1769797563/Nennu_dp_p8qjsv.png";

const testimonials = [
  {
    quote: "Nennu's teaching style is incredible! She helped me discover my passion for Kathak and Bollywood dance.",
    author: "Sarah M.",
    class: "Kathak Student",
  },
  {
    quote: "The best dance academy in Texas! Nennu is patient, skilled, and truly cares about each student's progress.",
    author: "Michael T.",
    class: "Bollywood Student",
  },
  {
    quote: "Learning from Nennu has been a life-changing experience. Her expertise in Indian dance forms is unmatched.",
    author: "Anjali K.",
    class: "Folk Dance Student",
  },
];

const Instructors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 text-xs font-medium tracking-[0.3em] uppercase glass rounded-full mb-6"
          >
            Meet The Founder
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="kinetic-heading"
          >
            Our <span className="gradient-text">Instructor</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-muted-foreground max-w-2xl mx-auto"
          >
            Learn from a world-class professional who has performed on global stages and trained thousands of aspiring dancers.
          </motion.p>
        </div>
      </section>

      {/* Instructor Detailed Section */}
      <section ref={ref} className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className="relative">
                <div className="relative group cursor-hover">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-brand rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                  
                  <div className="relative glass rounded-3xl overflow-hidden">
                    <motion.img
                      src={nennuImage}
                      alt="Nennu Arora"
                      className="w-full aspect-[4/5] object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute -bottom-4 -right-4 px-6 py-3 glass rounded-xl glow-primary flex items-center gap-2">
                    <Award className="text-primary" size={20} />
                    <span className="font-semibold">15+ years</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="inline-block px-4 py-2 text-xs font-medium tracking-[0.3em] uppercase glass rounded-full mb-4">
                  Founder, Director & Choreographer
                </span>
                <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-2">Nennu Arora</h2>
                <p className="text-primary text-lg font-medium uppercase tracking-wider mb-6">Founder & Artistic Director</p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Nennu Sharma is the founder, director and choreographer at Nennu's Dance Academy. 
                  With over 15 years of experience in Indian classical and Bollywood dance forms, 
                  she has trained thousands of students and has been instrumental in preserving 
                  and promoting Indian dance culture in Texas. Her passion for dance and dedication 
                  to her students has made Nennu's Dance Academy one of the most prestigious 
                  dance academies in the region.
                </p>

                {/* Achievements */}
                <div className="space-y-3 mb-8">
                  {[
                    '15+ Years of Dance Teaching Experience',
                    '2000+ Students Trained',
                    'Expert in Kathak, Bollywood & Folk Dances',
                    'Award-Winning Choreographer',
                  ].map((achievement) => (
                    <div key={achievement} className="flex items-center gap-3">
                      <Star className="text-primary flex-shrink-0" size={16} />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-brand rounded-full font-semibold uppercase tracking-wider text-sm hover:shadow-[0_0_30px_hsl(300_90%_55%_/_0.5)] transition-all cursor-hover"
                >
                  Book a Class
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl tracking-wider text-center mb-16"
          >
            What Our <span className="gradient-text">Students Say</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="glass rounded-3xl p-8 relative cursor-hover hover-lift"
              >
                <Quote className="absolute top-6 right-6 text-primary/20" size={40} />
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{testimonial.class}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Instructors;
