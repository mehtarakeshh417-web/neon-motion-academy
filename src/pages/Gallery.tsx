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
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771481938/6Z8A8266_t8zur5.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771481937/9f9acddf-9160-471b-b977-6cd220e08826_rapqwo.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771480733/IMG_2471_wzotf0.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771481938/10d3b4c4-c92a-4b4c-a1c4-9ed8d60c55cd_kknrtg.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771481938/6Z8A8195_nmzmse.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482014/IMG_1634_mxsrac.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482005/a3c53c8e-9f83-42c2-b756-2fa6009e7967_jodxat.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482053/967d1356-861b-48c6-946c-28432aa25c37_ta4edf.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482040/2588af2b-1155-4e81-81e7-6fa96abf3182_gds39m.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482274/c4b13c30-ae63-4d0b-aad0-2659277576c9_lykubz.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482274/ad1bd717-599c-4329-ad12-1506b544596e_h4phgr.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482274/b174cbb8-4908-4fb8-91f8-640586680d2b_qo8ees.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482275/07e86dcb-f8fd-405f-ae1a-87a48872dc8d_1_rdstmp.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482276/7993cab1-d9c3-4ac4-97cf-4a944040ec07_c3whi7.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482276/6Z8A8220_xq1dog.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482280/IMG_2471_pwq4i2.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482278/d803e057-7b9a-4d6a-af9f-9b56e090409b_gb3m6l.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482281/cda4a3bf-c537-49ba-8e90-9e45a2dc7ba9_bbkgnz.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482280/IMG_3447_qoc4rh.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482281/IMG_3870_qbbbfg.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482280/IMG_3861_debguk.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482281/IMG_3862_kwobmd.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482282/IMG_3898_dc0zjh.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482283/IMG_3896_srirbe.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482282/IMG_3873_krz9ov.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482282/IMG_3901_f7vyrx.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482283/IMG_3902_yqcuiy.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482284/IMG_3907_nvdwew.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482284/IMG_3903_nsedvi.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482282/IMG_3864_ubpjf8.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482285/IMG_3910_ragcna.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482284/IMG_3908_cpurrn.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482285/IMG_3913_fhoyyp.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482291/IMG_3911_stomu6.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482291/IMG_3919_uhslmq.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482293/IMG_3927_znu69c.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482293/IMG_3929_r4cohd.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482293/IMG_3917_xc0uag.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482292/IMG_3918_1_pka9vo.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482295/IMG_3953_c8b82d.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482295/IMG_3951_sa0st0.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482294/IMG_3942_mnjasd.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482295/IMG_3954_rercx5.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482294/IMG_3930_pqvatb.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482295/IMG_3960_esucrd.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482293/IMG_3940_i83scd.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482298/IMG_3965_onwamo.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482294/IMG_0679_zxzrbd.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482299/IMG_3969_pgnpvs.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482300/IMG_3970_rcilw0.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482304/IMG_3945_ztypnu.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482303/IMG_3996_kexypa.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482308/IMG_4004_doaepw.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482304/IMG_4003_eelc5l.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482307/IMG_4009_yn5ygr.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482302/IMG_3997_xqq6fv.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482308/IMG_4001_vhpysm.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482301/IMG_3971_rw6lcv.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482304/2c99888e-95ab-430e-820f-b896af0e95cc_amm3jz.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482303/IMG_3923_lyezvr.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482303/IMG_3998_vdqxyh.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482313/IMG_9782_rqtrva.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771482314/IMG_9259_iriwtw.jpg",
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
