/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  ChevronRight, 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  Navigation, 
  Menu, 
  X,
  ArrowRight,
  Star
} from "lucide-react";
import { useState, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-starlight-blue rounded-full flex items-center justify-center">
            <Navigation className="w-5 h-5 text-white fill-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tighter">ASTRA</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">FLEET</a>
          <a href="#" className="hover:text-white transition-colors">TECHNOLOGY</a>
          <a href="#" className="hover:text-white transition-colors">GALACTIC NETWORK</a>
          <button className="px-5 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
            RESERVE NOW
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/5 p-6 flex flex-col gap-4"
        >
          <a href="#" className="text-lg">FLEET</a>
          <a href="#" className="text-lg">TECHNOLOGY</a>
          <a href="#" className="text-lg">GALACTIC NETWORK</a>
          <button className="w-full py-3 bg-white text-black rounded-xl font-bold">
            RESERVE NOW
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background stars/nebula */}
      <div className="absolute inset-0 nebula-gradient z-0" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium mb-6"
        >
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <span>INTRODUCING THE NEBULA X-1</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6"
        >
          BEYOND THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-starlight-blue to-nebula-purple">
            HORIZON
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-xl mx-auto text-gray-400 text-lg mb-10"
        >
          Experience the first hypercar engineered for both asphalt and atmospheric transit. 
          Zero emissions. Infinite possibilities.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-starlight-blue hover:bg-blue-600 text-white rounded-full font-bold flex items-center justify-center gap-2 transition-all group">
            EXPLORE FLEET <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 text-white rounded-full font-bold transition-all">
            WATCH LAUNCH
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Car Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-[-10%] md:bottom-[-20%] left-1/2 -translate-x-1/2 w-full max-w-5xl z-20 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200" 
          alt="Nebula X-1"
          className="w-full h-auto drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-8 glass rounded-3xl border border-white/5"
  >
    <div className="w-12 h-12 bg-starlight-blue/20 rounded-2xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-starlight-blue" />
    </div>
    <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const Features = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">ENGINEERED FOR THE UNKNOWN</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Our proprietary Astra-Core technology redefines what a vehicle can achieve.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={Zap} 
            title="Ion Propulsion" 
            desc="0-100 km/h in 1.2 seconds using our patented electromagnetic drive system." 
          />
          <FeatureCard 
            icon={Shield} 
            title="Titanium Alloy" 
            desc="Aerospace-grade chassis capable of withstanding extreme atmospheric pressure." 
          />
          <FeatureCard 
            icon={Globe} 
            title="Global Sync" 
            desc="Real-time satellite connectivity ensures you're never off the grid, even in orbit." 
          />
          <FeatureCard 
            icon={Cpu} 
            title="AI Pilot" 
            desc="Level 5 autonomous driving powered by the Astra Neural Network." 
          />
        </div>
      </div>
    </section>
  );
};

const FleetItem = ({ name, price, image, category }: { name: string, price: string, image: string, category: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-3xl glass"
  >
    <div className="aspect-[16/10] overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="text-starlight-blue text-xs font-bold uppercase tracking-widest mb-1">{category}</p>
          <h3 className="text-2xl font-display font-bold">{name}</h3>
        </div>
        <p className="text-xl font-mono text-gray-300">{price}</p>
      </div>
      <button className="mt-4 w-full py-3 border border-white/10 rounded-xl hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 font-bold">
        VIEW DETAILS <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </motion.div>
);

const Fleet = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent to-space-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">THE 2026 COLLECTION</h2>
            <p className="text-gray-400">Precision instruments for the modern explorer.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full border border-white/10 hover:border-white transition-colors text-sm font-bold">ALL</button>
            <button className="px-6 py-2 rounded-full border border-white/10 hover:border-white transition-colors text-sm font-bold opacity-50">HYPER</button>
            <button className="px-6 py-2 rounded-full border border-white/10 hover:border-white transition-colors text-sm font-bold opacity-50">SUV</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FleetItem 
            name="Nebula X-1" 
            price="$2.4M" 
            category="Hypercar"
            image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" 
          />
          <FleetItem 
            name="Pulsar GT" 
            price="$1.8M" 
            category="Grand Tourer"
            image="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800" 
          />
          <FleetItem 
            name="Zenith SUV" 
            price="$850K" 
            category="Exploration"
            image="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800" 
          />
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => (
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto glass rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full nebula-gradient opacity-50 pointer-events-none" />
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">JOIN THE ODYSSEY</h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Be the first to receive updates on new launches, galactic events, and exclusive owner benefits.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 focus:outline-none focus:border-starlight-blue transition-colors"
          />
          <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-starlight-blue rounded-full flex items-center justify-center">
          <Navigation className="w-4 h-4 text-white fill-white" />
        </div>
        <span className="font-display font-bold text-lg tracking-tighter">ASTRA MOTORS</span>
      </div>
      
      <div className="flex gap-8 text-sm text-gray-500">
        <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
        <a href="#" className="hover:text-white transition-colors">TERMS</a>
        <a href="#" className="hover:text-white transition-colors">CAREERS</a>
        <a href="#" className="hover:text-white transition-colors">CONTACT</a>
      </div>

      <p className="text-sm text-gray-600">© 2026 ASTRA MOTORS. ALL RIGHTS RESERVED.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Fleet />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

