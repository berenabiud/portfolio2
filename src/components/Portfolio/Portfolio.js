"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Portfolio.module.css";
import projects from "../../data/projects";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const projectsGridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // First, ensure elements are visible before animating
      gsap.set([titleRef.current, subtitleRef.current, `.${styles["project-card"]}`], {
        opacity: 1
      });

      // Header section animation
      gsap.from([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3
      });

      // Letter spacing animation for main title
      gsap.from(titleRef.current, {
        letterSpacing: "1em",
        duration: 1.8,
        ease: "expo.out",
        delay: 0.5
      });

      // Project cards animation with ScrollTrigger
      gsap.from(`.${styles["project-card"]}`, {
        opacity: 0,
        y: 80,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: projectsGridRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          markers: false // Set to true for debugging
        }
      });

      // Hover animations for project cards
      const cards = gsap.utils.toArray(`.${styles["project-card"]}`);
      cards.forEach(card => {
        const img = card.querySelector(`.${styles["project-image"]}`);
        const links = card.querySelectorAll(`.${styles["project-links"]} a`);
        const tags = card.querySelectorAll(`.${styles["tag"]}`);

        // Image scale animation
        gsap.set(img, { transformOrigin: "center center" });
        const imgAnimation = gsap.to(img, {
          scale: 1.05,
          duration: 0.4,
          ease: "power2.out",
          paused: true
        });

        // Tags animation
        tags.forEach(tag => {
          gsap.set(tag, { opacity: 1 }); // Ensure tags are visible
          gsap.to(tag, {
            scale: 1.1,
            boxShadow: "0 0 12px rgba(251, 191, 36, 0.5)",
            duration: 0.3,
            paused: true
          });
        });

        // Card hover effects
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            duration: 0.4,
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            ease: "power2.out"
          });
          imgAnimation.play();
          
          // Animate tags on hover
          gsap.to(tags, {
            scale: 1.1,
            boxShadow: "0 0 12px rgba(251, 191, 36, 0.5)",
            duration: 0.3,
            stagger: 0.05
          });
          
          // Animate links
          gsap.to(links, {
            y: -3,
            duration: 0.3,
            stagger: 0.1
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: 0.4,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            ease: "power2.out"
          });
          imgAnimation.reverse();
          
          // Reset tags
          gsap.to(tags, {
            scale: 1,
            boxShadow: "none",
            duration: 0.3
          });
          
          // Reset links
          gsap.to(links, {
            y: 0,
            duration: 0.3
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles["portfolio-container"]}>
      {/* Header Section */}
      <div ref={headerRef} className={styles["header-section"]}>
        <h1 ref={titleRef} className={styles["main-title"]}>MY PORTFOLIO</h1>
        <p ref={subtitleRef} className={styles["subtitle"]}>MY LATEST WORK</p>
      </div>

      {/* Projects Grid */}
      <div ref={projectsGridRef} className={styles["projects-grid"]}>
        {projects.map((project) => (
          <div key={project.id} className={styles["project-card"]}>
            {/* Image */}
            <div className={styles["project-image-container"]}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className={styles["project-image"]}
              />
              <div className={styles["project-overlay"]}></div>
            </div>

            {/* Title */}
            <h3 className={styles["project-title"]}>{project.title}</h3>

            {/* Description */}
            <p className={styles["project-description"]}>{project.description}</p>

            {/* Tags */}
            <div className={styles["project-tags"]}>
              {project.tags.map((tag, index) => (
                <span key={index} className={styles["tag"]}>{tag}</span>
              ))}
            </div>

            {/* Links */}
            <div className={styles["project-links"]}>
              {project.externalLink && (
                <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
              {project.repoLink && (
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}