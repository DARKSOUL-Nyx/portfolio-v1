// app/page.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { profile } from "./data/profile"; // Import profile to use the new links in the footer

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-[#050505]">
      
      {/* 1. Add the Navbar */}
      <Navbar />

      <Hero />
      
      {/* 2. Wrap components in divs with IDs so the Navbar can scroll to them */}
      <div id="identity">
        <About />
      </div>
      
      <div id="capabilities">
        <Projects />
      </div>
      
      <div id="impact">
        <Experience />
      </div>
      
      {/* 3. Upgraded Premium Footer with Social Links */}
      <footer className="w-full px-6 py-16 border-t border-neutral-900 flex flex-col items-center justify-center gap-8 relative z-10 bg-[#0a0a0a]">
        
        <div className="flex gap-8">
          {profile.contact.map((link) => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noreferrer"
              className="font-satoshi text-neutral-500 font-bold hover:text-white transition-colors uppercase tracking-[0.2em] text-xs"
            >
              {link.name}
            </a>
          ))}
        </div>

        <p className="font-satoshi text-neutral-700 text-[10px] font-bold tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} NISHWAN. SYSTEM ONLINE.
        </p>
      </footer>
    </main>
  );
}