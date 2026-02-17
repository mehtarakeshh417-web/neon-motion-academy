import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Instructors', path: '/instructors' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Nennu's Dance Academy" className="h-14 w-14 rounded-full object-cover border-2 border-primary/30" />
              <div>
                <span className="font-display text-lg tracking-wider block">Nennu's</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Dance Academy</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Inspire and persevere to excel. The premier dance academy in Texas, 
              nurturing talent since day one.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full glass glass-hover flex items-center justify-center cursor-hover"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-foreground" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm cursor-hover"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h4 className="font-display text-xl tracking-wider mb-6">Our Classes</h4>
            <ul className="space-y-3">
              {['Bollywood', 'Kathak', 'Bhangra', 'Zumba', 'Folk Dances'].map((cls) => (
                <li key={cls}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm cursor-hover"
                  >
                    {cls}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Preston and Lebanon Crossing, Frisco
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  FM 423 & Rockhill Parkway, Little Elm
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+14699204602" className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-hover">
                  (469) 920 4602
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:neenu.klk@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-hover">
                  neenu.klk@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Nennu's Dance Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/policies" className="hover:text-primary transition-colors cursor-hover">Privacy Policy</Link>
            <Link to="/policies" className="hover:text-primary transition-colors cursor-hover">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
