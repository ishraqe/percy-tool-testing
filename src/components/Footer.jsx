import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <span className="navbar-logo" aria-hidden="true">
            P
          </span>
          <p>
            Demo app for Percy visual regression testing with React and
            Playwright.
          </p>
        </div>

        <div>
          <h4>Pages</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="https://www.browserstack.com/percy" target="_blank" rel="noreferrer">
                Percy docs
              </a>
            </li>
            <li>
              <a href="https://playwright.dev" target="_blank" rel="noreferrer">
                Playwright
              </a>
            </li>
            <li>
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                React
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>demo@percy-react.app</p>
          <p>Seven Peaks · Bangkok</p>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© 2026 Percy React Demo. Built for visual snapshot testing.</p>
      </div>
    </footer>
  );
}
