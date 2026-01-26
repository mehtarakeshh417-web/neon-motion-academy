import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Instagram, Award, Star, Quote } from 'lucide-react';
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
    bio: 'Maya has been dancing since age 5 and has performed with major artists including Beyoncé and Chris Brown. She brings authentic street culture and infectious energy to every class.',
    achievements: ['World Hip-Hop Championship Finalist', 'Choreographed for MTV Awards', '500+ Students Trained'],
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Contemporary & Modern',
    image: instructor2,
    experience: '10+ years',
    specialty: 'Fusion dance & Improvisation',
    instagram: '@james.moves',
    bio: 'James trained at Juilliard and has performed with renowned contemporary dance companies across the globe. His unique approach blends technical precision with emotional depth.',
    achievements: ['Juilliard Graduate', 'Martha Graham Dance Company', 'International Tour Experience'],
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Classical Indian Dance',
    image: instructor3,
    experience: '15+ years',
    specialty: 'Bharatanatyam & Kathak',
    instagram: '@priya.classical',
    bio: 'Priya is a Sangeet Natak Akademi award-winning artist who has dedicated her life to preserving and sharing the beauty of classical Indian dance forms.',
    achievements: ['National Award Winner', 'UNESCO Cultural Ambassador', '1000+ Performances'],
  },
];

const testimonials = [
  {
    quote: "Maya's energy is contagious! She helped me find my own style and confidence on the dance floor.",
    author: "Sarah M.",
    class: "Hip-Hop Student",
  },
  {
    quote: "James has an incredible ability to bring out emotions through movement. His classes changed my perspective on dance.",
    author: "Michael T.",
    class: "Contemporary Student",
  },
  {
    quote: "Learning Bharatanatyam from Priya has been a life-changing experience. She connects you to centuries of tradition.",
    author: "Anjali K.",
    class: "Classical Student",
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
            Meet The Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="kinetic-heading"
          >
            Our <span className="gradient-text">Instructors</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-muted-foreground max-w-2xl mx-auto"
          >
            Learn from world-class professionals who have performed on global stages and trained thousands of aspiring dancers.
          </motion.p>
        </div>
      </section>

      {/* Instructors Detailed Section */}
      <section ref={ref} className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-24 max-w-6xl mx-auto">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group cursor-hover">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-brand rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                    
                    <div className="relative glass rounded-3xl overflow-hidden">
                      <motion.img
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-full aspect-[4/5] object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                        <a 
                          href="#" 
                          className="flex items-center gap-2 px-6 py-3 glass rounded-full text-sm font-medium cursor-hover"
                        >
                          <Instagram size={18} />
                          {instructor.instagram}
                        </a>
                      </div>
                    </div>

                    {/* Experience Badge */}
                    <div className="absolute -bottom-4 -right-4 px-6 py-3 glass rounded-xl glow-primary flex items-center gap-2">
                      <Award className="text-primary" size={20} />
                      <span className="font-semibold">{instructor.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <span className="inline-block px-4 py-2 text-xs font-medium tracking-[0.3em] uppercase glass rounded-full mb-4">
                    {instructor.specialty}
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-2">{instructor.name}</h2>
                  <p className="text-primary text-lg font-medium uppercase tracking-wider mb-6">{instructor.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-8">{instructor.bio}</p>

                  {/* Achievements */}
                  <div className="space-y-3 mb-8">
                    {instructor.achievements.map((achievement) => (
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
            ))}
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
