import styles from "./ProjectsStyles.module.css"
import viber from "../../assets/bitandbyte.png"
import ProjectCard from "../../common/ProjectCard"
import freshBurger from "../../assets/employee.png"
import hipsster from "../../assets/organ.png"
import fitLift from "../../assets/advance auth.png"
function Projects() {
  return (
    <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
      <ProjectCard
        src={viber}
        link="https://github.com/atulshivaan/Bit-Byte"
        h3="Bit&Byte"
        p="Chat Application"
      />
      <ProjectCard
        src={freshBurger}
        link="https://github.com/atulshivaan/NoteX"
        h3="Notex"
        p="Notex Employee Management System"
      />
      <ProjectCard
        src={hipsster}
        link="https://github.com/atulshivaan/organ-donation-system"
        h3="ODS"
        p="Organ-donation-system"
      />
      <ProjectCard
        src={fitLift}
        link="https://github.com/atulshivaan/Advance-auth"
        h3="Advance Auth"
        p="Modern authentication system"
      />
    </div>
  </section>
  )
}

export default Projects
