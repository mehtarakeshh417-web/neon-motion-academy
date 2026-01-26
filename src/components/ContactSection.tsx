import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

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
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider">
            Start Your <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Stylized Texas Map */}
            <div className="relative glass rounded-3xl overflow-hidden h-[300px] cursor-hover">
              {/* Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-background" />
              
              {/* Texas Outline (simplified SVG) */}
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 w-full h-full p-8"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
              >
                <path
                  d="M180 60 L220 60 L250 80 L280 70 L310 90 L340 100 L360 140 L350 180 L340 220 L320 260 L280 300 L240 340 L200 350 L160 340 L120 300 L100 260 L80 220 L70 180 L80 140 L100 100 L140 80 Z"
                  className="fill-muted/30"
                />
                {/* Houston marker */}
                <motion.circle
                  cx="280"
                  cy="280"
                  r="8"
                  className="fill-primary"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.circle
                  cx="280"
                  cy="280"
                  r="20"
                  className="stroke-primary fill-none"
                  strokeWidth="1"
                  animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>

              {/* Location Label */}
              <div className="absolute bottom-6 left-6 glass rounded-xl px-4 py-3 flex items-center gap-3">
                <MapPin className="text-primary" size={20} />
                <div>
                  <p className="font-medium text-sm">Houston, Texas</p>
                  <p className="text-xs text-muted-foreground">123 Dance Avenue</p>
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-4">
              {[
                { icon: MapPin, label: 'Visit Us', value: '123 Dance Avenue, Houston, TX 77001' },
                { icon: Phone, label: 'Call Us', value: '+1 (888) 123-4567' },
                { icon: Mail, label: 'Email Us', value: 'info@nennusdance.com' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass rounded-xl p-4 flex items-center gap-4 hover-lift cursor-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-sm">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
                    placeholder="+1 (___) ___-____"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your dance goals..."
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
                    Message Sent!
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
  );
};

export default ContactSection;
