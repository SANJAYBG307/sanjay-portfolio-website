function ProjectCard({ project, onOpenDetails }) {
  const highlights = project.highlights || [project.description];

  return (
    <article className="project-card reveal-on-scroll">
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <ul className="project-highlights">
          {highlights.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-tools">
          {project.tools.map((tool, index) => (
            <span key={index} className="tool-badge">
              {tool}
            </span>
          ))}
        </div>
        <button type="button" className="project-link" onClick={() => onOpenDetails(project)}>
          View details
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;