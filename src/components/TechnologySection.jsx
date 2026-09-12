import { useState } from "react";
import technologies from "../data/technologies.js";

function TechnologySection() {
  const [stack, setStack] = useState([]);

  const addToStack = (technology) => {
    if (!stack.some((item) => item.id === technology.id)) {
      setStack([...stack, technology]);
    }
  };

  const removeFromStack = (id) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const removeAll = () => {
    setStack([]);
  };

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
          {/* Technology Cards */}
          <div className="technology-grid">
            {technologies.map((technology) => (
              <div className="technology-card" key={technology.id}>
                <div className="card-top">
                  <div className="technology-icon">{technology.icon}</div>

                  {technology.badge && (
                    <span className="technology-badge">{technology.badge}</span>
                  )}
                </div>

                <h3>{technology.name}</h3>

                <p className="technology-description">
                  {technology.description}
                </p>

                <div className="technology-meta">
                  <span>{technology.category}</span>

                  <span>{technology.difficulty}</span>

                  <span className="rating">★ {technology.rating}</span>
                </div>

                <button
                  className="add-stack-btn"
                  onClick={() => addToStack(technology)}
                >
                  {stack.some((item) => item.id === technology.id)
                    ? "Added to Stack"
                    : "Add to Stack"}
                </button>
              </div>
            ))}
          </div>

          {/* Your Stack */}
          <aside className="your-stack">
            <h3>Your Stack</h3>

            <p>
              {stack.length} Technology
              {stack.length !== 1 ? "ies" : "y"} Selected
            </p>

            <div className="stack-items">
              {stack.length === 0 ? (
                <div className="empty-stack">
                  Select technologies to build your stack.
                </div>
              ) : (
                stack.map((technology) => (
                  <div className="stack-item" key={technology.id}>
                    <div className="stack-item-info">
                      <span className="stack-icon">{technology.icon}</span>

                      <div>
                        <strong>{technology.name}</strong>
                        <small>{technology.category}</small>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromStack(technology.id)}
                      aria-label={`Remove ${technology.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>

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
