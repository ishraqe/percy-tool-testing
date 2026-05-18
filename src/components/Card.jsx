export default function Card({ title, value, change, icon, variant = 'default' }) {
  return (
    <article className={`stat-card stat-card--${variant}`}>
      <div className="stat-card-header">
        <span className="stat-card-icon" aria-hidden="true">
          {icon}
        </span>
        {change && (
          <span className={`badge ${change.startsWith('+') ? 'badge-success' : 'badge-warning'}`}>
            {change}
          </span>
        )}
      </div>
      <p className="stat-card-label">{title}</p>
      <p className="stat-card-value">{value}</p>
    </article>
  );
}
