import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clock, Users, Zap, ArrowRight, Calendar, DollarSign, Shirt, Heart, Briefcase, Star, Sun, Music, Sparkles } from 'lucide-react';

const bollywoodImage = "https://res.cloudinary.com/dncupgwgb/image/upload/v1769412299/484975682_667662669117184_3424837219811799355_n_mw79fa.jpg";
const kathakImage = "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771480733/IMG_2471_wzotf0.jpg";
const bhangraImage = "https://res.cloudinary.com/dncupgwgb/image/upload/v1769412216/484306386_665305262686258_4502363489410499043_n_qlyajv.jpg";
const folkImage = "https://res.cloudinary.com/dncupgwgb/image/upload/v1769412155/484374994_665302069353244_6440850370147422592_n_jvt2qk.jpg";
const costumeImage = "https://res.cloudinary.com/dncupgwgb/image/upload/v1769798840/484831744_665301646019953_4372690100554318105_n_ybkvs5.jpg";

const allClasses = [
  {
    id: 1,
    title: 'Bollywood',
    description: 'High-energy Bollywood dance combining traditional Indian movements with modern choreography.',
    longDescription: 'Experience the vibrant world of Bollywood dance! Our classes blend traditional Indian dance forms with contemporary moves, bringing the magic of Indian cinema to life. Perfect for all ages and skill levels.',
    image: bollywoodImage,
    duration: '60 min',
    level: 'All Levels',
    intensity: 'High',
    schedule: 'Mon, Wed, Fri',
    price: 'Starts from $15',
    color: 'from-neon-blue to-neon-purple',
  },
  {
    id: 2,
    title: 'Kathak',
    description: 'Classical North Indian dance form featuring intricate footwork, graceful spins, and expressive storytelling.',
    longDescription: 'Kathak is one of the eight major forms of Indian classical dance. Our classes focus on the intricate footwork, expressive hand gestures (mudras), graceful spins, and rhythmic patterns that define this beautiful art form.',
    image: kathakImage,
    duration: '75 min',
    level: 'All Levels',
    intensity: 'Medium',
    schedule: 'Tue, Thu, Sat',
    price: 'Starts from $15',
    color: 'from-neon-purple to-neon-magenta',
  },
  {
    id: 3,
    title: 'Bhangra',
    description: 'Energetic Punjabi folk dance with powerful movements and vibrant rhythms.',
    longDescription: 'Get your heart pumping with Bhangra! This energetic Punjabi folk dance is known for its powerful movements, vibrant rhythms, and infectious energy. Great for fitness and fun!',
    image: bhangraImage,
    duration: '60 min',
    level: 'All Levels',
    intensity: 'High',
    schedule: 'Wed, Sat, Sun',
    price: 'Starts from $15',
    color: 'from-neon-magenta to-neon-coral',
  },
  {
    id: 4,
    title: 'Folk Dances',
    description: 'Traditional Indian folk dances from various regions including Garba, Raas, and more.',
    longDescription: 'Explore the rich diversity of Indian folk dances! From the colorful Garba and Raas of Gujarat to regional folk forms from across India, discover the cultural heritage through dance.',
    image: folkImage,
    duration: '60 min',
    level: 'All Levels',
    intensity: 'Medium',
    schedule: 'Mon, Thu, Sat',
    price: 'Starts from $15',
    color: 'from-neon-coral to-neon-blue',
  },
];

const additionalServices = [
  { icon: Heart, title: 'Wedding Choreography', description: 'Make your special day unforgettable with custom wedding dance choreography. Indian weddings are special, and we dance our hearts out to make every celebration unforgettable.' },
  { icon: Briefcase, title: 'Corporate Events', description: 'Energize your team with interactive dance workshops and performances for corporate events and team building.' },
  { icon: Star, title: 'Professional Stage Shows', description: 'High-energy professional dance performances for events, festivals, and cultural programs.' },
  { icon: Sun, title: 'Summer Camps', description: 'Fun-filled summer dance camps for kids and teens. Learn multiple dance styles, make friends, and perform on stage!' },
  { icon: Shirt, title: 'Costume Rentals', description: 'Large inventory of Bollywood, Indian Folk, Garba, Bhangra, Indo-Western, and more costumes available for rent.' },
  { icon: Music, title: 'Hire Professional Dancers', description: 'Book our talented professional dancers for your events, weddings, parties, and performances.' },
];

const Services = () => {
  const [hoveredClass, setHoveredClass] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
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
            Our Services
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
            From Bollywood beats to classical grace, discover the perfect class to ignite your passion for dance.
          </motion.p>
        </div>
      </section>

      {/* Classes Grid */}
      <section ref={ref} className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="space-y-12 max-w-6xl mx-auto">
            {allClasses.map((cls, index) => (
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
                  <div className="relative h-80 md:h-[450px] overflow-hidden">
                    <motion.img
                      src={cls.image}
                      alt={cls.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${cls.color} opacity-30 mix-blend-overlay`} />
                  </div>

                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-4">{cls.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{cls.longDescription}</p>

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

      {/* Additional Services */}
      <section className="py-24 relative overflow-hidden bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 text-xs font-medium tracking-[0.3em] uppercase glass rounded-full mb-4">
              <Sparkles size={14} className="inline mr-2" />
              Beyond Classes
            </span>
            <h2 className="font-display text-4xl md:text-6xl tracking-wider">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              From wedding choreography to professional stage shows, we bring dance magic to every occasion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-3xl p-8 hover-lift cursor-hover group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6 group-hover:shadow-[0_0_25px_hsl(300_90%_55%_/_0.4)] transition-shadow">
                  <service.icon size={24} />
                </div>
                <h3 className="font-display text-2xl tracking-wider mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
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

export default Services;
