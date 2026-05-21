import { useEffect, useRef } from 'react'
import styles from '../styles/CustomCursor.module.css'

function CustomCursor() {
  const dotRef = useRef(null)
  const circleRef = useRef(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let circleX = 0, circleY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Dot seedha cursor ke saath
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }
    }

    // Circle smoothly follow kare (lag effect)
    const animate = () => {
      circleX += (mouseX - circleX) * 0.12
      circleY += (mouseY - circleY) * 0.12

      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${circleX}px, ${circleY}px)`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    const animId = requestAnimationFrame(animate)

    // Hover pe circle bada ho jaye
    const addHover = () => circleRef.current?.classList.add(styles.hovered)
    const removeHover = () => circleRef.current?.classList.remove(styles.hovered)

    const hoverEls = document.querySelectorAll('a, button, [class*="card"], [class*="logo"]')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animId)
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  return (
    <>
      {/* Chota filled dot — bilkul cursor ke saath */}
      <div ref={dotRef} className={styles.dot} />

      {/* Bada circle — smoothly follow karta hai */}
      <div ref={circleRef} className={styles.circle} />
    </>
  )
}

export default CustomCursor