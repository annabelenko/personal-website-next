import { Example } from "@/components/Example"; // "Hello, I'm Anna" Section
import { Projects } from "@/components/Projects"; // Projects Section
import { Navbar } from "@/components/Navbar"; // Navbar Component
import styles from "@/components/HighlightedText.module.css"; // Highlighted styles (if needed)

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Example Section */}
      <section className="section example-container">
        <Example />
      </section>

      {/* Highlighted Text Section */}
      <section className="section highlighted-text-container">
        {/* Add any content here if necessary */}
      </section>

      {/* Projects Section */}
      <section className="section projects-container">
        <Projects />
      </section>
    </>
  );
}