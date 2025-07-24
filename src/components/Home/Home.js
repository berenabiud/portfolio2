"use client"

import { useEffect, useState } from "react"
import styles from "./Home.module.css"

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className={styles.homeSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left side - Text content */}
          <div className={`${styles.textContent} ${isVisible ? styles.fadeInLeft : ""}`}>
            <div className={styles.greeting}>
              <span className={styles.greetingText}>Hello, I'm</span>
              <div className={styles.greetingLine}></div>
            </div>

            <h1 className={styles.mainTitle}>
              <span className={styles.titleLine}>
                I'M <span className={styles.highlight}>BEREN</span>
              </span>
              <span className={styles.titleLine}>
                ABIUD<span className={styles.dot}>.</span>
              </span>
            </h1>

            <p className={styles.subtitle}>
              SOFTWARE DEVELOPER
              <span className={styles.subtitleGlow}></span>
            </p>

            <div className={styles.description}>
              <p>
                Passionate about creating exceptional digital experiences through innovative design and cutting-edge
                technology.
              </p>
            </div>

            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>
                <span>View My Work</span>
                <div className={styles.btnGlow}></div>
              </button>
              <button className={styles.secondaryBtn}>
                <span>Get In Touch</span>
              </button>
            </div>

            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <span>LinkedIn</span>
              </a>
              <a href="#" className={styles.socialLink}>
                <span>GitHub</span>
              </a>
              <a href="#" className={styles.socialLink}>
                <span>Dribbble</span>
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className={`${styles.imageContent} ${isVisible ? styles.fadeInRight : ""}`}>
            <div className={styles.imageContainer}>
              <div className={styles.imageFrame}>
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt=""
                  className={styles.profileImage}
                />
                <div className={styles.imageOverlay}></div>
                <div className={styles.imageBorder}></div>
              </div>

              {/* Floating elements around image */}
              <div className={styles.floatingElements}>
                <div className={styles.floatingElement1}></div>
                <div className={styles.floatingElement2}></div>
                <div className={styles.floatingElement3}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className={styles.bgDecorations}>
          <div className={styles.bgGrid}></div>
          <div className={styles.bgGradient1}></div>
          <div className={styles.bgGradient2}></div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollLine}></div>
          <span className={styles.scrollText}>Scroll Down</span>
        </div>
      </div>
    </section>
  )
}

export default Home
