import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import { getProfile } from "../services/api";

function Home() {
  const [profile, setProfile] = useState(null);

  async function handleDownloadCv() {
    try {
      const response = await fetch("/Sanjay-BG-Resume.txt");
      const resumeText = await response.text();
      const lines = resumeText.split(/\r?\n/).map((line) => line.trim());

      const pdf = new jsPDF({
        unit: "pt",
        format: "a4"
      });

      const margin = 48;
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const contentWidth = pageWidth - margin * 2;
      const bottomLimit = pageHeight - margin;
      const headerSeparator = 26;
      let y = margin;

      function ensureSpace(requiredHeight) {
        if (y + requiredHeight > bottomLimit) {
          pdf.addPage();
          y = margin;
        }
      }

      function addWrappedText(text, opts = {}) {
        const {
          font = "helvetica",
          style = "normal",
          size = 10.5,
          lineHeight = 14,
          indent = 0,
          bullet = false,
          gapAfter = 2
        } = opts;

        pdf.setFont(font, style);
        pdf.setFontSize(size);
        const bulletPrefix = bullet ? "- " : "";
        const availableWidth = contentWidth - indent - (bullet ? 10 : 0);
        const wrapped = pdf.splitTextToSize(`${bulletPrefix}${text}`, availableWidth);
        ensureSpace(wrapped.length * lineHeight + gapAfter);

        wrapped.forEach((line) => {
          pdf.text(line, margin + indent, y);
          y += lineHeight;
        });

        y += gapAfter;
      }

      function addSectionHeading(title) {
        ensureSpace(headerSeparator);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(11.5);
        pdf.text(title, margin, y);
        y += 8;
        pdf.setDrawColor(165, 165, 165);
        pdf.setLineWidth(0.7);
        pdf.line(margin, y, pageWidth - margin, y);
        y += 14;
      }

      const firstNonEmpty = lines.find((line) => line.length > 0) || "SANJAY B G";
      const summaryIndex = lines.findIndex((line) => line === "PROFESSIONAL SUMMARY");
      const contactLines =
        summaryIndex > 1 ? lines.slice(1, summaryIndex).filter((line) => line.length > 0) : [];

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(17);
      pdf.text(firstNonEmpty, pageWidth / 2, y, { align: "center" });
      y += 18;

      if (contactLines.length) {
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(10.3);
        const contactLine = contactLines.join("  |  ");
        const wrappedContact = pdf.splitTextToSize(contactLine, contentWidth);

        wrappedContact.forEach((line) => {
          ensureSpace(13);
          pdf.text(line, pageWidth / 2, y, { align: "center" });
          y += 13;
        });
      }

      y += 8;

      const sectionNames = [
        "PROFESSIONAL SUMMARY",
        "TECHNICAL SKILLS",
        "PROFESSIONAL EXPERIENCE",
        "PROJECTS",
        "EDUCATION",
        "ADDITIONAL INFORMATION"
      ];

      const sectionRanges = [];

      sectionNames.forEach((sectionName, index) => {
        const start = lines.findIndex((line) => line === sectionName);
        if (start === -1) {
          return;
        }

        let end = lines.length;
        for (let i = index + 1; i < sectionNames.length; i += 1) {
          const next = lines.findIndex((line) => line === sectionNames[i]);
          if (next !== -1) {
            end = next;
            break;
          }
        }

        sectionRanges.push({
          name: sectionName,
          content: lines.slice(start + 1, end).filter((line) => line.length > 0)
        });
      });

      sectionRanges.forEach((section) => {
        addSectionHeading(section.name);

        if (section.name === "PROFESSIONAL SUMMARY") {
          addWrappedText(section.content.join(" "), { size: 10.5, lineHeight: 14, gapAfter: 4 });
          return;
        }

        if (section.name === "TECHNICAL SKILLS") {
          section.content.forEach((line) => addWrappedText(line, { size: 10.5, lineHeight: 14, gapAfter: 1 }));
          return;
        }

        if (section.name === "PROFESSIONAL EXPERIENCE") {
          section.content.forEach((line) => {
            if (line.startsWith("- ")) {
              addWrappedText(line.slice(2), { bullet: true, indent: 8, lineHeight: 14, gapAfter: 1 });
            } else if (line.includes("Jul") || line.includes("Jan") || line.includes("Feb") || line.includes("202")) {
              addWrappedText(line, { style: "italic", size: 10.2, lineHeight: 13, gapAfter: 1 });
            } else if (line.includes("Graduate Trainee") || line.includes("Manoj Cargo")) {
              addWrappedText(line, { style: "bold", size: 10.7, lineHeight: 14, gapAfter: 1 });
            } else {
              addWrappedText(line, { size: 10.5, lineHeight: 14, gapAfter: 1 });
            }
          });
          return;
        }

        if (section.name === "PROJECTS") {
          section.content.forEach((line) => {
            if (line.startsWith("Tools:")) {
              addWrappedText(line, { style: "italic", size: 10.2, lineHeight: 13, indent: 6, gapAfter: 1 });
            } else if (line.startsWith("- ")) {
              addWrappedText(line.slice(2), { bullet: true, indent: 8, lineHeight: 14, gapAfter: 1 });
            } else {
              const isProjectTitle = !line.includes(":") && !line.startsWith("-");
              addWrappedText(line, {
                style: isProjectTitle ? "bold" : "normal",
                size: isProjectTitle ? 10.7 : 10.5,
                lineHeight: 14,
                gapAfter: 1
              });
            }
          });
          return;
        }

        section.content.forEach((line) => addWrappedText(line, { size: 10.5, lineHeight: 14, gapAfter: 1 }));
      });

      pdf.save("Sanjay-BG-Resume.pdf");
    } catch (error) {
      alert("Unable to generate PDF right now. Please try again.");
    }
  }

  useEffect(() => {
    async function loadProfile() {
      const data = await getProfile();
      setProfile(data);
    }

    loadProfile();
  }, []);

  if (!profile) {
    return (
      <div className="page-content">
        <div className="loading-state">
          <div className="spinner" />
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="page-content">
        <section className="hero-section surface-card reveal-on-scroll">
          <div className="hero-layout">
            <div className="hero-content">
              <span className="section-kicker">Data Portfolio</span>
              <h1 className="hero-title">{profile.name}</h1>
              <h2 className="hero-subtitle">{profile.headline}</h2>

              <div className="profile-photo-card mobile-photo-card">
                <img src="/profile-photo.jpeg" alt="SANJAY B G profile" className="profile-photo" />
              </div>

              <p className="hero-description">{profile.subheadline}</p>

              <p className="hero-description">{profile.shortIntro}</p>

              <div className="hero-meta">
                <span className="meta-pill">Location: {profile.location}</span>
                <span className="meta-pill">Open to opportunities</span>
                <span className="meta-pill">Analytics + BI + SQL</span>
              </div>

              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                  View Projects
                </Link>
                <button type="button" className="btn btn-secondary" onClick={handleDownloadCv}>
                  Download CV
                </button>
              </div>
            </div>

            <aside className="hero-side">
              <div className="profile-photo-card desktop-photo-card">
                <img src="/profile-photo.jpeg" alt="SANJAY B G profile" className="profile-photo" />
              </div>

              <div className="hero-spotlight">
                <h3>Current Focus</h3>
                <ul>
                  <li>Dashboard design for operations intelligence</li>
                  <li>SQL-based performance analytics</li>
                  <li>Data modeling for scalable reporting</li>
                </ul>
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <p className="hero-stat-value">6 Months</p>
                  <p className="hero-stat-label">Professional Experience</p>
                </div>
                <div className="hero-stat">
                  <p className="hero-stat-value">9</p>
                  <p className="hero-stat-label">Core Skills</p>
                </div>
                <div className="hero-stat">
                  <p className="hero-stat-value">100%</p>
                  <p className="hero-stat-label">Delivery Focus</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="reveal-on-scroll">
          <div className="section-head">
            <span className="section-kicker">Core Strengths</span>
            <h2 className="section-title">Featured Expertise</h2>
            <p className="section-subtitle">
              End-to-end analytics work that translates operational data into measurable business decisions.
            </p>
          </div>

          <div className="expertise-grid">
            <article className="expertise-card surface-card reveal-on-scroll">
              <h3>Data Analytics</h3>
              <p>Build structured analyses to uncover trends, bottlenecks, and opportunities from complex datasets.</p>
            </article>

            <article className="expertise-card surface-card reveal-on-scroll">
              <h3>Data Visualization</h3>
              <p>Design clear dashboards in Power BI and Tableau to support faster and better decisions.</p>
            </article>

            <article className="expertise-card surface-card reveal-on-scroll">
              <h3>Data Engineering</h3>
              <p>Create dependable ETL pipelines and data models that power consistent reporting layers.</p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
