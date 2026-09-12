import Navbar from "./components/Navbar";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";

import banner from "./assets/banner.png";

import "./App.css";

function App() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
      <main className="page-shell">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Modern Tech Stack</p>
            <h1>Build smarter products with the right tech.</h1>
            <p className="subtitle">
              Discover modern tools, scalable systems, and practical strategies
              that help teams ship faster.
            </p>
            <div className="hero-actions">
              <button className="primary-btn">Get started</button>
              <button className="secondary-btn">Explore stack</button>
            </div>
          </div>

          <div className="hero-visual">
            <img src={banner} alt="Technology banner" />
          </div>
        </section>

        <TechnologySection />
      </main>

      <Footer />
    </>
  );
}

export default App;
