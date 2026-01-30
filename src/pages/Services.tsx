import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clock, Users, Zap, ArrowRight, Calendar, DollarSign, Shirt } from 'lucide-react';

const bollywoodImage = "https://res.cloudinary.com/dncupgwgb/image/upload/v1769412299/484975682_667662669117184_3424837219811799355_n_mw79fa.jpg";
const kathakImage = "https://res.cloudinary.com/dncupgwgb/image/upload/v1769411981/f7813bbd-6411-43b4-8bae-40dccc027c99.png";
const bhangraImage = "https://res.cloudinary.com/dncupgwgb/image/upload/v1769412216/484306386_665305262686258_4502363489410499043_n_qlyajv.jpg";
const folkImage = "https://res.cloudinary.com/dncupgwgb/image/upload/v1769412155/484374994_665302069353244_6440850370147422592_n_jvt2qk.jpg";
const costumeImage = "https://res.cloudinary.com/dncupgwgb/image/upload/v1769798840/484831744_665301646019953_4372690100554318105_n_ybkvs5.jpg";

const allClasses = [
  {
    id: 1,
    title: 'Bollywood',
    category: 'Indian',
    description: 'High-energy Bollywood dance combining traditional Indian movements with modern choreography.',
    longDescription: 'Experience the vibrant world of Bollywood dance! Our classes blend traditional Indian dance forms with contemporary moves, bringing the magic of Indian cinema to life. Perfect for all ages and skill levels.',
    image: bollywoodImage,
    duration: '60 min',
    level: 'All Levels',
    intensity: 'High',
    schedule: 'Mon, Wed, Fri',
    price: '$25/class',
    color: 'from-neon-blue to-neon-purple',
  },
  {
    id: 2,
    title: 'Kathak',
    category: 'Classical',
    description: 'Classical North Indian dance form featuring intricate footwork, graceful spins, and expressive storytelling.',
    longDescription: 'Kathak is one of the eight major forms of Indian classical dance. Our classes focus on the intricate footwork, expressive hand gestures (mudras), graceful spins, and rhythmic patterns that define this beautiful art form.',
    image: kathakImage,
    duration: '75 min',
    level: 'All Levels',
    intensity: 'Medium',
    schedule: 'Tue, Thu, Sat',
    price: '$30/class',
    color: 'from-neon-purple to-neon-magenta',
  },
  {
    id: 3,
    title: 'Bhangra',
    category: 'Folk',
    description: 'Energetic Punjabi folk dance with powerful movements and vibrant rhythms.',
    longDescription: 'Get your heart pumping with Bhangra! This energetic Punjabi folk dance is known for its powerful movements, vibrant rhythms, and infectious energy. Great for fitness and fun!',
    image: bhangraImage,
    duration: '60 min',
    level: 'All Levels',
    intensity: 'High',
    schedule: 'Wed, Sat, Sun',
    price: '$25/class',
    color: 'from-neon-magenta to-neon-coral',
  },
  {
    id: 4,
    title: 'Folk Dances',
    category: 'Folk',
    description: 'Traditional Indian folk dances from various regions including Garba, Raas, and more.',
    longDescription: 'Explore the rich diversity of Indian folk dances! From the colorful Garba and Raas of Gujarat to regional folk forms from across India, discover the cultural heritage through dance.',
    image: folkImage,
    duration: '60 min',
    level: 'All Levels',
    intensity: 'Medium',
    schedule: 'Mon, Thu, Sat',
    price: '$25/class',
    color: 'from-neon-coral to-neon-blue',
  },
];

const categories = ['All', 'Indian', 'Classical', 'Folk'];

const Services = () => {
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

      {/* Costume Rental Section */}
      <section className="py-24 relative overflow-hidden bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 text-xs font-medium tracking-[0.3em] uppercase glass rounded-full mb-4">
              <Shirt size={14} className="inline mr-2" />
              Additional Service
            </span>
            <h2 className="font-display text-4xl md:text-6xl tracking-wider">
              Dance Costume <span className="gradient-text">Rental</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass rounded-3xl overflow-hidden hover-lift cursor-hover">
                <img
                  src={costumeImage}
                  alt="Dance Costumes"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Are you looking for Bollywood costume rentals for your next theme party wedding, 
                event or dance performance?
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We have a large inventory of costumes for dance performances ranging from Bollywood, 
                Indian Folk, Garba/Raas, Bhangra, Indo-Western, Contemporary, Lyrical, and Hip-Hop. 
                Our stage props are also available for rent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our rental inventory is continuously being updated. For our latest collections, contact us!
              </p>
              <div className="glass rounded-2xl p-6">
                <h4 className="font-display text-xl tracking-wider mb-3">Pricing</h4>
                <p className="text-muted-foreground text-sm">
                  Costume rental fees range from <span className="text-primary font-semibold">$10 – $25</span> per costume. 
                  Shipping is additional. Please allow sufficient time for shipping from Dallas, Texas.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-brand rounded-full font-semibold uppercase tracking-wider text-sm hover:shadow-[0_0_30px_hsl(300_90%_55%_/_0.5)] transition-all cursor-hover"
              >
                Inquire Now
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
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
