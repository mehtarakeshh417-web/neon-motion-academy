import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Users, Calendar, Star, Heart, Target, Sparkles } from 'lucide-react';

const aboutImage = "https://res.cloudinary.com/dncupgwgb/image/upload/v1769798452/535227480_18051217700560329_5112356557988542656_n_gvtoi2.jpg";
const heroDancer = "https://res.cloudinary.com/dncupgwgb/image/upload/v1769411481/ChatGPT_Image_Jan_26_2026_12_37_47_PM_sl7umg.png";

const stats = [
  { icon: Users, value: '2000+', label: 'Students Trained' },
  { icon: Award, value: '50+', label: 'Awards Won' },
  { icon: Calendar, value: '15+', label: 'Years Experience' },
  { icon: Star, value: '4.9', label: 'Rating' },
];

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We believe dance is not just movement—it\'s an expression of the soul. Our passion drives everything we do.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every class, every performance, and every interaction with our dance family.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'We blend traditional techniques with contemporary styles, creating unique experiences for every dancer.',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroDancer})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 text-xs font-medium tracking-[0.3em] uppercase glass rounded-full mb-6"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="kinetic-heading"
          >
            About <span className="gradient-text">Nennu's</span>
          </motion.h1>
        </div>
      </section>

      {/* Our Focus Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-8">
                Our <span className="gradient-text">Focus</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed text-left md:text-center">
                <p>At Nennu's Dance Academy, we train kids to dance with confidence, creativity, and joy.</p>
                <p>We focus on technique, expression, and stage readiness, while making every class fun, engaging, and inspiring.</p>
                <p>Our goal is to nurture talented, confident performers who shine on every stage.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Nennu Arora Section */}
      <section ref={ref} className="py-24 bg-card relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-6">
                About <span className="gradient-text">Nennu Arora</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nennu Arora is the Founder & Artistic Director of NDA Dallas – Nennu's Dance Academy, 
                  a premier dance institution in the DFW area with thriving locations in Dallas–Plano, 
                  Frisco, and Little Elm.
                </p>
                <p>
                  A trained Kathak, Bollywood, and Indian folk dancer, Nennu brings over a decade of 
                  teaching, choreography, and leadership experience to her academy. Her curriculum focuses 
                  on technique, rhythm, expression, confidence, and stage presence, helping students grow 
                  as dancers and performers.
                </p>
                <p>
                  Nennu's professional journey includes choreographing for Bollywood films and music videos 
                  and collaborating with celebrities such as Govinda, Kartik Aaryan, Nora Fatehi, 
                  Urvashi Rautela, Huma Qureshi, R. Madhavan, Sonu Nigam, Javed Ali, Mika Singh, 
                  Chunky Pandey, Mallika Sherawat, Atif Aslam, Sunidhi Chauhan, Shankar–Ehsaan–Loy, 
                  Shehnaaz Gill, Manisha Koirala, Gurdas Maan, and Shibani Kashyap.
                </p>
                <p>
                  Beyond performances, she has served as a Creative Director for an Indian television 
                  channel, bringing her artistic vision to a global audience.
                </p>
                <p>
                  Through NDA, Nennu has trained thousands of students, judged prestigious competitions, 
                  and produced celebrated stage shows, making Nennu's Dance Academy a trusted and 
                  respected name in the dance community.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass rounded-3xl overflow-hidden hover-lift cursor-hover">
                <img
                  src={aboutImage}
                  alt="Nennu Arora"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 glass rounded-2xl p-6 glow-primary">
                <div className="font-display text-5xl gradient-text">15+</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl tracking-wider">
              Our <span className="gradient-text">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="glass rounded-3xl p-8 text-center hover-lift cursor-hover"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center mx-auto mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="font-display text-2xl tracking-wider mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-card relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8 text-center hover-lift cursor-hover group"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <div className="font-display text-4xl md:text-5xl gradient-text mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
