import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/logo2.jpg";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import cv from "../../assets/Atul Kumar (5).pdf";
import { useTheme } from "../../coomon/ThemeContext.jsx";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sunIcon : moonIcon;
  const githubIcon = theme === "light" ? githubLight :githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
  
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={heroImg} alt="Hero" className={styles.heroImg} />
        <img
          src={themeIcon}
          alt="Theme Icon"
          className={styles.colorMode}
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Atul Kumar</h1>
        <h2>Software Developer</h2>
        <span>
          <a href="https://github.com/atulshivaan" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/atul-kumar-920641318/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </span>
        <p className={styles.description}>
          I am a software engineer with a passion for web development who is proficient in JavaScript, React, Node.js, and MongoDB.
        </p>
        <a href={cv} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
   
  );
}

export default Hero;
