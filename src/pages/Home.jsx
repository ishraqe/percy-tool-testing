import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const features = [
  {
    title: 'Catch visual bugs',
    description:
      'Percy compares screenshots on every build so unintended UI changes never reach production.',
    icon: '👁',
  },
  {
    title: 'Review with confidence',
    description:
      'Side-by-side diffs highlight exactly what changed — pixels, layout, and responsive breakpoints.',
    icon: '✓',
  },
  {
    title: 'Integrate in CI',
    description:
      'Run Playwright tests, capture snapshots, and gate merges from GitHub Actions or any pipeline.',
    icon: '⚡',
  },
];

const testimonials = [
  {
    quote:
      'We cut visual regression review time in half. The dashboard makes it obvious what shipped.',
    name: 'Alex Chen',
    role: 'Frontend Lead',
    avatar: 'https://picsum.photos/seed/alex/80/80',
  },
  {
    quote:
      'Percy snapshots in our React app caught a navbar regression before our users did.',
    name: 'Sam Rivera',
    role: 'QA Engineer',
    avatar: 'https://picsum.photos/seed/sam/80/80',
  },
];

export default function Home() {
  return (
    <PageLayout>
      <section className="hero">
        <div className="hero-inner container">
          <div className="hero-content">
            <span className="eyebrow">Visual regression testing</span>
            <h1 className="hero-title">
              Ship UI changes with{' '}
              <span className="serif">confidence</span>
            </h1>
            <p className="hero-lead">
              This demo React app is wired for Percy and Playwright. Explore
              each page, run visual snapshots, and see how automated screenshot
              comparison keeps your product looking right.
            </p>
            <div className="hero-actions">
              <Link to="/dashboard" className="btn btn-primary">
                View dashboard
              </Link>
              <Link to="/login" className="btn btn-secondary">
                Sign in
              </Link>
            </div>
            <ul className="hero-stats">
              <li>
                <strong>3</strong>
                <span>demo pages</span>
              </li>
              <li>
                <strong>12k+</strong>
                <span>snapshots / month</span>
              </li>
              <li>
                <strong>99.2%</strong>
                <span>build pass rate</span>
              </li>
            </ul>
          </div>
          <div className="hero-visual">
            <img
              src="https://picsum.photos/seed/percy-hero/640/480"
              alt="Team reviewing UI designs on a large monitor"
              className="hero-image"
              width={640}
              height={480}
            />
            <div className="hero-card-float">
              <span className="badge badge-success">✓ Snapshot passed</span>
              <p>Homepage · 1280×720 · 2.1s</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Why Percy</span>
            <h2>Everything you need for visual QA</h2>
            <p>
              From local development to CI, Percy fits into how modern teams
              already build and test React applications.
            </p>
          </div>
          <div className="grid-3">
            {features.map((f) => (
              <article key={f.title} className="feature-card">
                <span className="feature-icon" aria-hidden="true">
                  {f.icon}
                </span>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section showcase-section">
        <div className="container grid-2 showcase-grid">
          <img
            src="https://picsum.photos/seed/percy-diff/520/360"
            alt="Visual diff comparison between two UI versions"
            className="showcase-image"
            width={520}
            height={360}
          />
          <div>
            <span className="eyebrow">How it works</span>
            <h2>Snapshot → Compare → Approve</h2>
            <p>
              Playwright navigates to each route in this app. Percy captures a
              full-page screenshot and compares it to your approved baseline.
              When something shifts — color, spacing, copy — you review the diff
              in one place.
            </p>
            <ol className="steps-list">
              <li>Run <code>npx playwright test</code> with Percy enabled</li>
              <li>Review visual changes in the Percy dashboard</li>
              <li>Approve or request fixes before merge</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Team feedback</span>
            <h2>Trusted by shipping teams</h2>
          </div>
          <div className="grid-2">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="testimonial-card">
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <footer className="testimonial-author">
                  <img src={t.avatar} alt="" width={48} height={48} />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <div>
            <h2>Ready to explore the demo?</h2>
            <p>Head to the dashboard for metrics or sign in to see the login flow.</p>
          </div>
          <Link to="/dashboard" className="btn btn-primary">
            Open dashboard
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
