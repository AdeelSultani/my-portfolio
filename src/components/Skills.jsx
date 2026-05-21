import { useState, useEffect, useRef } from 'react'
import styles from '../styles/Skills.module.css'
import skills from '../data/skills'

function Skills() {
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.skills} id="skills" ref={sectionRef}>
      <h2 className="reveal">My Skills</h2>
      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`${styles.skillItem} reveal stagger-${Math.min(index + 1, 5)}`}
          >
            <div className={styles.skillHeader}>
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: animated ? `${skill.level}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills