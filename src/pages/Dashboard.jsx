import Card from '../components/Card';
import PageLayout from '../components/PageLayout';

const recentActivity = [
  { id: 1, action: 'Snapshot approved', page: 'Homepage', user: 'Alex', time: '2 min ago', status: 'success' },
  { id: 2, action: 'Visual diff found', page: 'Login page', user: 'Sam', time: '18 min ago', status: 'warning' },
  { id: 3, action: 'Baseline updated', page: 'Dashboard', user: 'Jordan', time: '1 hr ago', status: 'success' },
  { id: 4, action: 'Build #1842 started', page: 'All pages', user: 'CI', time: '3 hr ago', status: 'neutral' },
];

const team = [
  { name: 'Alex Chen', role: 'Frontend', avatar: 'https://picsum.photos/seed/team1/64/64' },
  { name: 'Sam Rivera', role: 'QA', avatar: 'https://picsum.photos/seed/team2/64/64' },
  { name: 'Jordan Lee', role: 'Design', avatar: 'https://picsum.photos/seed/team3/64/64' },
  { name: 'Morgan Kim', role: 'DevOps', avatar: 'https://picsum.photos/seed/team4/64/64' },
];

export default function Dashboard() {
  return (
    <PageLayout>
      <div className="dashboard">
        <div className="container dashboard-header">
          <div>
            <span className="eyebrow">Overview</span>
            <h1>Dashboard</h1>
            <p className="dashboard-lead">
              Monitor snapshot activity, build health, and team approvals for
              this Percy demo project.
            </p>
          </div>
          <img
            src="https://picsum.photos/seed/dashboard-banner/200/120"
            alt=""
            className="dashboard-avatar-banner"
            width={200}
            height={120}
          />
        </div>

        <div className="container stats-row">
          <Card title="Active users" value="1,248" change="+12%" icon="👥" variant="blue" />
          <Card title="Orders today" value="86" change="+5%" icon="📦" variant="purple" />
          <Card title="Revenue (MTD)" value="$24,580" change="+18%" icon="💰" variant="green" />
          <Card title="Snapshots" value="342" change="+3%" icon="📸" variant="amber" />
        </div>

        <div className="container dashboard-grid">
          <section className="panel chart-panel">
            <div className="panel-header">
              <h2>Weekly snapshot volume</h2>
              <span className="badge badge-success">On track</span>
            </div>
            <div className="chart-bars" aria-hidden="true">
              {[42, 58, 45, 72, 68, 85, 91].map((h, i) => (
                <div
                  key={i}
                  className="chart-bar"
                  style={{ '--h': `${h}%` }}
                  title={`Day ${i + 1}: ${h}`}
                />
              ))}
            </div>
            <div className="chart-labels">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </section>

          <section className="panel activity-panel">
            <div className="panel-header">
              <h2>Recent activity</h2>
              <a href="#view-all">View all</a>
            </div>
            <ul className="activity-list">
              {recentActivity.map((item) => (
                <li key={item.id} className={`activity-item activity-item--${item.status}`}>
                  <div className="activity-dot" />
                  <div className="activity-body">
                    <strong>{item.action}</strong>
                    <span>
                      {item.page} · {item.user}
                    </span>
                  </div>
                  <time>{item.time}</time>
                </li>
              ))}
            </ul>
          </section>

          <section className="panel team-panel">
            <div className="panel-header">
              <h2>Team</h2>
            </div>
            <ul className="team-list">
              {team.map((member) => (
                <li key={member.name} className="team-member">
                  <img src={member.avatar} alt="" width={40} height={40} />
                  <div>
                    <strong>{member.name}</strong>
                    <span>{member.role}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="panel promo-panel">
            <img
              src="https://picsum.photos/seed/percy-promo/400/200"
              alt="Developers collaborating on visual tests"
              className="promo-image"
              width={400}
              height={200}
            />
            <h3>Upgrade your visual coverage</h3>
            <p>
              Add responsive breakpoints and cross-browser snapshots to catch
              more regressions before release.
            </p>
            <button type="button" className="btn btn-primary">
              Learn more
            </button>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
