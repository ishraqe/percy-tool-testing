import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

export default function Login() {
  return (
    <PageLayout>
      <section className="login-page">
        <div className="login-panel login-panel--brand">
          <img
            src="https://picsum.photos/seed/percy-login/600/800"
            alt=""
            className="login-bg-image"
            aria-hidden="true"
          />
          <div className="login-brand-content">
            <span className="eyebrow">Percy demo</span>
            <h2 className="serif">Welcome back</h2>
            <p>
              Sign in to access your visual testing workspace. This screen is
              included in Percy snapshots to catch layout and form regressions.
            </p>
            <ul className="login-benefits">
              <li>Review snapshot history</li>
              <li>Approve baseline updates</li>
              <li>Manage project settings</li>
            </ul>
          </div>
        </div>

        <div className="login-panel login-panel--form">
          <div className="login-form-wrap">
            <h1>Sign in</h1>
            <p className="login-subtitle">
              Use any email and password — this is a demo with no backend.
            </p>

            <form className="login-form" onSubmit={(e) => e.preventDefault()}>
              <label className="field">
                <span>Email address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  defaultValue="demo@percy.app"
                />
              </label>

              <label className="field">
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  defaultValue="demopassword"
                />
              </label>

              <div className="login-options">
                <label className="checkbox">
                  <input type="checkbox" defaultChecked />
                  Remember me
                </label>
                <a href="#forgot">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-primary login-submit">
                Sign in
              </button>
            </form>

            <p className="login-divider">
              <span>or continue with</span>
            </p>

            <div className="login-social">
              <button type="button" className="btn btn-secondary">
                Google
              </button>
              <button type="button" className="btn btn-secondary">
                GitHub
              </button>
            </div>

            <p className="login-footer-text">
              Don&apos;t have an account?{' '}
              <Link to="/dashboard">Try the dashboard</Link>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
