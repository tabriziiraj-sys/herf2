import Hero from "./components/hero";
import { ExcelChrome, StatusBarFooter } from "./components/chrome";
import { StatsBand, About } from "./components/sections";
import { Packages, Courses } from "./components/products";
import { Software, Research, Contact } from "./components/expertise";

export default function App() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink-900">
      <ExcelChrome />
      <main>
        <Hero />
        <StatsBand />
        <About />
        <Packages />
        <Courses />
        <Software />
        <Research />
        <Contact />
      </main>
      <StatusBarFooter />
    </div>
  );
}
