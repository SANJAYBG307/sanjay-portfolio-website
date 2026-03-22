import { useEffect, useState } from "react";
import { getProjects } from "../services/api";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  useEffect(() => {
    if (!activeProject) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    function handleEscape(event) {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeProject]);

  return (
    <div className="page-content">
      <section>
        <div className="section-head reveal-on-scroll">
          <span className="section-kicker">Portfolio Work</span>
          <h1 className="section-title">Featured Projects</h1>
          <p className="section-subtitle">
            Data-driven solutions built for real operational and strategic decision-making.
          </p>
        </div>

        {loading ? (
          <div className="loading-state">
            <div className="spinner" />
          </div>
        ) : projects.length > 0 ? (
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpenDetails={setActiveProject} />
            ))}
          </div>
        ) : (
          <div className="empty-state surface-card">
            <p>No projects found.</p>
          </div>
        )}

        {activeProject ? (
          <div
            className="modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Project details"
            onClick={() => setActiveProject(null)}
          >
            <article className="project-modal surface-card" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                className="modal-close"
                onClick={() => setActiveProject(null)}
                aria-label="Close project details"
              >
                Close
              </button>

              <div className="readme-container">
                <h1 className="readme-title">{activeProject.title}</h1>

                {activeProject.readme?.overview && (
                  <section className="readme-section">
                    <p className="readme-description">{activeProject.readme.overview}</p>
                  </section>
                )}

                {activeProject.readme?.problem && (
                  <section className="readme-section">
                    <h2 className="readme-heading">🎯 Problem Statement</h2>
                    <p className="readme-text">{activeProject.readme.problem}</p>
                  </section>
                )}

                {activeProject.readme?.approach && (
                  <section className="readme-section">
                    <h2 className="readme-heading">🔧 Approach & Methodology</h2>
                    <p className="readme-text">{activeProject.readme.approach}</p>
                  </section>
                )}

                {activeProject.readme?.businessMetrics && activeProject.readme.businessMetrics.length > 0 && (
                  <section className="readme-section">
                    <h2 className="readme-heading">📊 Key Business Metrics</h2>
                    <div className="readme-metric-grid">
                      {activeProject.readme.businessMetrics.map((metric) => (
                        <article key={metric.label} className="readme-metric-card">
                          <p className="readme-metric-label">{metric.label}</p>
                          <p className="readme-metric-value">{metric.value}</p>
                        </article>
                      ))}
                    </div>
                  </section>
                )}

                {activeProject.readme?.topPerformers && activeProject.readme.topPerformers.length > 0 && (
                  <section className="readme-section">
                    <h2 className="readme-heading">🏆 Top Performers</h2>
                    <div className="readme-performer-groups">
                      {activeProject.readme.topPerformers.map((group) => (
                        <article key={group.category} className="readme-performer-group">
                          <h3 className="readme-subheading">{group.category}</h3>
                          <ul className="readme-list">
                            {group.items.map((item) => (
                              <li key={item} className="readme-list-item">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </article>
                      ))}
                    </div>
                  </section>
                )}

                {activeProject.readme?.salesTrend && activeProject.readme.salesTrend.length > 0 && (
                  <section className="readme-section">
                    <h2 className="readme-heading">📈 Sales Trend Over Time</h2>
                    <ul className="readme-list">
                      {activeProject.readme.salesTrend.map((trendPoint) => (
                        <li key={trendPoint} className="readme-list-item">
                          {trendPoint}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {activeProject.readme?.bottomLine && (
                  <section className="readme-section">
                    <h2 className="readme-heading">✅ Bottom Line</h2>
                    <p className="readme-text">{activeProject.readme.bottomLine}</p>
                  </section>
                )}

                {activeProject.readme?.keyInsights &&
                  activeProject.readme.keyInsights.length > 0 &&
                  !activeProject.readme?.businessMetrics &&
                  !activeProject.readme?.topPerformers &&
                  !activeProject.readme?.salesTrend &&
                  !activeProject.readme?.bottomLine && (
                  <section className="readme-section">
                    <h2 className="readme-heading">💡 Key Insights & Findings</h2>
                    <ul className="readme-list">
                      {activeProject.readme.keyInsights.map((insight) => (
                        <li key={insight} className="readme-list-item">
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {activeProject.readme?.impact && (
                  <section className="readme-section">
                    <h2 className="readme-heading">📊 Impact & Results</h2>
                    <p className="readme-text">{activeProject.readme.impact}</p>
                  </section>
                )}

                <section className="readme-section">
                  <h2 className="readme-heading">🛠️ Technologies & Tools</h2>
                  <div className="readme-tools">
                    {(activeProject.readme?.technologiesUsed || activeProject.tools).map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </article>
          </div>
        ) : null}
      </section>
    </div>
  );
}

export default Projects;
