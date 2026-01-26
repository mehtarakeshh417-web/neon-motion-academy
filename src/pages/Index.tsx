import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ClassesSection from '@/components/ClassesSection';
import InstructorsSection from '@/components/InstructorsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ClassesSection />
        <InstructorsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
