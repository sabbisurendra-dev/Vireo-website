import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductOfferings } from './components/ProductOfferings';
import { InteractiveSandbox } from './components/InteractiveSandbox';
import { SecurityCompliance } from './components/SecurityCompliance';
import { Architecture } from './components/Architecture';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProductOfferings />
        <InteractiveSandbox />
        <SecurityCompliance />
        <Architecture />
      </main>
      <Footer />
    </div>
  );
}

export default App;
