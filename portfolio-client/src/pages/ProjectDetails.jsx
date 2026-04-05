import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProjects } from "../services/api";

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const MAX_METRICS = 4;
  const MAX_PERFORMER_GROUPS = 2;
  const MAX_PERFORMERS_PER_GROUP = 3;
  const MAX_TREND_POINTS = 3;
  const MAX_INSIGHTS = 4;
  const MAX_TOOLS = 6;

  useEffect(() => {
    async function loadProject() {
      try {
        const data = await getProjects();
        const selected = data.find((item) => String(item.id) === String(id));
        setProject(selected || null);
      } finally {
        setLoading(false);
      }
    }

    loadProject();
  }, [id]);

  if (loading) {
    return (
      <div className="page-content">
        <div className="loading-state">
          <div className="spinner" />
          <p>Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="page-content">
        <div className="empty-state surface-card">
          <p>Project not found.</p>
          <Link to="/projects" className="btn btn-secondary" style={{ marginTop: "0.9rem", display: "inline-flex" }}>
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <section>
        <div className="section-head reveal-on-scroll">
          <span className="section-kicker">Project Details</span>
          <h1 className="section-title">{project.title}</h1>
          <p className="section-subtitle">Full project breakdown for deeper review.</p>
        </div>

        <div className="surface-card reveal-on-scroll" style={{ padding: "1.4rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <Link to="/projects" className="btn btn-secondary" style={{ display: "inline-flex" }}>
              Back to Projects
            </Link>
          </div>

          <div className="readme-container">
            {project.readme?.overview && (
              <section className="readme-section">
                <p className="readme-description">{project.readme.overview}</p>
              </section>
            )}

            {project.readme?.problem && (
              <section className="readme-section">
                <h2 className="readme-heading">🎯 Problem Statement</h2>
                <p className="readme-text">{project.readme.problem}</p>
              </section>
            )}

            {project.readme?.approach && (
              <section className="readme-section">
                <h2 className="readme-heading">🔧 Approach & Methodology</h2>
                <p className="readme-text">{project.readme.approach}</p>
              </section>
            )}

            {project.readme?.businessMetrics && project.readme.businessMetrics.length > 0 && (
              <section className="readme-section">
                <h2 className="readme-heading">📊 Key Business Metrics</h2>
                <div className="readme-metric-grid">
                  {project.readme.businessMetrics.slice(0, MAX_METRICS).map((metric) => (
                    <article key={metric.label} className="readme-metric-card">
                      <p className="readme-metric-label">{metric.label}</p>
                      <p className="readme-metric-value">{metric.value}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {project.readme?.topPerformers && project.readme.topPerformers.length > 0 && (
              <section className="readme-section">
                <h2 className="readme-heading">🏆 Top Performers</h2>
                <div className="readme-performer-groups">
                  {project.readme.topPerformers.slice(0, MAX_PERFORMER_GROUPS).map((group) => (
                    <article key={group.category} className="readme-performer-group">
                      <h3 className="readme-subheading">{group.category}</h3>
                      <ul className="readme-list">
                        {group.items.slice(0, MAX_PERFORMERS_PER_GROUP).map((item) => (
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

            {project.readme?.salesTrend && project.readme.salesTrend.length > 0 && (
              <section className="readme-section">
                <h2 className="readme-heading">📈 Sales Trend Over Time</h2>
                <ul className="readme-list">
                  {project.readme.salesTrend.slice(0, MAX_TREND_POINTS).map((trendPoint) => (
                    <li key={trendPoint} className="readme-list-item">
                      {trendPoint}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.readme?.bottomLine && (
              <section className="readme-section">
                <h2 className="readme-heading">✅ Bottom Line</h2>
                <p className="readme-text">{project.readme.bottomLine}</p>
              </section>
            )}

            {project.readme?.keyInsights &&
              project.readme.keyInsights.length > 0 &&
              !project.readme?.businessMetrics &&
              !project.readme?.topPerformers &&
              !project.readme?.salesTrend &&
              !project.readme?.bottomLine && (
              <section className="readme-section">
                <h2 className="readme-heading">💡 Key Insights & Findings</h2>
                <ul className="readme-list">
                  {project.readme.keyInsights.slice(0, MAX_INSIGHTS).map((insight) => (
                    <li key={insight} className="readme-list-item">
                      {insight}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.readme?.impact && (
              <section className="readme-section">
                <h2 className="readme-heading">📊 Impact & Results</h2>
                <p className="readme-text">{project.readme.impact}</p>
              </section>
            )}

            <section className="readme-section">
              <h2 className="readme-heading">🛠️ Technologies & Tools</h2>
              <div className="readme-tools">
                {(project.readme?.technologiesUsed || project.tools).slice(0, MAX_TOOLS).map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
