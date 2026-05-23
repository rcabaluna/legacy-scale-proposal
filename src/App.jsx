import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Product from './components/sections/Product';
import Compare from './components/sections/Compare';
import TechStack from './components/sections/TechStack';
import Timeline from './components/sections/Timeline';
import Gantt from './components/sections/Gantt';
import ClaudeCode from './components/sections/ClaudeCode';
import Modules from './components/sections/Modules';
import Database from './components/sections/Database';
import Investment from './components/sections/Investment';
import Risk from './components/sections/Risk';
import CallToAction from './components/sections/CallToAction';

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-text">
      <Navbar />
      <main>
        <Hero />
        <Product />
        <Compare />
        <TechStack />
        <Timeline />
        <Gantt />
        <ClaudeCode />
        <Modules />
        <Database />
        <Investment />
        <Risk />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
