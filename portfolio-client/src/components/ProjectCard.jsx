function ProjectCard({ project }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        marginBottom: "20px"
      }}
    >
      <h2>{project.title}</h2>

      <p>{project.description}</p>

      <p>
        <strong>Tools:</strong> {project.tools.join(", ")}
      </p>
    </div>
  );
}

export default ProjectCard;