import { Emoji } from "@/components/Emoji";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import Head from 'next/head';

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Storm Supply Predictor",
      subtitle: "at Massachusetts Institute of Technology (MIT)",
      date: "September 2024",
      description: "Website application that automatically preorders groceries if there’s an incoming hurricane. Created in 24 hours at HackMIT 2024.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Clerk", "Convex"],
      image: "/project1.png",
      github: "https://github.com/Sankalpsp21/StormShoppr",
    },
    {
      id: 2,
      title: "Urban Transit Data Analysis",
      subtitle: "at Macaulay Honors College",
      date: "September 2024",
      description: "Developed linear regression analysis on elevators and escalators outages to identify peak outage times. Identified 15 stations with need for new installations based on poverty, outages, & ridership",
      technologies: ["Jupyter Notebook", "ArcGIS", "MTA Open Data"],
      image: "/project2.gif",
      github: "https://docs.google.com/presentation/d/1rDxRDHBnDq2daMMjFTvl9GUdJObQvst37oVPBs8A8LA/edit?usp=sharing",
    },
    {
      id: 3,
      title: "Ramadan Design Case Study",
      subtitle: "at McMaster University",
      date: "March 2024",
      description: "A case study focusing on the design and implementation of a Ramadan charity website application.",
      technologies: ["UI Design", "UX Testing", "Figma"],
      image: "/project3.png",
      github: "https://docs.google.com/presentation/d/1um6LvibkCZqflCI6XryFSeZymtvY_2hvxPpKHmmepk8/edit?usp=sharing",
    },
    {
      id: 4,
      title: "Note Taking Platform for the Hearing Impaired",
      subtitle: "at Harvard University",
      date: "October 2023",
      description: "Featuring real-time voice-to-text transcription. Implemented AI-enhanced tools to modify transcriptions and produce high-quality notes for better accessibility in classrooms for the hearing impaired.",
      technologies: ["TypeScript", "Next.js", "Open AI", "Tailwind CSS", "Convex"],
      image: "/project4.gif",
      github: "https://github.com/annabelenko/minerva",
    }
  ];

  return (
    <>
      <Head>
        <title>Anna Belenko - Software Engineer & Developer</title>
      </Head>
      
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className={styles.heroSection}>
        <Emoji />
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.sectionTitle}>WORK</h2>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.imageContainer}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={styles.projectImage}
                  />
                </div>
                
                <div className={styles.projectInfo}>
                  <div className={styles.projectLeft}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    {project.subtitle && (
                      <h4 className={styles.projectSubtitle}>{project.subtitle}</h4>
                    )}
                    <p className={styles.projectDescription}>{project.description}</p>
                    
                    <div className={styles.technologies}>
                      {project.technologies.map((tech, index) => (
                        <span key={index} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.projectRight}>
                    {project.date && (
                      <p className={styles.projectDate}>{project.date}</p>
                    )}
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${styles.button} ${styles.secondary}`}
                    >
                      {project.id === 2 || project.id === 3 ? "View Slides" : "View Code"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.sectionTitle}>ABOUT</h2>
          </div>
          
          <div className={styles.aboutContent}>
            <div className={styles.headshotContainer}>
              <img 
                src="/headshot.jpeg" 
                alt="Anna Belenko"
                className={styles.headshot}
              />
            </div>
            <div className={styles.aboutInfo}>
              <p>
                Raised by a mother in the costume tailoring industry, I developed a keen eye for design 
                and detail from a young age. Later, I combined my desire for creativity with the intellectual
                challenges of computer science, inspiring me to be a software engineer.
              </p>
              <p>
                I was the product of how technology can change lives. Born with bilateral profound hearing loss, 
                my hearing devices gave me access to the world, and I strive to build solutions that enhance 
                accessibility and user experience for all.
              </p>
              <p>
                In my last year studying computer science at Brooklyn College in New York City, 
                you can find me exploring new technologies, contributing to 
                open-source projects, or working on the next innovative solution that makes a 
                meaningful impact on the Brooklyn College community.
              </p>
              
              <div className={styles.contactMethods}>
                <a href="mailto:annaabelenko@gmail.com" className={styles.contactLink}>
                  annaabelenko@gmail.com
                </a>
                <a href="https://linkedin.com/in/annabelenko" className={styles.contactLink}>
                  LinkedIn
                </a>
                <a href="https://github.com/annabelenko" className={styles.contactLink}>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footerText}>
            Coded with 💛 in 2025 • 
            <a 
              href="https://github.com/annabelenko/personal-website-next" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              Source Code
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}