import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Send, Check, Clock, Calendar } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Visit Us', value: '123 Dance Avenue, Houston, TX 77001', href: null },
  { icon: Phone, label: 'Call Us', value: '+1 (888) 123-4567', href: 'tel:+18881234567' },
  { icon: Mail, label: 'Email Us', value: 'info@nennusdance.com', href: 'mailto:info@nennusdance.com' },
];

const operatingHours = [
  { day: 'Monday - Friday', hours: '6:00 AM - 10:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 8:00 PM' },
  { day: 'Sunday', hours: '10:00 AM - 6:00 PM' },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 text-xs font-medium tracking-[0.3em] uppercase glass rounded-full mb-6"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="kinetic-heading"
          >
            Contact <span className="gradient-text">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-muted-foreground max-w-2xl mx-auto"
          >
            Ready to start your dance journey? Reach out to us and let's make it happen.
          </motion.p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section ref={ref} className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="relative glass rounded-3xl overflow-hidden h-[350px] cursor-hover hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-background" />
                
                {/* Texas Map SVG */}
                <svg
                  viewBox="0 0 400 400"
                  className="absolute inset-0 w-full h-full p-10"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                >
                  <path
                    d="M180 60 L220 60 L250 80 L280 70 L310 90 L340 100 L360 140 L350 180 L340 220 L320 260 L280 300 L240 340 L200 350 L160 340 L120 300 L100 260 L80 220 L70 180 L80 140 L100 100 L140 80 Z"
                    className="fill-muted/30"
                  />
                  <motion.circle
                    cx="280"
                    cy="280"
                    r="10"
                    className="fill-primary"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.circle
                    cx="280"
                    cy="280"
                    r="25"
                    className="stroke-primary fill-none"
                    strokeWidth="1"
                    animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.circle
                    cx="280"
                    cy="280"
                    r="40"
                    className="stroke-primary/50 fill-none"
                    strokeWidth="1"
                    animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                </svg>

                <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Nennu's Dance Academy</p>
                    <p className="text-sm text-muted-foreground">123 Dance Avenue, Houston, TX 77001</p>
                  </div>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="grid gap-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="glass rounded-xl p-5 flex items-center gap-4 hover-lift cursor-hover"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-medium hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Operating Hours */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-primary" size={20} />
                  <h3 className="font-display text-xl tracking-wider">Operating Hours</h3>
                </div>
                <div className="space-y-3">
                  {operatingHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-10 space-y-6">
                <div className="text-center mb-8">
                  <h3 className="font-display text-3xl tracking-wider mb-2">Send Us a Message</h3>
                  <p className="text-muted-foreground text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
                      placeholder="+1 (___) ___-____"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select a topic</option>
                      <option value="trial">Free Trial Class</option>
                      <option value="enrollment">Class Enrollment</option>
                      <option value="private">Private Lessons</option>
                      <option value="events">Events & Performances</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Message *</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your dance goals and how we can help..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all cursor-hover ${
                    isSubmitted
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-gradient-brand hover:shadow-[0_0_30px_hsl(300_90%_55%_/_0.5)]'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <Check size={18} />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl tracking-wider">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { q: 'Do I need dance experience to join?', a: 'Not at all! We welcome dancers of all levels, from complete beginners to advanced performers.' },
              { q: 'What should I wear to class?', a: 'Comfortable, form-fitting clothing that allows you to move freely. Specific footwear depends on the dance style.' },
              { q: 'How do I book a free trial class?', a: 'Simply fill out the contact form above or call us directly. We\'ll schedule your trial at your convenience.' },
              { q: 'Do you offer private lessons?', a: 'Yes! We offer one-on-one sessions with all our instructors for personalized learning.' },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover-lift cursor-hover"
              >
                <h4 className="font-semibold mb-2">{faq.q}</h4>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
