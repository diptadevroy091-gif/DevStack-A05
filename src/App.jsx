import Navbar from "./components/Navbar";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import banner from "./assets/banner.png";

import "./App.css";

function App() {
  const scrollToTechnologies = () => {
    document.getElementById("technologies")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= MAIN ================= */}
      <main className="page-shell">
        {/* ================= HERO ================= */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">Modern Tech Stack</p>

            <h1>
              Build smarter products with the <span>right tech.</span>
            </h1>

            <p className="subtitle">
              Discover modern tools, scalable systems, and practical strategies
              that help teams ship faster.
            </p>

            <div className="hero-actions">
              <button className="primary-btn" onClick={scrollToTechnologies}>
                Explore Technologies
              </button>

              <button className="secondary-btn" onClick={scrollToTechnologies}>
                Learn More
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <img src={banner} alt="Dev Stack Technology Banner" />
          </div>
        </section>

        {/* ================= TECHNOLOGIES ================= */}
        <TechnologySection />
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

      {/* ================= TOASTIFY ================= */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;
