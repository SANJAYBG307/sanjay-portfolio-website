import { useEffect, useState } from "react";
import { getProfile } from "../services/api";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSkills() {
      try {
        const data = await getProfile();
        setSkills(data.skills || []);
      } finally {
        setLoading(false);
      }
    }

    loadSkills();
  }, []);

  const groupedSkills = {
    "Programming and Databases": skills.filter((skill) =>
      ["Python", "SQL", "MySQL"].some((token) => skill.includes(token))
    ),
    "Business Intelligence": skills.filter((skill) =>
      ["Power BI", "Tableau", "Excel"].some((token) => skill.includes(token))
    ),
    "Data Engineering": skills.filter((skill) =>
      ["ETL", "Modeling", "Warehousing"].some((token) => skill.includes(token))
    )
  };

  return (
    <div className="page-content">
      <section>
        <div className="section-head">
          <span className="section-kicker">Capability Map</span>
          <h1 className="section-title">Technical Skills</h1>
          <p className="section-subtitle">
            A focused stack for analytics engineering, business intelligence, and operational reporting.
          </p>
        </div>

        {loading ? (
          <div className="loading-state">
            <div className="spinner" />
          </div>
        ) : (
          <div className="skills-wrapper">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <article key={category} className="skill-section surface-card">
                <h2 className="skill-section-title">{category}</h2>
                <div className="skills-grid">
                  {categorySkills.map((skill) => (
                    <div key={skill} className="skill-badge">
                      <p className="skill-name">{skill}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}

            <section className="surface-card skill-section">
              <h2 className="skill-section-title">Proficiency Overview</h2>
              <div className="metrics-strip">
                <article className="metric-card">
                  <p className="metric-value">3+</p>
                  <p className="metric-label">Years in Analytics Journey</p>
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
