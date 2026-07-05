import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ServiceStatus from '@/components/home/ServiceStatus';
import MttaCard from '@/components/home/MttaCard';
import ProjectGrid from '@/components/home/ProjectGrid';
import CreativeStrip from '@/components/home/CreativeStrip';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ServiceStatus />
        <ProjectGrid />
        <MttaCard />
        <CreativeStrip />
      </main>
      <Footer />
    </>
  );
}
