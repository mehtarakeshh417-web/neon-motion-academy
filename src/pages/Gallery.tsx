import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { X } from 'lucide-react';

const photos = [
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771354258/cc2d4220-2934-4801-b6ec-1c56138eb20f_evu24p.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771354257/IMG_9888_ggiron.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771354260/IMG_3872_ts9a8e.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771354260/IMG_3914_wodjzh.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771354261/IMG_3865_g1pzyv.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771354260/6Z8A8248_pvkdpx.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771354259/IMG_3933_mnhh3t.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771354259/IMG_3916_rsdy7w.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771354258/0e4ac319-323b-4681-9fb6-e7841b6c3e4f_uxwo82.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771354261/782dcbde-c96f-450d-a3b0-1a2c41adda60_fgaoew.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771354272/IMG_0679_d0bxkx.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771354261/d29c1367-7507-41c2-ac2a-ba60de6f43a4_lldubh.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 text-xs font-medium tracking-[0.3em] uppercase glass rounded-full mb-6"
          >
            Moments Captured
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="kinetic-heading"
          >
            Our <span className="gradient-text">Gallery</span>
          </motion.h1>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="mb-4 break-inside-avoid cursor-hover"
                onClick={() => setSelectedImage(photo)}
              >
                <div className="glass rounded-2xl overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={photo}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center cursor-hover"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Gallery fullscreen"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
