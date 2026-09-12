import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function TechnologySection() {
  const [technologiesData, setTechnologiesData] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load technologies from JSON
  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.BASE_URL}data/technologies.json`,
        );

        if (!response.ok) {
          throw new Error("Failed to load technologies.json");
        }

        const data = await response.json();

        // Make sure JSON contains an array
        if (!Array.isArray(data)) {
          throw new Error("technologies.json must contain an array");
        }

        console.log("Technologies loaded:", data);

        setTechnologiesData(data);
      } catch (error) {
        console.error("Technology loading error:", error);

        toast.error("Technologies load হচ্ছে না!");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  // Add technology
  const addToStack = (technology) => {
    const alreadyExists = stack.some((item) => item.id === technology.id);

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((currentStack) => [...currentStack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const removeFromStack = (id) => {
    const technology = stack.find((item) => item.id === id);

    setStack((currentStack) => currentStack.filter((item) => item.id !== id));

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  // Remove all
  const removeAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.success("All technologies removed!");
  };

  // Loading
  if (loading) {
    return (
      <section className="technology-section" id="technologies">
        <div className="technology-container">
          <div className="loading-state">
            <div className="loading-spinner"></div>

            <p>Loading technologies...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="technology-section" id="technologies">
      <div className="technology-container">
        {/* Section Heading */}
        <div className="section-heading">
          <h2>
            Explore the <span>Technologies</span>
          </h2>

          <p>Pick one technology per category to build your ideal stack.</p>
        </div>

        <div className="technology-layout">
          {/* =========================
              TECHNOLOGY CARDS
          ========================= */}
          <div className="technology-grid">
            {technologiesData.map((technology) => {
              const isAdded = stack.some((item) => item.id === technology.id);

              return (
                <div className="technology-card" key={technology.id}>
                  {/* Card Top */}
                  <div className="card-top">
                    <div className="technology-icon">
                      <img
                        src={technology.icon}
                        alt={`${technology.name} logo`}
                      />
                    </div>

                    {technology.badge && (
                      <span className="technology-badge">
                        {technology.badge}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <h3>{technology.name}</h3>

                  {/* Description */}
                  <p className="technology-description">
                    {technology.description}
                  </p>

                  {/* Meta */}
                  <div className="technology-meta">
                    <span>{technology.category}</span>

                    <span>{technology.difficulty}</span>

                    <span className="rating">
                      <span className="star">★</span>
                      {technology.rating}
                    </span>
                  </div>

                  {/* Add Button */}
                  <button
                    className={`add-stack-btn ${isAdded ? "added" : ""}`}
                    onClick={() => addToStack(technology)}
                    disabled={isAdded}
                  >
                    {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                  </button>
                </div>
              );
            })}
          </div>

          {/* =========================
              YOUR STACK
          ========================= */}
          <aside className="your-stack">
            <div className="stack-header">
              <h3>Your Stack</h3>

              <p>
                {stack.length}{" "}
                {stack.length === 1 ? "Technology" : "Technologies"} Selected
              </p>
            </div>

            <div className="stack-items">
              {stack.length === 0 ? (
                <div className="empty-stack">
                  <span>＋</span>

                  <p>Select technologies to build your stack.</p>
                </div>
              ) : (
                stack.map((technology) => (
                  <div className="stack-item" key={technology.id}>
                    <div className="stack-item-info">
                      <span className="stack-icon">
                        <img src={technology.icon} alt={technology.name} />
                      </span>

                      <div>
                        <strong>{technology.name}</strong>

                        <small>{technology.category}</small>
                      </div>
                    </div>

                    <button
                      className="remove-stack-item"
                      onClick={() => removeFromStack(technology.id)}
                      aria-label={`Remove ${technology.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Remove All */}
            <button
              className="remove-all-btn"
              onClick={removeAll}
              disabled={stack.length === 0}
            >
              Remove All
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default TechnologySection;
