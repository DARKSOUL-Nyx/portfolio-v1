// app/page.tsx
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <About />
      <Projects />
    </main>
  );
}