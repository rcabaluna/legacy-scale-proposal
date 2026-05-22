import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ExecutiveOverview from './components/sections/ExecutiveOverview';
import Vision from './components/sections/Vision';
import TechStack from './components/sections/TechStack';
import Architecture from './components/sections/Architecture';
import Modules from './components/sections/Modules';
import Timeline from './components/sections/Timeline';
import Investment from './components/sections/Investment';
import CallToAction from './components/sections/CallToAction';

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-text">
      <Navbar />
      <main>
        <Hero />
        <ExecutiveOverview />
        <Vision />
        <TechStack />
        <Architecture />
        <Modules />
        <Timeline />
        <Investment />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
