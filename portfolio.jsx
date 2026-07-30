import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Server, Wrench, Code2, LayoutGrid, GraduationCap, ChevronRight } from "lucide-react";

const AVATAR_SRC = "data:image/jpeg;base64,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";

const styles = `
  .pp-root{
    --bg: #0a0e17;
    --bg-2: #0d1320;
    --panel: #121a26;
    --panel-2: #161f2d;
    --border: #232e3d;
    --border-soft: #1a2330;
    --text: #edf1f5;
    --text-dim: #93a3b5;
    --text-faint: #556579;
    --amber: #f2a154;
    --amber-glow: rgba(242,161,84,0.35);
    --cyan: #5fd4c4;
    --cyan-glow: rgba(95,212,196,0.3);
    --ok: #6fcf7f;
    --radius: 10px;
    --radius-sm: 6px;
    background: var(--bg);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }
  .pp-root::before{
    content:"";
    position: absolute; inset: 0;
    background-image:
      linear-gradient(var(--border-soft) 1px, transparent 1px),
      linear-gradient(90deg, var(--border-soft) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse 70% 50% at 50% 0%, black 10%, transparent 70%);
    opacity: 0.5;
    pointer-events: none;
  }
  .pp-root .display{ font-family: 'Space Grotesk', sans-serif; }
  .pp-root .mono{ font-family: 'IBM Plex Mono', monospace; }
  .pp-root a{ color: inherit; }
  .pp-root ::selection{ background: var(--amber); color: #14100a; }
  .pp-root .wrap{ max-width: 1040px; margin: 0 auto; padding: 0 32px; position: relative; z-index:1; }

  /* nav */
  .pp-root header.nav{
    position: sticky; top:0; z-index: 50;
    background: rgba(10,14,23,0.78);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-soft);
  }
  .pp-root header.nav .wrap{ display:flex; align-items:center; justify-content: space-between; height: 68px; }
  .pp-root .brand{
    font-family:'Space Grotesk', sans-serif; font-weight:700; font-size:16px; letter-spacing: 0.2px;
    display:flex; align-items:center; gap:9px;
  }
  .pp-root .brand .mark{
    width:26px; height:26px; border-radius: 7px;
    background: linear-gradient(135deg, var(--amber), var(--cyan));
    display:flex; align-items:center; justify-content:center;
    font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:13px; color:#0a0e17;
  }
  .pp-root nav.links{ display:flex; align-items:center; gap: 30px; }
  .pp-root nav.links a{
    font-size: 13.5px; font-weight:500; color: var(--text-dim); text-decoration:none;
    transition: color .15s ease;
  }
  .pp-root nav.links a:hover{ color: var(--text); }
  .pp-root .nav-cta{
    font-size: 13px; font-weight: 600; padding: 8px 16px; border-radius: 7px;
    background: var(--panel-2); border: 1px solid var(--border); text-decoration:none;
    display:inline-flex; align-items:center; gap:6px; transition: all .15s ease;
  }
  .pp-root .nav-cta:hover{ border-color: var(--amber); color: var(--amber); }
  .pp-root nav.links .nav-links-inline{ display:flex; gap:30px; }
  @media (max-width: 720px){ .pp-root nav.links .nav-links-inline{ display:none; } }

  /* hero */
  .pp-root .hero{ padding: 88px 0 70px; }
  .pp-root .hero-grid{ display:grid; grid-template-columns: 1.35fr 1fr; gap: 56px; align-items:center; }
  @media (max-width: 800px){ .pp-root .hero-grid{ grid-template-columns: 1fr; gap: 40px; } .pp-root .hero{ padding-top:56px; } }

  .pp-root .badge-avail{
    display:inline-flex; align-items:center; gap:8px;
    font-size: 12.5px; font-weight:600; color: var(--ok);
    background: rgba(111,207,127,0.08); border: 1px solid rgba(111,207,127,0.3);
    border-radius: 20px; padding: 6px 14px 6px 10px; margin-bottom: 22px;
  }
  .pp-root .badge-avail .d{
    width:7px; height:7px; border-radius:50%; background: var(--ok); box-shadow: 0 0 8px var(--ok);
    animation: pp-pulse 2s infinite;
  }
  @keyframes pp-pulse{ 0%,100%{ opacity:1; } 50%{ opacity: .3; } }
  @media (prefers-reduced-motion: reduce){ .pp-root .badge-avail .d{ animation:none; } }

  .pp-root h1.hero-name{
    font-family:'Space Grotesk', sans-serif; font-weight:700;
    font-size: clamp(38px, 5.4vw, 56px); line-height: 1.05; letter-spacing: -1px;
  }
  .pp-root h1.hero-name .accent{
    background: linear-gradient(90deg, var(--amber), var(--cyan));
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .pp-root .hero-role{
    margin-top: 14px; font-size: 18px; font-weight: 500; color: var(--text-dim);
  }
  .pp-root .hero-tagline{
    margin-top: 20px; max-width: 540px; color: var(--text-dim); font-size: 15.5px;
  }
  .pp-root .hero-cta{ margin-top: 30px; display:flex; gap: 14px; flex-wrap: wrap; }
  .pp-root .btn{
    font-size: 14px; font-weight: 600; text-decoration:none; border-radius: 8px;
    padding: 12px 22px; display:inline-flex; align-items:center; gap:8px;
    transition: all .18s ease; border: none; cursor:pointer;
  }
  .pp-root .btn.primary{ background: var(--amber); color: #14100a; }
  .pp-root .btn.primary:hover{ transform: translateY(-1px); box-shadow: 0 8px 24px var(--amber-glow); }
  .pp-root .btn.ghost{ background: var(--panel-2); border: 1px solid var(--border); color: var(--text); }
  .pp-root .btn.ghost:hover{ border-color: var(--cyan); color: var(--cyan); }

  .pp-root .hero-meta{
    margin-top: 34px; display:flex; gap: 26px; flex-wrap: wrap;
  }
  .pp-root .hero-meta .m{ font-size: 13px; color: var(--text-faint); display:flex; align-items:center; gap:7px; }
  .pp-root .hero-meta .m b{ color: var(--text); font-weight:600; }

  /* avatar */
  .pp-root .avatar-wrap{ position: relative; display:flex; justify-content:center; }
  .pp-root .avatar-ring{
    position: relative; width: 260px; height: 260px;
  }
  .pp-root .avatar-ring::before{
    content:""; position:absolute; inset:-10px; border-radius: 28px;
    background: conic-gradient(from 0deg, var(--amber), var(--cyan), var(--amber));
    opacity: 0.55; filter: blur(18px);
  }
  .pp-root .avatar-img{
    position: relative; width: 260px; height: 260px; border-radius: 24px;
    object-fit: cover; border: 1px solid var(--border);
    box-shadow: 0 20px 50px rgba(0,0,0,0.45);
  }
  .pp-root .avatar-tag{
    position:absolute; bottom: -16px; left: 50%; transform: translateX(-50%);
    background: var(--panel); border: 1px solid var(--border); border-radius: 20px;
    padding: 7px 16px; font-size: 12px; font-weight:600; white-space:nowrap;
    display:flex; align-items:center; gap:7px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  }
  .pp-root .avatar-tag .d{ width:6px; height:6px; border-radius:50%; background: var(--ok); box-shadow: 0 0 6px var(--ok); }

  /* sections */
  .pp-root section{ padding: 74px 0; border-top: 1px solid var(--border-soft); }
  .pp-root .sec-kicker{
    font-size: 12.5px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;
    color: var(--amber); margin-bottom: 10px;
  }
  .pp-root .sec-title{
    font-family:'Space Grotesk', sans-serif; font-weight: 700; font-size: 28px; letter-spacing: -0.5px;
  }
  .pp-root .sec-head{ margin-bottom: 42px; max-width: 600px; }
  .pp-root .sec-sub{ margin-top: 10px; color: var(--text-dim); font-size: 15px; }

  /* about */
  .pp-root .about-text{ max-width: 720px; font-size: 16px; color: var(--text-dim); }
  .pp-root .about-text b{ color: var(--text); font-weight: 600; }

  /* timeline */
  .pp-root .timeline{ position: relative; }
  .pp-root .tl-line{
    position: absolute; left: 15px; top: 8px; bottom: 8px; width: 2px;
    background: linear-gradient(180deg, var(--amber) 0%, var(--border) 18%, var(--border) 100%);
  }
  .pp-root .tl-item{ position: relative; padding-left: 52px; padding-bottom: 44px; }
  .pp-root .tl-item:last-child{ padding-bottom: 0; }
  .pp-root .tl-node{
    position:absolute; left: 6px; top: 4px; width: 20px; height:20px; border-radius:50%;
    background: var(--panel); border: 2px solid var(--border); z-index:1;
    display:flex; align-items:center; justify-content:center;
  }
  .pp-root .tl-node.current{ border-color: var(--amber); }
  .pp-root .tl-node.current::after{
    content:""; width:8px; height:8px; border-radius:50%; background: var(--amber);
    box-shadow: 0 0 10px var(--amber-glow); animation: pp-pulse 2s infinite;
  }
  .pp-root .tl-node:not(.current)::after{ content:""; width:7px; height:7px; border-radius:50%; background: var(--text-faint); }
  .pp-root .tl-card{
    background: var(--panel); border: 1px solid var(--border); border-radius: var(--radius);
    padding: 22px 24px; transition: border-color .15s ease, transform .15s ease;
  }
  .pp-root .tl-card:hover{ border-color: var(--cyan); transform: translateX(2px); }
  .pp-root .tl-top{ display:flex; align-items:baseline; justify-content:space-between; flex-wrap:wrap; gap: 8px; margin-bottom: 4px; }
  .pp-root .tl-role{ font-size: 16.5px; font-weight: 700; }
  .pp-root .tl-time{ font-size: 12px; color: var(--text-faint); font-weight: 500; white-space:nowrap; }
  .pp-root .tl-company{ font-size: 13.5px; color: var(--cyan); font-weight: 500; margin-bottom: 12px; }
  .pp-root .tl-card ul{ list-style:none; padding-left:0; }
  .pp-root .tl-card li{ position: relative; padding-left: 18px; margin-bottom: 7px; font-size: 14px; color: var(--text-dim); }
  .pp-root .tl-card li::before{ content:""; position:absolute; left:2px; top:8px; width:5px; height:5px; border-radius:50%; background: var(--amber); }

  /* focus / skills */
  .pp-root .focus-grid{ display:grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
  @media (max-width: 720px){ .pp-root .focus-grid{ grid-template-columns: 1fr; } }
  .pp-root .focus-card{
    background: var(--panel); border: 1px solid var(--border); border-radius: var(--radius);
    padding: 24px; transition: border-color .15s ease, transform .15s ease;
  }
  .pp-root .focus-card:hover{ border-color: var(--amber); transform: translateY(-2px); }
  .pp-root .focus-icon{
    width: 38px; height: 38px; border-radius: 9px; background: var(--panel-2);
    display:flex; align-items:center; justify-content:center; margin-bottom: 14px;
    color: var(--amber); border: 1px solid var(--border);
  }
  .pp-root .focus-title{ font-size: 15.5px; font-weight: 700; margin-bottom: 8px; }
  .pp-root .focus-text{ font-size: 13.8px; color: var(--text-dim); margin-bottom: 14px; }
  .pp-root .chip-row{ display:flex; flex-wrap: wrap; gap: 7px; }
  .pp-root .chip{
    font-family:'IBM Plex Mono', monospace; font-size: 11.3px; color: var(--text-dim);
    background: var(--panel-2); border: 1px solid var(--border); border-radius: 5px; padding: 4px 9px;
  }

  /* education */
  .pp-root .edu-grid{ display:flex; flex-direction:column; gap: 0; }
  .pp-root .edu-row{
    display:flex; align-items:center; justify-content:space-between; gap: 20px;
    padding: 18px 0; border-top: 1px solid var(--border-soft);
  }
  .pp-root .edu-row:first-child{ border-top:none; }
  .pp-root .edu-left{ display:flex; align-items:center; gap: 14px; }
  .pp-root .edu-ic{
    width: 36px; height:36px; border-radius: 8px; background: var(--panel-2); border: 1px solid var(--border);
    display:flex; align-items:center; justify-content:center; color: var(--cyan); flex-shrink:0;
  }
  .pp-root .edu-deg{ font-size: 15px; font-weight: 600; }
  .pp-root .edu-sch{ font-size: 13px; color: var(--text-dim); margin-top:2px; }
  .pp-root .edu-yr{ font-family:'IBM Plex Mono',monospace; font-size: 12px; color: var(--text-faint); white-space:nowrap; }

  .pp-root .lang-row{ display:flex; gap: 10px; flex-wrap: wrap; margin-top: 30px; }
  .pp-root .lang-badge{
    font-size:12.5px; font-weight:500; border:1px solid var(--border); border-radius: 20px;
    padding: 7px 15px; color: var(--text-dim); background: var(--panel);
  }
  .pp-root .lang-badge b{ color: var(--cyan); font-weight:600; }

  /* contact banner */
  .pp-root .contact-banner{
    background: linear-gradient(135deg, var(--panel), var(--panel-2));
    border: 1px solid var(--border); border-radius: 18px;
    padding: 52px 44px; text-align:center; position:relative; overflow:hidden;
  }
  .pp-root .contact-banner::before{
    content:""; position:absolute; width: 340px; height:340px; border-radius:50%;
    background: radial-gradient(circle, var(--amber-glow), transparent 70%);
    top: -160px; right: -100px; opacity: 0.5;
  }
  .pp-root .contact-title{
    font-family:'Space Grotesk', sans-serif; font-weight:700; font-size: 30px; letter-spacing:-0.5px;
    position:relative;
  }
  .pp-root .contact-sub{ margin-top:12px; color: var(--text-dim); font-size:15px; position:relative; }
  .pp-root .contact-cta{ margin-top: 28px; display:flex; gap:14px; justify-content:center; flex-wrap:wrap; position:relative; }
  .pp-root .contact-details{
    margin-top: 34px; display:flex; gap: 28px; justify-content:center; flex-wrap:wrap; position:relative;
  }
  .pp-root .contact-details .d{ font-size: 13.5px; color: var(--text-dim); display:flex; align-items:center; gap:7px; }

  .pp-root .ref-note{
    margin-top: 40px; text-align:center; font-size: 12.5px; color: var(--text-faint); position:relative;
  }
  .pp-root .ref-note b{ color: var(--text-dim); }

  footer.pp-foot{
    padding: 32px 0 46px; text-align:center; font-size: 12.5px; color: var(--text-faint); border-top: 1px solid var(--border-soft);
  }

  .reveal{ opacity:0; transform: translateY(16px); transition: opacity .55s ease, transform .55s ease; }
  .reveal.in{ opacity:1; transform:none; }
  @media (prefers-reduced-motion: reduce){ .reveal{ opacity:1; transform:none; } }
`;

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current ? ref.current.querySelectorAll(".reveal") : [];
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    } else {
      els.forEach((el) => el.classList.add("in"));
    }
  }, []);
  return ref;
}

const EXPERIENCE = [
  {
    time: "Feb 2026 — Present",
    current: true,
    role: "Platform Support Specialist",
    company: "Trax Technologies",
    bullets: [
      "Provision and manage secure file transfer accounts (SFTP, FPS, Prisma) — access control, environment setup, credential lifecycle.",
      "Configure data exchange pipelines: routing and integration profiles for reliable file ingestion and partner connectivity.",
      "Troubleshoot platform issues via log analysis in Kibana, MFT tools, and JIRA — resolving authentication and connectivity incidents.",
    ],
  },
  {
    time: "Aug 2025 — Dec 2025",
    role: "Customer Chat Support",
    company: "ContactPoint360",
    bullets: [
      "Handled customer chats promptly and professionally.",
      "Resolved issues related to orders, deliveries, payments, and refunds.",
      "Provided accurate order updates and clear instructions to customers.",
    ],
  },
  {
    time: "Sep 2022 — May 2025",
    role: "Office Assistant — Working Scholar",
    company: "University of Cebu, Main Campus",
    bullets: [
      "Assisted HR staff with filing, record-keeping, and document management.",
      "Supported recruitment: scheduling interviews, coordinating with candidates.",
      "Helped organize employee events, training sessions, and meetings.",
    ],
  },
  {
    time: "Jan 2022 — Oct 2022",
    role: "Customer Service Representative",
    company: "Qualfon Philippines",
    bullets: [
      "Handled inbound customer calls professionally and efficiently.",
      "Resolved customer issues related to billing.",
      "Followed company policies, quality standards, and data security procedures.",
    ],
  },
];

const FOCUS = [
  {
    icon: <Server size={19} />,
    title: "Platform & Data Systems",
    text: "Secure file transfer and data-pipeline support across production and test environments.",
    chips: ["SFTP", "FPS", "Prisma", "Kibana", "JIRA", "Rundeck"],
  },
  {
    icon: <Wrench size={19} />,
    title: "IT Support",
    text: "Hardware/software troubleshooting, basic networking, and environment configuration.",
    chips: ["Networking", "Troubleshooting", "Prod / Test Setup"],
  },
  {
    icon: <Code2 size={19} />,
    title: "Programming Foundations",
    text: "Core logic and problem-solving from a Computer Engineering curriculum.",
    chips: ["Python", "Java", "C", "C++"],
  },
  {
    icon: <LayoutGrid size={19} />,
    title: "Tools & Collaboration",
    text: "Reporting, documentation, and cross-team coordination tools used daily.",
    chips: ["Informatica", "Veraction", "Notion", "Outlook", "Excel", "Canva"],
  },
];

const EDUCATION = [
  { yr: "2019 – 2026", deg: "B.S. Computer Engineering", sch: "University of Cebu — Main Campus" },
  { yr: "2016 – 2018", deg: "Senior High School, TVL – ICT", sch: "St. Elijah Christian Institute of Technology Inc." },
  { yr: "2012 – 2016", deg: "High School", sch: "Lourdes Empinado National High School" },
];

export default function ProfessionalPortfolio() {
  const containerRef = useReveal();

  return (
    <div className="pp-root" ref={containerRef}>
      <style>{styles}</style>

      <header className="nav">
        <div className="wrap">
          <div className="brand"><span className="mark">RC</span>Rey Cardama</div>
          <nav className="links">
            <div className="nav-links-inline">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#focus">Skills</a>
              <a href="#education">Education</a>
            </div>
            <a className="nav-cta" href="#contact">Contact <ArrowRight size={14} /></a>
          </nav>
        </div>
      </header>

      <section className="hero" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="badge-avail"><span className="d"></span>Available for part-time &amp; full-time roles</div>
              <h1 className="hero-name display">
                Rey E. Cardama<br /><span className="accent">Platform Support Specialist</span>
              </h1>
              <p className="hero-role">Computer Engineering Graduate · Cebu City, PH</p>
              <p className="hero-tagline">
                I keep systems talking to each other — provisioning secure file transfers, tracing issues
                through logs, and closing tickets before they become outages.
              </p>
              <div className="hero-cta">
                <a className="btn primary" href="mailto:itsmeitsrey1199@gmail.com"><Mail size={16} />Email Me</a>
                <a className="btn ghost" href="tel:09083013653"><Phone size={16} />0908 301 3653</a>
              </div>
              <div className="hero-meta">
                <div className="m"><b>4</b>&nbsp;roles since 2022</div>
                <div className="m"><b>3</b>&nbsp;transfer protocols supported</div>
                <div className="m"><b>3</b>&nbsp;languages fluent</div>
              </div>
            </div>

            <div className="avatar-wrap reveal">
              <div className="avatar-ring">
                <img className="avatar-img" src={AVATAR_SRC} alt="Rey E. Cardama" />
                <div className="avatar-tag"><span className="d"></span>Currently @ Trax Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-kicker">About</div>
            <h2 className="sec-title display">Profile</h2>
          </div>
          <p className="about-text reveal">
            <b>Motivated and adaptable Computer Engineering graduate</b> with hands-on experience in platform
            support, technical troubleshooting, and customer service. I manage secure file transfer systems,
            configure data exchange pipelines, and resolve incidents through log analysis and ticketing tools —
            backed by foundational knowledge in programming, networking, and data privacy practices. Fast
            learner, detail-focused, and always looking to grow further into IT and platform operations.
          </p>
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-kicker">Career</div>
            <h2 className="sec-title display">Experience</h2>
            <p className="sec-sub">A connected timeline of roles — each one building toward platform and systems work.</p>
          </div>
          <div className="timeline">
            <div className="tl-line"></div>
            {EXPERIENCE.map((job, i) => (
              <div className="tl-item reveal" key={i}>
                <div className={`tl-node ${job.current ? "current" : ""}`}></div>
                <div className="tl-card">
                  <div className="tl-top">
                    <div className="tl-role">{job.role}</div>
                    <div className="tl-time mono">{job.time}</div>
                  </div>
                  <div className="tl-company">{job.company}</div>
                  <ul>
                    {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="focus">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-kicker">Capabilities</div>
            <h2 className="sec-title display">Focus Areas</h2>
          </div>
          <div className="focus-grid">
            {FOCUS.map((f, i) => (
              <div className="focus-card reveal" key={i}>
                <div className="focus-icon">{f.icon}</div>
                <div className="focus-title">{f.title}</div>
                <div className="focus-text">{f.text}</div>
                <div className="chip-row">
                  {f.chips.map((c, j) => <span className="chip" key={j}>{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-kicker">Background</div>
            <h2 className="sec-title display">Education</h2>
          </div>
          <div className="edu-grid reveal">
            {EDUCATION.map((e, i) => (
              <div className="edu-row" key={i}>
                <div className="edu-left">
                  <div className="edu-ic"><GraduationCap size={17} /></div>
                  <div>
                    <div className="edu-deg">{e.deg}</div>
                    <div className="edu-sch">{e.sch}</div>
                  </div>
                </div>
                <div className="edu-yr">{e.yr}</div>
              </div>
            ))}
          </div>
          <div className="lang-row reveal">
            <div className="lang-badge">English · <b>Fluent</b></div>
            <div className="lang-badge">Tagalog · <b>Fluent</b></div>
            <div className="lang-badge">Bisaya · <b>Fluent</b></div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <div className="contact-banner reveal">
            <div className="contact-title display">Let's build something reliable.</div>
            <p className="contact-sub">Open to part-time and full-time platform &amp; IT support roles.</p>
            <div className="contact-cta">
              <a className="btn primary" href="mailto:itsmeitsrey1199@gmail.com"><Mail size={16} />itsmeitsrey1199@gmail.com</a>
              <a className="btn ghost" href="tel:09083013653"><Phone size={16} />0908 301 3653</a>
            </div>
            <div className="contact-details">
              <div className="d"><MapPin size={14} />Tejero, Cebu City, Cebu</div>
            </div>
            <div className="ref-note">
              Reference: <b>Justine Z. Abatayo</b> — BDO, Client Service Associate · 0947 681 4584 · justineabatayo10@gmail.com
            </div>
          </div>
        </div>
      </section>

      <footer className="pp-foot">© 2026 Rey E. Cardama — built with React</footer>
    </div>
  );
}