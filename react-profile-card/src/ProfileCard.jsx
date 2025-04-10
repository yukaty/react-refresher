export function ProfileCard({ name, title, bio }) {
    return (
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px'
      }}>
        <h2>{name}</h2>
        <h3>{title}</h3>
        <p>{bio}</p>
      </div>
    );
  }

