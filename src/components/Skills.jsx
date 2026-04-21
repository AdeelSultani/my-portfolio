import styles from '../styles/Skills.module.css'
import skills from '../data/skills'

function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <h2>My Skills</h2>
      <div className={styles.skillsList}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skillItem}>
            <div className={styles.skillHeader}>
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
              <span>{skill.apis}</span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills