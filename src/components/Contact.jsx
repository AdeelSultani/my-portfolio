import styles from '../styles/Contact.module.css'

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2 className="reveal">Contact Me</h2>
      <p className={`${styles.subtitle} reveal`}>
        Have a project in mind or want to connect? Feel free to reach out!
      </p>
      <div className={styles.contactGrid}>
        <div className={`${styles.info} reveal-left`}>

          <a href="mailto:adeelsultani68@gmail.com" className={styles.infoItem}>
            <span className={styles.icon}>📧</span>
            <div>
              <strong>Email</strong>
              <p>adeelsultani68@gmail.com</p>
            </div>
          </a>

          <a href="tel:03029334967" className={styles.infoItem}>
            <span className={styles.icon}>📞</span>
            <div>
              <strong>Contact Number</strong>
              <p>03029334967</p>
            </div>
          </a>

          <div className={styles.infoItem}>
            <span className={styles.icon}>📍</span>
            <div>
              <strong>Location</strong>
              <p>Rawalpindi, Pakistan</p>
            </div>
          </div>

          <a href="https://www.linkedin.com/in/adeel-sultani-b7996b31b/" target="_blank" rel="noreferrer" className={styles.infoItem}>
            <span className={styles.icon}>💼</span>
            <div>
              <strong>LinkedIn</strong>
              <p>adeel-sultani</p>
            </div>
          </a>

          <a href="https://github.com/AdeelSultani" target="_blank" rel="noreferrer" className={styles.infoItem}>
            <span className={styles.icon}>🐙</span>
            <div>
              <strong>GitHub</strong>
              <p>AdeelSultani</p>
            </div>
          </a>

        </div>
        <form
          className={`${styles.form} reveal-right`}
          onSubmit={(e) => {
            e.preventDefault()
            alert('Message sent!')
          }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message ✉️</button>
        </form>
      </div>
    </section>
  )
}

export default Contact