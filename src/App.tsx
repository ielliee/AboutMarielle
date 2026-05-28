import { ArrowUpRight, Mail, Phone, Instagram, Linkedin, Facebook, Code2, Palette, Users } from "lucide-react";
import { Navbar } from "./components/portfolio/Navbar";
import { Reveal } from "./components/portfolio/Reveal";
import { FloatingShapes } from "./components/portfolio/FloatingShapes";
import lauviah from "./assets/lauviah.png";
import mooji from "./assets/Mooji.png";
import badyethero from "./assets/badyethero.png";
import servease from "./assets/Servease.png";
import TBCARE from "./assets/TBCARE.png";
import image0 from "./assets/image0.png";
import marielle from "./assets/marielle.png";


const skills = [
  {
    icon: Code2,
    title: "Technical",
    tint: "var(--sky)",
    items: ["HTML", "CSS", "JavaScript", "Flutter", "Dart", "System workflow planning"],
  },
  {
    icon: Palette,
    title: "Creative",
    tint: "var(--blush)",
    items: ["UI/UX Design", "Wireframing", "Figma", "Digital Illustration", "Visual Composition"],
  },
  {
    icon: Users,
    title: "Social",
    tint: "var(--sage)",
    items: ["Communication", "Collaboration", "Adaptability", "Problem-solving"],
  },
];

const projects = [
  {
    title: "BadyetHero",
    tag: "Mobile App Prototype",
    desc: "A gamified personal finance management application designed to help users manage expenses and savings.",
    img: badyethero,
    link: "https://github.com/ielliee/badyethero",
  },

  {
    title: "Lauviah",
    tag: "Figma Prototype",
    desc: "A mental health and academic wellbeing app concept designed for students.",
    img: lauviah,
    link: "https://www.figma.com/design/cd8VLOU8Sun2EPsPw0gApQ/mooji?node-id=0-1&t=o2KMucAKtbew3liL-1",
  },

  {
    title: "Mooji",
    tag: "Figma Prototype",
    desc: "A social wellbeing application where students can share moods and connect through virtual spaces.",
    img: mooji,
    link: "https://www.figma.com/design/cd8VLOU8Sun2EPsPw0gApQ/mooji?node-id=0-1&t=o2KMucAKtbew3liL-1",
  },

  {
    title: "Servease",
    tag: "WebApp Prototype",
    desc: "A home service platform concept designed to connect customers with service providers.",
    img: servease,
    link: "https://github.com/ielliee/servease",
  },

  {
    title: "TB Care Portal",
    tag: "WebApp Prototype",
    desc: "A healthcare portal focused on tuberculosis patient monitoring and management.",
    img: TBCARE,
    link: "https://www.figma.com/design/wLb0TIfvyj85wccVTqaLtQ/-SIPP--TB-DOTS?node-id=0-1&t=PDKKx5ye1Mc7djA8-1",
  },
];

export default function App() {
  return (
    <div id="top" className="relative min-h-screen text-foreground">
      <Navbar />

{/* HERO */}
<section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
  <FloatingShapes />
  <div className="relative mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
    <div className="animate-fade-up">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
        Student Portfolio · 2026
      </p>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
        Hi, I'm Marielle Malla{" "}
      </h1>

      <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
        I am currently seeking opportunities to gain practical experience,
        enhance my technical knowledge, and grow as a Computer Science student
        through my OJT experience. I am eager to learn, collaborate with others,
        and further develop my skills in technology and development.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
        >
          See what I've made
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition"
        >
          Say hi
        </a>
      </div>
    </div>

    {/* IMAGE SECTION */}
<div className="relative flex items-center justify-center animate-fade-in">
  {/* Background circles */}
  <img
    src={image0}
    alt=""
    className="absolute inset-0 w-full h-full object-contain scale-125 z-0"
  />

  {/* Your image */}
  <img
    src={marielle}
    alt="Marielle Malla"
    className="relative z-10 w-full max-w-[420px] object-contain"
  />
</div>
  </div>
</section>

      {/* ABOUT */}
      <section id="about" className="py-28 md:py-36">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">About</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              Who is <span className="italic font-light">Marielle?</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I am a Computer Science student with a strong interest in technology, programming, and problem-solving.
              I have experience working on academic and collaborative projects involving web development, UI/UX design, system development, and software-related solutions.
              enjoy exploring new technologies, improving my coding skills, and creating applications that are both functional and user-friendly. Through my academic journey, I have developed teamwork, communication, and critical thinking skills that help me adapt and contribute effectively in different environments.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 md:py-32 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Skills</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-14 max-w-xl">
              A few things I'm <span className="italic font-light">learning and using.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="group h-full rounded-3xl bg-card border border-border/70 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(40,30,60,0.18)]">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundColor: s.tint }}
                  >
                    <s.icon className="w-5 h-5 text-foreground/80" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{s.title} Skills</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/60" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
<section id="projects" className="py-28 md:py-36">
  <div className="mx-auto max-w-6xl px-6 md:px-10">
    <Reveal>
      <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Some things I've made
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold max-w-xl">
            Small projects,{" "}
            <span className="italic font-light">
              big curiosity.
            </span>
          </h2>
        </div>

        <p className="text-sm text-muted-foreground max-w-xs">
          School outputs, personal experiments.
        </p>
      </div>
    </Reveal>

    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
      {projects.map((p, i) => (
        <Reveal key={p.title} delay={(i % 2) * 100}>
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative rounded-3xl overflow-hidden border border-border/70 bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-40px_rgba(40,30,60,0.25)] block ${
              projects.length % 2 !== 0 &&
              i === projects.length - 1
                ? "md:col-span-2 md:max-w-[540px] md:justify-self-center"
                : ""
            }`}
          >
            <div className="aspect-[4/3] overflow-hidden bg-secondary">
              <img
                src={p.img}
                alt={`${p.title} preview`}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>

            <div className="p-7 flex items-start justify-between gap-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  {p.tag}
                </p>

                <h3 className="text-xl font-semibold mb-1.5">
                  {p.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="shrink-0 w-11 h-11 rounded-full border border-border flex items-center justify-center transition-all duration-500 group-hover:bg-foreground group-hover:text-background group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="py-28 md:py-36 border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 md:px-10 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">Contact</p>
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
             Feel free to message me!
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <a
              href="mailto:hello@portfolio.app"
              className="inline-block mt-10 text-lg md:text-xl underline underline-offset-8 decoration-1 hover:decoration-foreground transition"
            >
              mariellemalla5@gmail.com
            </a>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-14 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-sm text-muted-foreground">
              <li>
  <a
    href="mailto:mariellemalla5@gmail.com"
    className="inline-flex items-center gap-2 hover:text-foreground transition"
  >
    <Mail className="w-4 h-4" strokeWidth={1.5} />
    <span>mariellemalla5@gmail.com</span>
  </a>
</li>

<li>
  <a
    href="tel:+639696190723"
    className="inline-flex items-center gap-2 hover:text-foreground transition"
  >
    <Phone className="w-4 h-4" strokeWidth={1.5} />
    <span>+63 969 619 0723</span>
  </a>
</li>

<li>
  <a
    href="https://www.instagram.com/ielliemarr/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 hover:text-foreground transition"
  >
    <Instagram className="w-4 h-4" strokeWidth={1.5} />
    <span>Instagram</span>
  </a>
</li>

<li>
  <a
    href="https://www.linkedin.com/in/marielle-malla/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 hover:text-foreground transition"
  >
    <Linkedin className="w-4 h-4" strokeWidth={1.5} />
    <span>LinkedIn</span>
  </a>
</li>

<li>
  <a
    href="https://www.facebook.com/ielliemarr/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 hover:text-foreground transition"
  >
    <Facebook className="w-4 h-4" strokeWidth={1.5} />
    <span>Facebook</span>
  </a>
</li>
            </ul>
          </Reveal>

        </div>
      </section>
    </div>
  );
}
