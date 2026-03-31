import { useEffect, useState } from "react";
import { getProfile } from "../services/api";

function Skills() {
  const [technicalSkills, setTechnicalSkills] = useState({});
  const [legacySkills, setLegacySkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSkills() {
      try {
        const data = await getProfile();
        setTechnicalSkills(data.technicalSkills || {});
        setLegacySkills(data.skills || []);
      } finally {
        setLoading(false);
      }
    }

    loadSkills();
  }, []);

  const groupedSkills = Object.entries(technicalSkills).reduce((acc, [category, entries]) => {
    if (Array.isArray(entries) && entries.length) {
      acc[category] = entries;
    }
    return acc;
  }, {});

  const fallbackGroupedSkills = {
    "Data Analytics": legacySkills.filter((skill) =>
      ["Python", "SQL", "MySQL", "Pandas", "NumPy", "Excel"].some((token) => skill.includes(token))
    ),
    "Visualization & BI": legacySkills.filter((skill) => ["Power BI", "Tableau", "Dashboard"].some((token) => skill.includes(token))),
    "Data Engineering Foundations": legacySkills.filter((skill) =>
      ["ETL", "Modeling", "Warehousing"].some((token) => skill.includes(token))
    ),
    "Tools & Workflow": legacySkills.filter((skill) =>
      ["Git", "GitHub", "Linux", "Docker"].some((token) => skill.includes(token))
    )
  };

  const resolvedSkills = Object.keys(groupedSkills).length ? groupedSkills : fallbackGroupedSkills;

  const categoryMeta = {
    "Data Analytics": {
      icon: "EDA",
      note: "SQL, Python, and data analysis expertise"
    },
    "Visualization & BI": {
      icon: "BI",
      note: "Dashboarding and storytelling for insights"
    },
    "Data Engineering Foundations": {
      icon: "ETL",
      note: "Data pipelines and warehousing"
    },
    "Tools & Workflow": {
      icon: "Tool",
      note: "Development and deployment tooling"
    }
  };

  const proficiency = {
    "Python (Pandas, NumPy)": { label: "Working", value: 78 },
    SQL: { label: "Working", value: 82 },
    "Power BI": { label: "Working", value: 80 },
    Tableau: { label: "Working", value: 77 },
    ETL: { label: "Hands-on", value: 74 },
    "Data Modeling": { label: "Hands-on", value: 72 },
    Docker: { label: "Working", value: 68 }
  };

  return (
    <div className="page-content">
      <section>
        <div className="section-head reveal-on-scroll">
          <span className="section-kicker">Capability Map</span>
          <h1 className="section-title">Technical Skills</h1>
          <p className="section-subtitle">
            Resume-aligned technical stack covering programming, analytics, visualization, and tools.
          </p>
        </div>

        {loading ? (
          <div className="loading-state">
            <div className="spinner" />
          </div>
        ) : (
          <>
            {/* ==== DETAILED SKILLS BY CATEGORY ==== */}
            <section className="technical-skills-section reveal-on-scroll">
              <div className="section-head" style={{ marginBottom: "2rem" }}>
                <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Detailed Technical Skills</h2>
              </div>

              <div className="skills-categories-grid">
                <div className="skill-category surface-card">
                  <h3>🗄️ Databases & SQL</h3>
                  <div className="skill-chips">
                    <span className="skill-chip">SQL</span>
                    <span className="skill-chip">MySQL</span>
                    <span className="skill-chip">CTEs</span>
                    <span className="skill-chip">Window Functions</span>
                    <span className="skill-chip">Subqueries</span>
                    <span className="skill-chip">Joins</span>
                    <span className="skill-chip">Aggregations</span>
                  </div>
                </div>

                <div className="skill-category surface-card">
                  <h3>🐍 Programming & ETL</h3>
                  <div className="skill-chips">
                    <span className="skill-chip">Python</span>
                    <span className="skill-chip">Pandas</span>
                    <span className="skill-chip">NumPy</span>
                    <span className="skill-chip">ETL Pipelines</span>
                    <span className="skill-chip">Data Cleaning</span>
                    <span className="skill-chip">Data Transformation</span>
                    <span className="skill-chip">Scripting</span>
                  </div>
                </div>

                <div className="skill-category surface-card">
                  <h3>📊 BI & Visualization</h3>
                  <div className="skill-chips">
                    <span className="skill-chip">Power BI</span>
                    <span className="skill-chip">Tableau</span>
                    <span className="skill-chip">DAX</span>
                    <span className="skill-chip">Power Query</span>
                    <span className="skill-chip">Dashboards</span>
                    <span className="skill-chip">KPI Tracking</span>
                    <span className="skill-chip">Report Design</span>
                  </div>
                </div>

                <div className="skill-category surface-card">
                  <h3>🛠️ Tools & Platforms</h3>
                  <div className="skill-chips">
                    <span className="skill-chip">Excel</span>
                    <span className="skill-chip">XLOOKUP</span>
                    <span className="skill-chip">Pivot Tables</span>
                    <span className="skill-chip">Git</span>
                    <span className="skill-chip">GitHub</span>
                    <span className="skill-chip">Data Modeling</span>
                    <span className="skill-chip">Dimensional Modeling</span>
                    <span className="skill-chip">Star Schema</span>
                  </div>
                </div>
              </div>
            </section>

            {/* ==== PROFICIENCY LEVELS ==== */}
            <section className="surface-card skill-section reveal-on-scroll" style={{ marginTop: "2rem" }}>
              <h2 className="skill-section-title">Proficiency Matrix</h2>
              <div className="metrics-strip" style={{ marginTop: "1.5rem" }}>
                <article className="metric-card">
                  <p className="metric-value">6 Months</p>
                  <p className="metric-label">Professional Experience</p>
                </article>
                <article className="metric-card">
                  <p className="metric-value">15+</p>
                  <p className="metric-label">Technical Skills</p>
                </article>
                <article className="metric-card">
                  <p className="metric-value">100%</p>
                  <p className="metric-label">Learning Drive</p>
                </article>
              </div>
            </section>

            {/* ==== EXISTING SKILLS FROM API ==== */}
            <section style={{ marginTop: "2.5rem" }}>
              <div className="section-head">
                <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>API Skills Breakdown</h2>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>Detailed breakdown by category from your profile data</p>
              </div>

              <div className="skills-wrapper">
                {Object.entries(resolvedSkills).map(([category, categorySkills]) => {
                  const meta = categoryMeta[category] || { icon: "SK", note: "Core technical capability" };

                  return (
                    <article key={category} className="skill-section surface-card reveal-on-scroll">
                      <div className="skill-section-head">
                        <div className="skill-icon-badge">{meta.icon}</div>
                        <div>
                          <h2 className="skill-section-title">{category}</h2>
                          <p className="skill-section-note">{meta.note}</p>
                        </div>
                      </div>
                      <div className="skills-grid">
                        {categorySkills.map((skill) => (
                          <article key={skill} className="skill-badge">
                            <p className="skill-name">{skill}</p>
                            <div className="skill-meta-row">
                              <span className="skill-level-tag">{proficiency[skill]?.label || "Working"}</span>
                              <span className="skill-percent">{proficiency[skill]?.value || 70}%</span>
                            </div>
                            <div className="skill-meter">
                              <div className="skill-meter-fill" style={{ width: `${proficiency[skill]?.value || 70}%` }} />
                            </div>
                          </article>
                        ))}
                      </div>
                    </article>
                  );
                })}

                <section className="surface-card skill-section reveal-on-scroll">
                  <h2 className="skill-section-title">Proficiency Overview</h2>
                  <div className="metrics-strip">
                    <article className="metric-card">
                      <p className="metric-value">6 Months</p>
                      <p className="metric-label">Professional Experience</p>
                    </article>
                    <article className="metric-card">
                      <p className="metric-value">9</p>
                      <p className="metric-label">Core Tools and Methods</p>
                    </article>
                    <article className="metric-card">
                      <p className="metric-value">24/7</p>
                      <p className="metric-label">Learning Mindset</p>
                    </article>
                  </div>
                </section>
              </div>
            </section>
          </>
        )}
      </section>
    </div>
  );
}

export default Skills;
