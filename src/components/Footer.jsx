import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Designed & Built by <span>Adeel Sultani</span></p>
      <p className={styles.year}>© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  )
}

export default Footer