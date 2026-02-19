import { motion } from 'framer-motion';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sections = [
  {
    title: 'A. Refund Policy',
    items: [
      'No refunds for 4-class session enrollments.',
      'For 12-class semester enrollments, refunds are allowed only within 14 days of payment.',
      '$30 cancellation fee applies.',
      'Classes attended within the 14-day period plus the fee will be deducted.',
      'Remaining balance will be refunded.',
      'One-time admission fee is non-refundable.',
      'Refunds will be processed in a reasonable timeframe; banking delays may occur.',
    ],
  },
  {
    title: 'B. Trial Class Policy',
    items: [
      'First trial class is FREE for all new students.',
      'Counted as first class upon enrollment.',
      'Launch classes only: trial does not count toward credits.',
      'One trial per student; additional styles, batches, or locations require enrollment or drop-in fee.',
    ],
  },
  {
    title: 'C. Missed / Absent Classes',
    items: [
      'Classes cancelled by NDA are credited automatically.',
      'Makeup classes (less than 3 consecutive weeks, group classes only):',
      'One makeup may carry over to next cycle.',
      'Prior appointment required.',
      '12-class enrollment: up to 3 makeups',
      '4-class enrollment: 1 makeup',
      'No makeup for competition/teens/pre-teens (90-min classes)',
      'Absences over 3 consecutive weeks refer to Deferral Policy.',
      'All absences must be reported.',
    ],
  },
  {
    title: 'D. Deferral Policy',
    items: [
      'Not available for 4-week enrollments.',
      '12-week semester enrollments may defer if:',
      '≥50% classes remain',
      'Deferral ≥3 consecutive weeks',
      'Request emailed 2 weeks in advance',
      'Max deferral: 12 weeks',
    ],
  },
  {
    title: 'E. Video & Photography Consent',
    items: [
      'Enrolling or attending trials means consent to being photographed/video recorded for promotional and social media use.',
    ],
  },
  {
    title: 'F. Privacy Notice – Minors',
    items: [
      'Applies to students under 13.',
      'Photos/videos may be used for promotional purposes.',
      'Personal data retained only as necessary.',
      'Consent may be withdrawn at any time: danceforlife763@gmail.com',
    ],
  },
  {
    title: 'G. Waiver & Release of Liability',
    items: [
      'Students/parents release NDA, staff, and affiliates from liability for injury, illness, disability, death, or property loss.',
      'Participation is voluntary; risks assumed by participant/parent.',
      'Performance participation is at instructor discretion.',
      'Academy may share information if required by law.',
      'Enrollment confirms understanding and acceptance of terms.',
    ],
  },
  {
    title: 'H. Late Fees / Overdue Payments',
    items: [
      'Late fees for unpaid classes:',
      '1 overdue class: $30',
      'Additional overdue classes: $20 each',
    ],
  },
  {
    title: 'I. Stage Performances & Events',
    items: [
      'Active enrollment required to perform; expired enrollment requires re-enrollment or drop-in fees.',
      'All performance expenses are the responsibility of participant/parent.',
      'Rehearsals ≥1 hour are considered paid classes.',
      'Additional performance/event fees may apply and will be communicated in advance.',
    ],
  },
  {
    title: 'J. Notice & Fee Policy',
    items: [
      'If a student does not wish to continue classes, a one-month notice is required.',
      'Failure to provide one-month notice will result in a penalty of half a month\'s fee.',
      'Fees must be paid in advance before the 7th of every month.',
    ],
  },
];

const Policies = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 text-xs font-medium tracking-[0.3em] uppercase glass rounded-full mb-6"
          >
            Important Information
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="kinetic-heading"
          >
            Policies & <span className="gradient-text">Terms</span>
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            {sections.map((section, sIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sIndex * 0.05 }}
                className="glass rounded-2xl p-8"
              >
                <h2 className="font-display text-2xl md:text-3xl tracking-wider mb-6 gradient-text">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item, iIndex) => (
                    <li key={iIndex} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-12 text-sm glass rounded-2xl p-6"
          >
            By enrolling or registering for a trial, participants accept all terms and conditions.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Policies;
