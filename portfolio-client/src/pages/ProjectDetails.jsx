import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProjects } from "../services/api";

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const MAX_METRICS = 8;
  const MAX_PERFORMER_GROUPS = 6;
  const MAX_PERFORMERS_PER_GROUP = 8;
  const MAX_TREND_POINTS = 8;
  const MAX_INSIGHTS = 8;
  const MAX_TOOLS = 6;
  const MAX_HIGHLIGHTS = 4;

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

  const businessMetrics = project.readme?.businessMetrics || [];
  const topMetrics = businessMetrics.slice(0, 4);
  const recruiterTakeaway = project.readme?.impact || project.readme?.bottomLine || project.summary;
  const keyHighlights = (project.highlights || []).slice(0, MAX_HIGHLIGHTS);
  const technologies = (project.readme?.technologiesUsed || project.tools).slice(0, MAX_TOOLS);

  return (
    <div className="page-content project-detail-page">
      <section className="project-detail-hero surface-card reveal-on-scroll">
        <div className="project-detail-header">
          <div className="project-header-nav">
            <Link to="/projects" className="btn btn-secondary back-link-inline">
              <span aria-hidden="true">←</span>
              <span>Back to Projects</span>
            </Link>
          </div>
          <span className="section-kicker">Portfolio Case Study</span>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-subtitle">Designed to show business thinking, analytical rigor, and decision-ready communication.</p>
          <p className="project-detail-summary">{project.description}</p>
        </div>

        {keyHighlights.length > 0 && (
          <div className="project-highlight-panel">
            <h2 className="project-highlight-title">Why This Project Stands Out</h2>
            <ul className="project-highlight-list">
              {keyHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {topMetrics.length > 0 && (
          <div className="project-detail-topline">
            {topMetrics.map((metric) => (
              <article key={metric.label} className="project-snapshot-card">
                <p className="project-snapshot-label">{metric.label}</p>
                <p className="project-snapshot-value">{metric.value}</p>
              </article>
            ))}
          </div>
        )}

        <div className="project-detail-pills">
          {technologies.map((tech) => (
            <span key={tech} className="detail-pill">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="surface-card project-detail-body reveal-on-scroll">
        <div className="readme-container">
          {recruiterTakeaway && (
            <section className="readme-section">
              <h2 className="readme-heading">Recruiter Takeaway</h2>
              <p className="readme-description">{recruiterTakeaway}</p>
            </section>
          )}

            {project.readme?.overview && (
              <section className="readme-section">
                <p className="readme-description">{project.readme.overview}</p>
              </section>
            )}

            {project.readme?.problem && (
              <section className="readme-section">
                <h2 className="readme-heading">Problem Statement</h2>
                <p className="readme-text">{project.readme.problem}</p>
              </section>
            )}

            {project.readme?.approach && (
              <section className="readme-section">
                <h2 className="readme-heading">Approach and Methodology</h2>
                <p className="readme-text">{project.readme.approach}</p>
              </section>
            )}

            {project.readme?.businessMetrics && project.readme.businessMetrics.length > 0 && (
              <section className="readme-section">
                <h2 className="readme-heading">Key Business Metrics</h2>
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
                <h2 className="readme-heading">Top Performers</h2>
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
                <h2 className="readme-heading">Key Patterns and Trends</h2>
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
                <h2 className="readme-heading">Bottom Line</h2>
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
                <h2 className="readme-heading">Key Insights and Findings</h2>
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
                <h2 className="readme-heading">Impact and Results</h2>
                <p className="readme-text">{project.readme.impact}</p>
              </section>
            )}

            <section className="readme-section">
              <h2 className="readme-heading">Technologies and Tools</h2>
              <div className="readme-tools">
                {technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
