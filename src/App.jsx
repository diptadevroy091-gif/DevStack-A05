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

      {/* ================= MAIN CONTENT ================= */}
      <main className="page-shell">
        {/* ================= HERO SECTION ================= */}
        <section className="hero" id="home">
          <div className="hero-content">
            <h1>
              Build Your Ideal
              <br />
              <span>Development Stack</span>
            </h1>

            <p className="subtitle">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="hero-actions">
              <button
                className="primary-btn"
                onClick={() =>
                  document
                    .getElementById("technologies")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Technologies
              </button>

              <button className="secondary-btn">Learn More</button>
            </div>
          </div>

          <div className="hero-visual">
            <img src={banner} alt="Dev Stack Technology Banner" />
          </div>
        </section>

        {/* ================= TECHNOLOGY SECTION ================= */}
        <TechnologySection />
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}

export default App;
