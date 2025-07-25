import styles from "./Portfolio.module.css";
import projects from "../../data/projects"; // Adjust the path if needed

export default function Component() {
  return (
    <div className={styles["portfolio-container"]}>
      {/* Header Section */}
      <div className={styles["header-section"]}>
        <h1 className={styles["main-title"]}>MY PORTFOLIO</h1>
        <p className={styles["subtitle"]}>MY LATEST WORK</p>
      </div>

      {/* Projects Grid */}
      <div className={styles["projects-grid"]}>
        {projects.map((project) => (
          <div key={project.id} className={styles["project-card"]}>
            {/* Image */}
            <div className={styles["project-image-container"]}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className={styles["project-image"]}
              />
              <div className={styles["project-overlay"]}></div>
            </div>

            {/* Title */}
            <h3 className={styles["project-title"]}>{project.title}</h3>

            {/* Description */}
            <p className={styles["project-description"]}>{project.description}</p>

            {/* Tags */}
            <div className={styles["project-tags"]}>
              {project.tags.map((tag, index) => (
                <span key={index} className={styles["tag"]}>{tag}</span>
              ))}
            </div>

            {/* Links */}
            <div className={styles["project-links"]}>
              {project.externalLink && (
                <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
              {project.repoLink && (
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
