import styles from '../styles/Hero.module.css'
import profileImg from '../assets/profile.jpg'

function Hero() {
  return (
    <section className={styles.hero} id="home">

      <div className={styles.imageWrapper}>
        <img src={profileImg} alt="Adeel Sultani" className={styles.profileImg} />
      </div>

      <div className={styles.textContent}>
        <p className={styles.greeting}>👋 Hello, I'm</p>
        <h1 className={styles.name}>Adeel Sultani</h1>
        <h2 className={styles.role}>Software Developer</h2>
        <p className={styles.description}>
         I am a Software Developer focused on building modern, scalable, and high-performance applications. 
         I specialize in Flutter for developing seamless mobile applications and .NET for building robust backend systems, 
         with strong experience in SQL and Firebase for efficient data management.
          I have hands-on expertise in multiple programming languages including C++, Java, and C#, along with a solid foundation in Data Structures and Algorithms using Java.
          I focus on writing clean, maintainable code, designing user-friendly interfaces, and developing efficient solutions that deliver real-world impact.
        </p>
        <div className={styles.buttons}>
          <a href="#projects" className={styles.btnPrimary}>View My Work</a>
          <a href="#contact" className={styles.btnSecondary}>Contact Me</a>
        </div>
      </div>

    </section>
  )
}

export default Hero