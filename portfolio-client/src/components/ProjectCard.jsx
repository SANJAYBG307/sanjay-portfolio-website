function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tools">
          {project.tools.map((tool, index) => (
            <span key={index} className="tool-badge">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;