import styles from "./page.module.css";

const features = [
  {
    title: "Responsive by default",
    description:
      "The homepage is already structured for desktop and mobile, so you have a working baseline before adding real content.",
  },
  {
    title: "Easy to extend",
    description:
      "Everything is built with the App Router, TypeScript, and CSS Modules, which keeps the setup simple and future-friendly.",
  },
  {
    title: "Vercel-friendly",
    description:
      "This is a standard Next.js app, so connecting the repo to Vercel later is straightforward with no extra deployment glue.",
  },
];

const launchSteps = [
  {
    number: "01",
    title: "Replace the placeholder copy",
    description:
      "Update the text in app/page.tsx with your actual headline, services, links, and contact details.",
  },
  {
    number: "02",
    title: "Add your brand assets",
    description:
      "Drop logos, photos, and social preview images into the app or public directory as your site grows.",
  },
  {
    number: "03",
    title: "Connect Vercel when ready",
    description:
      "Once your content is set, import the repository into Vercel and it can build this project without extra config.",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top">
          FinchB4G
          <span>Next.js starter</span>
        </a>
        <nav className={styles.nav}>
          <a href="#features">Features</a>
          <a href="#launch">Launch</a>
          <a href="#next-steps">Next steps</a>
        </nav>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Basic website frontend</p>
          <h1>Start with a polished site now and wire the rest in later.</h1>
          <p className={styles.lede}>
            This project gives you a clean Next.js foundation with responsive
            sections, stronger typography, and a layout that is ready for your
            real brand, messaging, and deployment flow.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href="#features">
              Explore the starter
            </a>
            <a className={styles.secondaryAction} href="#next-steps">
              See what to change next
            </a>
          </div>
        </div>

        <aside className={styles.heroCard}>
          <p className={styles.cardLabel}>Included today</p>
          <ul className={styles.stackList}>
            <li>Next.js 16 with the App Router</li>
            <li>TypeScript and ESLint configured</li>
            <li>Responsive landing-page sections</li>
            <li>Clean path to a later Vercel deploy</li>
          </ul>
          <div className={styles.metricRow}>
            <div>
              <strong>1</strong>
              <span>homepage ready</span>
            </div>
            <div>
              <strong>3</strong>
              <span>starter sections</span>
            </div>
            <div>
              <strong>0</strong>
              <span>extra deploy config</span>
            </div>
          </div>
        </aside>
      </section>

      <section className={styles.section} id="features">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionLabel}>What this gives you</p>
          <h2>A practical base instead of the stock Next.js placeholder.</h2>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <article className={styles.featureCard} key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.launchSection} id="launch">
        <div className={styles.launchLead}>
          <p className={styles.sectionLabel}>Launch flow</p>
          <h2>Use this as the shell for your real website.</h2>
          <p>
            The design and copy are intentionally lightweight. You can now swap
            in your content, add real navigation, and connect data or forms
            without first having to bootstrap the app.
          </p>
        </div>
        <div className={styles.stepList}>
          {launchSteps.map((step) => (
            <article className={styles.stepCard} key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection} id="next-steps">
        <div>
          <p className={styles.sectionLabel}>Next steps</p>
          <h2>Customize the content, then connect the repo to Vercel.</h2>
        </div>
        <a
          className={styles.ctaLink}
          href="https://vercel.com/new"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Vercel when you are ready
        </a>
      </section>

      <footer className={styles.footer}>
        Built with Next.js, TypeScript, and CSS Modules as a simple starting
        point for FinchB4G.
      </footer>
    </main>
  );
}
