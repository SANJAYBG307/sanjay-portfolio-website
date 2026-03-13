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

              <p className="section-kicker">Project Spotlight</p>
              <h2 className="section-title modal-title">{activeProject.title}</h2>

              <h3 className="modal-subtitle">Key Highlights</h3>
              <ul className="project-highlights modal-highlights">
                {(activeProject.highlights || [activeProject.description]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h3 className="modal-subtitle">Tools and Technologies</h3>
              <div className="project-tools">
                {activeProject.tools.map((tool) => (
                  <span key={tool} className="tool-badge">
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          </div>
        ) : null}
      </section>
    </div>
  );
}

export default Projects;
