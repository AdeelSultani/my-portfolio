import styles from '../styles/About.module.css'

function About() {
  return (
    <section className={styles.about} id="about">
      <h2>About Me</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            I completed my Bachelor's in Software Engineering from Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi.
            I am a passionate Software Developer based in Pakistan, specializing in Flutter for building modern mobile applications. I love creating apps that are fast, visually appealing, and easy to use. 
I always try to learn something new and continuously explore modern technologies to improve my skills. Recently, I have also started exploring AI integration in applications to build smarter and more efficient solutions.
 I am always looking for opportunities to learn, grow, and build impactful applications that create real value.
          </p>
          <p>
            When I am not coding, I enjoy exploring new technologies and
            contributing to open source projects. I am always looking for
            opportunities to learn and grow as a developer.
          </p>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <span className={styles.label}>Name:</span>
              <span>Adeel Sultani</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Location:</span>
              <span>Rawalpindi, Pakistan</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Email:</span>
              <span>adeelsultani68@gmail.com</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Available:</span>
              <span>Open to Work</span>
            </div>
          </div>
          <a href="/resume.pdf" download className={styles.resumeBtn}>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default About