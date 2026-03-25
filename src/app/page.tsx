import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Showreel from '@/components/Showreel';
import Gallery from '@/components/Gallery';
import Process from '@/components/Process';
import WhyProfessional from '@/components/WhyProfessional';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showreel />
        <Gallery />
        <Process />
        <WhyProfessional />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
