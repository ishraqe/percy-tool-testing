import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/login', label: 'Login' },
  { to: '/dashboard', label: 'Dashboard' }
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand">
          <span className="navbar-logo" aria-hidden="true">
            P
          </span>
          <span>
            <strong>Percy</strong>
            <small>Visual Testing Demo</small>
          </span>
        </Link>

        <nav className="navbar-links" aria-label="Main">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={pathname === to ? 'nav-link active' : 'nav-link'}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link to="/login" className="btn btn-primary navbar-cta">
          Get started
        </Link>
      </div>
    </header>
  );
}
