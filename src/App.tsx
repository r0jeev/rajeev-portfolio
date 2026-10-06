import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaPhone,
  FaLinkedinIn,
  FaWindows,
  FaNetworkWired,
  FaServer,
  FaLaptop,
  FaGears,
  FaShieldHalved,
} from "react-icons/fa6";

import Scene3D from "./Scene3D";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   MAIN APP
========================================================= */

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* HERO ANIMATION */

      gsap.from(".hero-reveal", {
        y: 45,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".hero-3d", {
        x: 80,
        opacity: 0,
        duration: 1.3,
        delay: 0.2,
        ease: "power3.out",
      });

      /* SECTION ANIMATION */

      gsap.utils.toArray<HTMLElement>(".section-reveal").forEach(
        (element) => {
          gsap.from(element, {
            y: 50,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              once: true,
            },
          });
        }
      );

      /* EXPERIENCE CARDS */

      gsap.utils
        .toArray<HTMLElement>(".career-item")
        .forEach((item) => {
          gsap.from(item, {
            x: 45,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          });
        });

      /* SKILLS */

      gsap.utils
        .toArray<HTMLElement>(".service-card")
        .forEach((card, index) => {
          gsap.from(card, {
            y: 35,
            opacity: 0,
            duration: 0.7,
            delay: index * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          });
        });

      /* WORK */

      gsap.utils
        .toArray<HTMLElement>(".work-card")
        .forEach((card, index) => {
          gsap.from(card, {
            y: 40,
            opacity: 0,
            duration: 0.7,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          });
        });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef} className="app">
      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="navbar">
        <a href="#top" className="brand">
          RS
        </a>

        <nav className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#skills">SKILLS</a>
          <a href="#work">WORK</a>
        </nav>

        <a href="#contact" className="nav-contact">
          CONTACT
          <FaArrowUpRightFromSquare />
        </a>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <main id="top">
        <section className="hero">
          <div className="hero-content">
            <div className="hero-available hero-reveal">
              <span />
              AVAILABLE FOR IT OPPORTUNITIES
            </div>

            <h1 className="hero-title hero-reveal">
              <span>RAJEEV</span>
              <span className="outline">SINGH</span>
            </h1>

            <div className="hero-role hero-reveal">
              IT SUPPORT ENGINEER
            </div>

            <p className="hero-description hero-reveal">
              Desktop Support · Windows Administration · Microsoft 365 ·
              Active Directory · Networking
            </p>

            <div className="hero-actions hero-reveal">
              <a href="#work" className="primary-button">
                EXPLORE MY WORK
                <FaArrowUpRightFromSquare />
              </a>

              <a href="#contact" className="text-button">
                GET IN TOUCH
                <FaArrowUpRightFromSquare />
              </a>
            </div>
          </div>

          {/* REAL TIME 3D WORKSTATION */}

          <div className="hero-3d">
            <Scene3D />
          </div>

          {/* TECH LABELS */}

          <div className="hero-tech-label hero-label-one">
            WINDOWS
          </div>

          <div className="hero-tech-label hero-label-two">
            ACTIVE DIRECTORY
          </div>

          <div className="hero-tech-label hero-label-three">
            TCP / IP
          </div>

          {/* HERO FOOTER */}

          <div className="hero-footer">
            <span>01 — 05</span>

            <span className="hero-scroll">
              SCROLL
              <i />
            </span>

            <span>NAVI MUMBAI / INDIA</span>
          </div>
        </section>

        {/* =====================================================
            TICKER
        ===================================================== */}

        <div className="ticker">
          <div className="ticker-track">
            <span>IT SUPPORT</span>
            <b>✦</b>
            <span>WINDOWS ADMINISTRATION</span>
            <b>✦</b>
            <span>ACTIVE DIRECTORY</span>
            <b>✦</b>
            <span>MICROSOFT 365</span>
            <b>✦</b>
            <span>NETWORK TROUBLESHOOTING</span>
            <b>✦</b>
            <span>IT INFRASTRUCTURE</span>
            <b>✦</b>

            <span>IT SUPPORT</span>
            <b>✦</b>
            <span>WINDOWS ADMINISTRATION</span>
            <b>✦</b>
            <span>ACTIVE DIRECTORY</span>
            <b>✦</b>
            <span>MICROSOFT 365</span>
            <b>✦</b>
          </div>
        </div>

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section id="about" className="section about-section">
          <div className="section-number">01</div>

          <div className="section-reveal">
            <div className="section-label">
              ABOUT ME
            </div>

            <h2 className="section-title">
              I KEEP
              <br />
              <span>SYSTEMS</span>
              <br />
              RUNNING.
            </h2>
          </div>

          <div className="about-content section-reveal">
            <p className="about-lead">
              I am an IT Support professional focused on solving
              technical problems, supporting users, troubleshooting
              systems, and keeping IT environments reliable.
            </p>

            <p>
              My experience covers desktop support, Windows
              administration, Microsoft 365, Active Directory,
              hardware and software troubleshooting, networking,
              and day-to-day IT infrastructure support.
            </p>

            <div className="about-grid">
              <InfoCard
                icon={<FaServer />}
                number="01"
                title="IT"
                subtitle="SUPPORT"
                text="User support, troubleshooting and day-to-day IT operations."
              />

              <InfoCard
                icon={<FaWindows />}
                number="02"
                title="WINDOWS"
                subtitle="ADMINISTRATION"
                text="Windows installation, configuration, troubleshooting and support."
              />

              <InfoCard
                icon={<FaNetworkWired />}
                number="03"
                title="NETWORK"
                subtitle="TROUBLESHOOTING"
                text="TCP/IP, connectivity, DNS, DHCP and common network issues."
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            EXPERIENCE
        ===================================================== */}

        <section
          id="experience"
          className="section experience-section"
        >
          <div className="section-number">02</div>

          <div className="section-reveal">
            <div className="section-label">
              EXPERIENCE
            </div>

            <h2 className="section-title">
              THE
              <br />
              <span>JOURNEY.</span>
            </h2>
          </div>

          <Experience />
        </section>

        {/* =====================================================
            SKILLS
        ===================================================== */}

        <section id="skills" className="section skills-section">
          <div className="section-number">03</div>

          <div className="section-reveal">
            <div className="section-label">
              SKILLS & TOOLS
            </div>

            <h2 className="section-title">
              TOOLS
              <br />
              THAT
              <br />
              <span>MATTER.</span>
            </h2>
          </div>

          <div className="services-grid">
            <Service
              number="01"
              icon={<FaWindows />}
              title="WINDOWS"
              text="Windows troubleshooting, installation, configuration and user support."
            />

            <Service
              number="02"
              icon={<FaShieldHalved />}
              title="ACTIVE DIRECTORY"
              text="User management, groups, permissions and basic Windows domain administration."
            />

            <Service
              number="03"
              icon={<FaServer />}
              title="MICROSOFT 365"
              text="Microsoft 365 user support, application troubleshooting and account assistance."
            />

            <Service
              number="04"
              icon={<FaNetworkWired />}
              title="NETWORKING"
              text="TCP/IP troubleshooting, connectivity, basic network configuration and diagnosis."
            />

            <Service
              number="05"
              icon={<FaLaptop />}
              title="HARDWARE"
              text="Desktop hardware troubleshooting, peripherals, installation and maintenance."
            />

            <Service
              number="06"
              icon={<FaGears />}
              title="IT INFRASTRUCTURE"
              text="System setup, user support, software deployment and day-to-day IT operations."
            />
          </div>
        </section>

        {/* =====================================================
            WORK / PROJECTS
        ===================================================== */}

        <section id="work" className="section work-section">
          <div className="section-number">04</div>

          <div className="section-reveal">
            <div className="section-label">
              SELECTED WORK
            </div>

            <h2 className="section-title">
              BUILD.
              <br />
              TEST.
              <br />
              <span>LEARN.</span>
            </h2>
          </div>

          <div className="work-grid">
            <WorkCard
              number="01"
              category="WINDOWS • ACTIVE DIRECTORY"
              title="ACTIVE DIRECTORY LAB"
              description="Personal lab environment for Windows Server, Active Directory, users, groups, permissions and basic domain administration."
              tags={[
                "Windows Server",
                "Active Directory",
                "GPO",
              ]}
            />

            <WorkCard
              number="02"
              category="NETWORKING"
              title="NETWORK TROUBLESHOOTING LAB"
              description="Practical troubleshooting scenarios covering TCP/IP, IP addressing, DNS, DHCP and common connectivity problems."
              tags={[
                "TCP/IP",
                "DNS",
                "DHCP",
              ]}
            />

            <WorkCard
              number="03"
              category="WINDOWS • IT SUPPORT"
              title="DESKTOP SUPPORT PRACTICE LAB"
              description="Practical Windows support scenarios including system setup, software troubleshooting, user issues and hardware checks."
              tags={[
                "Windows",
                "Hardware",
                "Troubleshooting",
              ]}
            />

            <WorkCard
              number="04"
              category="IT AUTOMATION"
              title="IT SUPPORT AUTOMATION"
              description="Small scripts and tools for repetitive IT support tasks, system checks, troubleshooting and day-to-day administration."
              tags={[
                "PowerShell",
                "Windows",
                "Automation",
              ]}
            />
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section
          id="contact"
          className="section contact-section"
        >
          <div className="section-number">05</div>

          <div className="contact-heading section-reveal">
            <div className="section-label">
              GET IN TOUCH
            </div>

            <h2 className="section-title">
              LET'S
              <br />
              <span>CONNECT.</span>
            </h2>

            <p>
              Looking for an IT Support or System Administration
              opportunity? Feel free to connect with me for
              professional opportunities, technical discussions,
              or collaboration.
            </p>
          </div>

          <div className="contact-grid">
            <a
              href="mailto:rajivssingh810@gmail.com"
              className="contact-card"
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <small>EMAIL</small>
                <strong>
                  rajivssingh810@gmail.com
                </strong>
              </div>

              <FaArrowUpRightFromSquare />
            </a>

            <a
              href="tel:8108310710"
              className="contact-card"
            >
              <div className="contact-icon">
                <FaPhone />
              </div>

              <div>
                <small>PHONE</small>
                <strong>+91 81083 10710</strong>
              </div>

              <FaArrowUpRightFromSquare />
            </a>

            <a
              href="https://www.linkedin.com/in/rajeev-singh-06915137a"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">
                <FaLinkedinIn />
              </div>

              <div>
                <small>LINKEDIN</small>
                <strong>
                  /in/rajeev-singh-06915137a
                </strong>
              </div>

              <FaArrowUpRightFromSquare />
            </a>

            <div className="contact-card contact-availability">
              <div className="contact-icon">
                <span className="online-dot" />
              </div>

              <div>
                <small>STATUS</small>
                <strong>
                  OPEN FOR OPPORTUNITIES
                </strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">
        <div>
          © {new Date().getFullYear()} RAJEEV SINGH
        </div>

        <div>
          IT SUPPORT • SYSTEM ADMINISTRATION
        </div>

        <a href="#top">
          BACK TO TOP ↑
        </a>
      </footer>
    </div>
  );
}

/* =========================================================
   EXPERIENCE COMPONENT
========================================================= */

function Experience() {
  const experiences = [
    {
      year: "2025 — PRESENT",
      company: "MEHRWERT INFOTECH PVT LTD",
      role: "IT SUPPORT EXECUTIVE",
      description:
        "Desktop Support • Windows Administration • Microsoft 365 • Active Directory • Networking",
      accent: "#8B5CF6",
      current: true,
    },
    {
      year: "2024 — 2025",
      company: "BP MARINE ACADEMY",
      role: "DESKTOP SUPPORT ENGINEER",
      description:
        "Desktop Support • Hardware & Software • System Troubleshooting • User Support",
      accent: "#67E8F9",
      current: false,
    },
    {
      year: "2019",
      company: "INFIYUG TECHNOLOGIES",
      role: "FRONTEND DEVELOPER INTERN",
      description:
        "Frontend Development • Web Technologies • User Interfaces • Web Support",
      accent: "#FF6B8A",
      current: false,
    },
  ];

  return (
    <div className="career-journey">
      {/* HEADER */}

      <div className="career-header">
        <div>
          <div className="career-label">
            <span className="career-label-dot" />
            CAREER JOURNEY
          </div>

          <h3>
            Companies I've{" "}
            <span>Worked With</span>
          </h3>
        </div>

        <p>
          A journey of learning, problem-solving and growing
          in IT support and infrastructure.
        </p>
      </div>

      {/* TIMELINE */}

      <div className="career-timeline">
        {experiences.map((item) => (
          <div
            className="career-item"
            key={item.company}
            style={
              {
                "--accent": item.accent,
              } as React.CSSProperties
            }
          >
            {/* YEAR */}

            <div className="career-year">
              {item.year}
            </div>

            {/* TIMELINE DOT */}

            <div className="career-marker">
              <span />
            </div>

            {/* COMPANY */}

            <div className="career-card">
              <div className="career-card-top">
                <div>
                  <div className="career-company">
                    {item.company}
                  </div>

                  <div className="career-role">
                    {item.role}
                  </div>
                </div>

                {item.current && (
                  <div className="career-current">
                    <span />
                    CURRENT
                  </div>
                )}
              </div>

              <div className="career-divider" />

              <div className="career-description">
                <span className="career-description-icon">
                  ✦
                </span>

                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   ABOUT INFO CARD
========================================================= */

function InfoCard({
  icon,
  number,
  title,
  subtitle,
  text,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  subtitle: string;
  text: string;
}) {
  return (
    <div className="info-card">
      <div className="info-card-top">
        <span>{number}</span>

        <div className="info-icon">
          {icon}
        </div>
      </div>

      <h4>
        {title}
        <br />
        <span>{subtitle}</span>
      </h4>

      <p>{text}</p>
    </div>
  );
}

/* =========================================================
   SKILL CARD
========================================================= */

function Service({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="service-card">
      <div className="service-top">
        <span>{number}</span>

        <div className="service-icon">
          {icon}
        </div>
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

      <div className="service-line" />
    </article>
  );
}

/* =========================================================
   WORK CARD
========================================================= */

function WorkCard({
  number,
  category,
  title,
  description,
  tags,
}: {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <article className="work-card">
      <div className="work-card-top">
        <span className="work-number">
          {number}
        </span>

        <span className="work-category">
          {category}
        </span>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="work-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="work-arrow">
        <FaArrowUpRightFromSquare />
      </div>
    </article>
  );
}

export default App;