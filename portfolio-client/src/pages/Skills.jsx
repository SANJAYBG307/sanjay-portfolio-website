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
        )}
      </section>
    </div>
  );
}

export default Skills;
