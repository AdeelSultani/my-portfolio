import { useState } from 'react'
import styles from '../styles/Projects.module.css'
import projects from '../data/projects'

function Projects() {
  const [modal, setModal] = useState(null)
  const [imgIndex, setImgIndex] = useState(0)

  const openModal = (project) => {
    setModal(project)
    setImgIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModal(null)
    document.body.style.overflow = 'auto'
  }

  const prevImg = () => {
    setImgIndex(i =>
      i === 0 ? modal.screenshots.length - 1 : i - 1
    )
  }

  const nextImg = () => {
    setImgIndex(i =>
      i === modal.screenshots.length - 1 ? 0 : i + 1
    )
  }

  return (
    <section className={styles.projects} id="projects">
      <h2>My Projects</h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <img src={project.image} alt={project.title} />

            <div className={styles.cardBody}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.links}>
                <button
                  className={styles.demoBtn}
                  onClick={() => openModal(project)}
                >
                  🖼 Live Demo
                </button>

                {/* FIXED LINK */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.githubLink}
                >
                  💻 GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modal && (
        <div className={styles.overlay} onClick={closeModal}>
          <div
            className={styles.modalBox}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h3>{modal.title}</h3>
              <button className={styles.closeBtn} onClick={closeModal}>
                ✕
              </button>
            </div>

            <div className={styles.imgContainer}>
              <img
                src={modal.screenshots[imgIndex]}
                alt="screenshot"
                className={styles.modalImg}
              />

              {modal.screenshots.length > 1 && (
                <>
                  <button className={styles.arrowLeft} onClick={prevImg}>
                    ‹
                  </button>
                  <button className={styles.arrowRight} onClick={nextImg}>
                    ›
                  </button>
                </>
              )}
            </div>

            <div className={styles.dots}>
              {modal.screenshots.map((_, i) => (
                <span
                  key={i}
                  className={`${styles.dot} ${
                    i === imgIndex ? styles.activeDot : ''
                  }`}
                  onClick={() => setImgIndex(i)}
                />
              ))}
            </div>

            <p className={styles.counter}>
              {imgIndex + 1} / {modal.screenshots.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects