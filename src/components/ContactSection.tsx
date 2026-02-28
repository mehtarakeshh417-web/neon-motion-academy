import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
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
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider">
            Start Your <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Map & Contact Info Side by Side */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Google Map */}
            <div className="relative glass rounded-3xl overflow-hidden h-[350px] cursor-hover">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.5!2d-96.80403645130397!3d33.129294103166444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDA3JzQ1LjUiTiA5NsKwNDgnMTQuNSJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-4 content-center">
              {[
                { icon: MapPin, label: 'Frisco', value: 'Preston and Lebanon Crossing, Frisco' },
                { icon: MapPin, label: 'Little Elm', value: 'FM 423 & Rockhill Parkway, Little Elm' },
                { icon: Phone, label: 'Call Us', value: '(469) 920 4602' },
                { icon: Mail, label: 'Email Us', value: 'danceforlife763@gmail.com' },
              ].map((item, index) => (
                <motion.div
                  key={item.label + item.value}
                  initial={{ opacity: 0, x: 30 }}
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
