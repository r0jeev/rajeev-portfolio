import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowDown,
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaPhone,
  FaLinkedinIn,
  FaWindows,
  FaNetworkWired,
  FaDesktop,
  FaGears,
  FaShieldHalved,
  FaLinux,
  FaMicrosoft,
  FaServer,
  FaTerminal,
  FaCircleCheck,
  FaWrench,
} from "react-icons/fa6";
import Scene3D from "./Scene3D";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    number: "01",
    period: "SEP 2025 — PRESENT",
    company: "MEHRWERT INFOTECH PVT. LTD.",
    role: "IT SUPPORT EXECUTIVE",
    description:
      "Supporting users across hardware, software, Windows and network environments, with a focus on diagnosis, reliable fixes and smooth day-to-day IT operations.",
    tags: ["Hardware", "Software", "Windows", "Networking", "User Support"],
    current: true,
  },
  {
    number: "02",
    period: "MAR 2024 — SEP 2025",
    company: "BP MARINE ACADEMY",
    role: "DESKTOP SUPPORT ENGINEER",
    description:
      "Handled desktop and laptop support, Windows and Ubuntu installations, Outlook setup, LAN/TCP-IP troubleshooting, backups and specialised academy IT systems.",
    tags: ["Windows", "Ubuntu", "LAN / TCP-IP", "Outlook", "CCTV"],
    current: false,
  },
  {
    number: "03",
    period: "MAR 2019 — MAY 2019",
    company: "INFIYUG TECHNOLOGIES",
    role: "WEB DEVELOPMENT INTERN",
    description:
      "Assisted with website development and interface design, building an early foundation in HTML, CSS and web technologies.",
    tags: ["HTML", "CSS", "Web", "UI"],
    current: false,
  },
];

const capabilities = [
  {
    number: "01",
    title: "WINDOWS",
    subtitle: "SYSTEM SUPPORT",
    description:
      "Windows 7, 8, 10, 11 and Server installation, configuration, troubleshooting and user support.",
    icon: <FaWindows />,
    level: "CORE",
  },
  {
    number: "02",
    title: "ACTIVE",
    subtitle: "DIRECTORY",
    description:
      "Practical understanding of users, groups, permissions, policies and Windows domain administration.",
    icon: <FaShieldHalved />,
    level: "KNOWLEDGE",
  },
  {
    number: "03",
    title: "NETWORK",
    subtitle: "TROUBLESHOOTING",
    description:
      "LAN, TCP/IP, connectivity, DNS and DHCP troubleshooting using a structured diagnostic approach.",
    icon: <FaNetworkWired />,
    level: "CORE",
  },
  {
    number: "04",
    title: "MICROSOFT",
    subtitle: "365 & OUTLOOK",
    description:
      "Microsoft Office, Outlook setup, account assistance, application troubleshooting and user support.",
    icon: <FaMicrosoft />,
    level: "CORE",
  },
  {
    number: "05",
    title: "HARDWARE",
    subtitle: "ENDPOINT SUPPORT",
    description:
      "PC and laptop assembly, peripherals, maintenance, installation and hardware-level troubleshooting.",
    icon: <FaDesktop />,
    level: "CORE",
  },
  {
    number: "06",
    title: "LINUX",
    subtitle: "UBUNTU SUPPORT",
    description:
      "Installation and basic troubleshooting experience with Ubuntu Linux environments.",
    icon: <FaLinux />,
    level: "CORE",
  },
];

const supportStack = [
  ["01", "ENDPOINTS", "PCs / LAPTOPS / PERIPHERALS", <FaDesktop />],
  ["02", "WINDOWS", "INSTALL / CONFIGURE / TROUBLESHOOT", <FaWindows />],
  ["03", "IDENTITY", "USERS / GROUPS / ACCESS", <FaShieldHalved />],
  ["04", "NETWORK", "LAN / TCP-IP / DNS / DHCP", <FaNetworkWired />],
  ["05", "APPLICATIONS", "OFFICE / OUTLOOK / USER APPS", <FaMicrosoft />],
  ["06", "INFRASTRUCTURE", "SERVER / DEVICES / IT OPERATIONS", <FaServer />],
];

const troubleshootingSteps = [
  ["01", "IDENTIFY", "Understand the user issue and reproduce the problem."],
  ["02", "DIAGNOSE", "Separate hardware, software, network and access causes."],
  ["03", "RESOLVE", "Apply the safest practical fix and restore service."],
  ["04", "VERIFY", "Test the result with the user and confirm stability."],
  ["05", "DOCUMENT", "Capture the useful fix so the next incident is faster."],
];

const labProjects = [
  {
    number: "01",
    title: "ACTIVE DIRECTORY",
    label: "WINDOWS DOMAIN LAB",
    flow: ["USERS", "GROUPS", "POLICIES", "ACCESS"],
    description:
      "A practical lab for understanding Windows domain administration, user management and access control.",
    icon: <FaShieldHalved />,
    status: "LAB / LEARNING",
  },
  {
    number: "02",
    title: "NETWORK DIAGNOSTICS",
    label: "TCP / IP WORKFLOW",
    flow: ["DEVICE", "IP", "GATEWAY", "DNS"],
    description:
      "A structured endpoint-to-network workflow for finding connectivity and configuration problems.",
    icon: <FaNetworkWired />,
    status: "PRACTICAL",
  },
  {
    number: "03",
    title: "DESKTOP SUPPORT",
    label: "ENDPOINT WORKFLOW",
    flow: ["INSTALL", "CONFIGURE", "TEST", "RESOLVE"],
    description:
      "A repeatable workflow covering system setup, configuration, testing and troubleshooting.",
    icon: <FaGears />,
    status: "PRACTICAL",
  },
  {
    number: "04",
    title: "POWERSHELL",
    label: "AUTOMATION DIRECTION",
    flow: ["COMMAND", "SCRIPT", "TEST", "AUTOMATE"],
    description:
      "A learning track focused on using PowerShell to make common Windows support tasks faster and more repeatable.",
    icon: <FaTerminal />,
    status: "LEARNING",
  },
];

const learningPath = [
  ["01", "GROUP POLICY", "Building stronger Windows administration depth."],
  ["02", "POWERSHELL", "Automating repetitive support tasks."],
  ["03", "ENTRA ID", "Expanding identity and cloud administration knowledge."],
  ["04", "INTUNE", "Learning modern endpoint management concepts."],
  ["05", "ITSM", "Improving incident, change and documentation workflows."],
];

function App() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-element",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".hero-3d",
        { opacity: 0, scale: 0.94 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.25,
          delay: 0.2,
          ease: "power3.out",
        }
      );

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".experience-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: -25 },
          {
            opacity: 1,
            x: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".stack-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            delay: index * 0.04,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="portfolio-shell" ref={rootRef}>
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Rajeev Singh home">
          <span>R</span>
          <span>S</span>
        </a>

        <nav className="desktop-nav">
          <a href="#about">ABOUT</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#skills">SKILLS</a>
          <a href="#labs">LABS</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <a className="header-contact" href="#contact">
          CONTACT <FaArrowUpRightFromSquare />
        </a>
      </header>

      <main id="top">
        <section className="hero-section premium-hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-element availability">
                <span className="status-dot" />
                AVAILABLE FOR IT OPPORTUNITIES
              </div>

              <div className="hero-element hero-index">
                01 <span>—</span> IT SUPPORT / SYSTEMS
              </div>

              <h1 className="hero-element hero-title">
                <span>RAJEEV</span>
                <span className="outline-word">SINGH</span>
              </h1>

              <div className="hero-element hero-role">
                <span>IT SUPPORT</span>
                <span>ENGINEER</span>
              </div>

              <p className="hero-element hero-intro">
                I solve technical problems, support users and keep workplace
                systems running reliably across endpoints, Windows and networks.
              </p>

              <div className="hero-element hero-actions">
                <a href="#experience" className="primary-button">
                  EXPLORE EXPERIENCE <FaArrowUpRightFromSquare />
                </a>
                <a href="#contact" className="secondary-button">
                  GET IN TOUCH <FaArrowUpRightFromSquare />
                </a>
              </div>

              <div className="hero-proof hero-element">
                <div>
                  <strong>02+</strong>
                  <span>YEARS IT SUPPORT</span>
                </div>
                <div>
                  <strong>ENDPOINT</strong>
                  <span>+ NETWORK</span>
                </div>
                <div>
                  <strong>WINDOWS</strong>
                  <span>CORE FOCUS</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-3d">
                <Scene3D />
              </div>

              <div className="hero-floating-card hero-card-one">
                <span>WINDOWS</span>
                <strong>ONLINE</strong>
              </div>

              <div className="hero-floating-card hero-card-two">
                <span>NETWORK</span>
                <strong>STABLE</strong>
              </div>

              <div className="hero-floating-card hero-card-three">
                <span>SUPPORT</span>
                <strong>ACTIVE</strong>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <span>01 — 08</span>
            <span className="scroll-indicator">
              SCROLL <span />
              <FaArrowDown />
            </span>
            <span>IT OPERATIONS / SYSTEMS</span>
          </div>
        </section>

        <div className="system-bar">
          {["WINDOWS", "ACTIVE DIRECTORY", "MICROSOFT 365", "TCP / IP", "HARDWARE"].map(
            (item) => (
              <div key={item}>
                <span className="mini-dot" />
                {item}
              </div>
            )
          )}
        </div>

        <section className="about-section section-block" id="about">
          <div className="section-number">02</div>

          <div className="section-heading reveal">
            <span className="eyebrow">ABOUT ME</span>
            <h2>
              I KEEP
              <br />
              <em>SYSTEMS</em>
              <br />
              RUNNING.
            </h2>
          </div>

          <div className="about-layout">
            <div className="about-main reveal">
              <p className="about-lead">
                IT Support professional focused on desktop support, Windows
                administration, system troubleshooting, hardware, software and
                network support.
              </p>
              <p className="about-detail">
                My approach is simple: understand the issue, isolate the cause,
                restore service, verify the result and leave a useful trail for
                the next person. I enjoy the practical side of IT where users,
                devices and systems all need to work together.
              </p>
            </div>

            <div className="system-panel reveal">
              <div className="panel-header">
                <span>FIELD PROFILE</span>
                <span className="panel-live">
                  <i /> LIVE
                </span>
              </div>
              <div className="profile-row">
                <span>ROLE</span>
                <strong>IT SUPPORT ENGINEER</strong>
              </div>
              <div className="profile-row">
                <span>FOCUS</span>
                <strong>ENDPOINT + NETWORK</strong>
              </div>
              <div className="profile-row">
                <span>ENVIRONMENT</span>
                <strong>WINDOWS / LINUX</strong>
              </div>
              <div className="profile-row">
                <span>METHOD</span>
                <strong>DIAGNOSE → RESOLVE</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="stack-section section-block">
          <div className="section-number">03</div>

          <div className="section-heading compact-heading reveal">
            <span className="eyebrow">IT OPERATIONS</span>
            <h2>
              THE SUPPORT
              <br />
              <em>STACK.</em>
            </h2>
          </div>

          <div className="stack-intro reveal">
            <p>
              The practical layers I think through when supporting a user,
              endpoint or workplace system.
            </p>
          </div>

          <div className="stack-grid">
            {supportStack.map(([number, title, detail, icon]) => (
            <article className="stack-card reveal" key={String(number)}>
                <div className="stack-top">
                  <span>{number}</span>
                  <div className="stack-icon">{icon}</div>
                </div>
                <h3>{title}</h3>
                <p>{detail}</p>
                <span className="stack-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section section-block" id="experience">
          <div className="section-number">04</div>

          <div className="section-heading reveal">
            <span className="eyebrow">EXPERIENCE</span>
            <h2>
              THE
              <br />
              <em>JOURNEY.</em>
            </h2>
          </div>

          <div className="experience-intro reveal">
            <span>CAREER TIMELINE</span>
            <p>
              Learning, troubleshooting and growing through real-world support
              environments.
            </p>
          </div>

          <div className="experience-list">
            {experiences.map((item) => (
              <article
                className={`experience-card reveal ${item.current ? "is-current" : ""}`}
                key={item.number}
              >
                <div className="experience-meta">
                  <span>{item.number}</span>
                  <span>{item.period}</span>
                </div>

                <div className="experience-company">
                  <div className="current-marker">
                    {item.current ? "CURRENT" : "EXPERIENCE"}
                  </div>
                  <h3>{item.company}</h3>
                  <h4>{item.role}</h4>
                </div>

                <p className="experience-description">{item.description}</p>

                <div className="experience-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section section-block" id="skills">
          <div className="section-number">05</div>

          <div className="section-heading reveal">
            <span className="eyebrow">SKILLS & TOOLS</span>
            <h2>
              BUILT FOR
              <br />
              <em>SUPPORT.</em>
            </h2>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((item) => (
              <article className="capability-card reveal" key={item.number}>
                <div className="capability-top">
                  <span>{item.number}</span>
                  <div className="capability-icon">{item.icon}</div>
                </div>

                <div className="capability-heading">
                  <div className="skill-level">{item.level}</div>
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                </div>

                <p>{item.description}</p>
                <span className="capability-line" />
              </article>
            ))}
          </div>
        </section>

        <section className="method-section section-block">
          <div className="method-panel reveal">
            <div className="method-heading">
              <span className="eyebrow">TROUBLESHOOTING METHOD</span>
              <h2>
                FROM ISSUE
                <br />
                <em>TO RESOLUTION.</em>
              </h2>
              <p>
                A repeatable support mindset that keeps troubleshooting
                structured instead of random.
              </p>
            </div>

            <div className="method-list">
              {troubleshootingSteps.map(([number, title, description]) => (
                <div className="method-row" key={number}>
                  <span>{number}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{description}</p>
                  </div>
                  <FaCircleCheck />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="labs-section section-block" id="labs">
          <div className="section-number">06</div>

          <div className="section-heading reveal">
            <span className="eyebrow">PRACTICAL LABS</span>
            <h2>
              I LEARN BY
              <br />
              <em>BUILDING.</em>
            </h2>
          </div>

          <div className="labs-intro reveal">
            <p>
              Hands-on environments and repeatable workflows used to deepen
              systems knowledge without pretending lab work is production
              experience.
            </p>
          </div>

          <div className="labs-grid">
            {labProjects.map((project) => (
              <article className="lab-card reveal" key={project.number}>
                <div className="lab-top">
                  <span>{project.number}</span>
                  <div className="lab-icon">{project.icon}</div>
                </div>

                <span className="lab-label">{project.label}</span>
                <h3>{project.title}</h3>

                <div className="lab-flow">
                  {project.flow.map((step, index) => (
                    <div key={step}>
                      <span>{step}</span>
                      {index < project.flow.length - 1 && <i>→</i>}
                    </div>
                  ))}
                </div>

                <p>{project.description}</p>

                <div className="lab-status">
                  <span />
                  {project.status}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="learning-section section-block">
          <div className="learning-layout">
            <div className="learning-copy reveal">
              <span className="eyebrow">NEXT LAYER</span>
              <h2>
                BUILDING
                <br />
                <em>DEPTH.</em>
              </h2>
              <p>
                Areas I am actively building toward as I grow from support into
                deeper systems and administration work.
              </p>
            </div>

            <div className="learning-list">
              {learningPath.map(([number, title, description]) => (
                <div className="learning-row reveal" key={number}>
                  <span>{number}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{description}</p>
                  </div>
                  <FaArrowUpRightFromSquare />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="resume-section">
          <div className="resume-grid">
            <div className="resume-copy reveal">
              <span className="eyebrow">PROFILE READY</span>
              <h2>
                LET'S BUILD
                <br />
                <em>SOMETHING RELIABLE.</em>
              </h2>
            </div>

            <div className="resume-action reveal">
              <div className="resume-signal">
                <FaWrench />
                <span>IT SUPPORT / SYSTEMS</span>
              </div>
              <p>
                Looking for an IT Support, Desktop Support or System
                Administration opportunity? Let's connect and discuss how I can
                contribute.
              </p>
              <a href="#contact" className="primary-button large-button">
                CONNECT WITH ME <FaArrowUpRightFromSquare />
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section section-block" id="contact">
          <div className="section-number">07</div>

          <div className="contact-heading reveal">
            <span className="eyebrow">CONTACT</span>
            <h2>
              LET'S
              <br />
              <em>CONNECT.</em>
            </h2>
            <p>
              Open to IT Support, Desktop Support and System Administration
              opportunities, technical discussions and professional
              collaboration.
            </p>
          </div>

          <div className="contact-grid">
            <a
              className="contact-card reveal"
              href="mailto:rajivssingh810@gmail.com"
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <span>EMAIL</span>
                <strong>rajivssingh810@gmail.com</strong>
              </div>
              <FaArrowUpRightFromSquare className="contact-arrow" />
            </a>

            <a className="contact-card reveal" href="tel:+919324910710">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div>
                <span>PHONE</span>
                <strong>+91 9324910710</strong>
              </div>
              <FaArrowUpRightFromSquare className="contact-arrow" />
            </a>

            <a
              className="contact-card reveal"
              href="https://www.linkedin.com/in/rajeev-singh-06915137a"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-icon">
                <FaLinkedinIn />
              </div>
              <div>
                <span>LINKEDIN</span>
                <strong>/in/rajeev-singh-06915137a</strong>
              </div>
              <FaArrowUpRightFromSquare className="contact-arrow" />
            </a>

            <div className="contact-card status-card reveal">
              <div className="contact-icon status-icon">
                <span />
              </div>
              <div>
                <span>STATUS</span>
                <strong>OPEN FOR OPPORTUNITIES</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>RAJEEV SINGH</strong>
          <span>IT SUPPORT ENGINEER</span>
        </div>
        <div>
          <span>IT OPERATIONS / SYSTEMS</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
