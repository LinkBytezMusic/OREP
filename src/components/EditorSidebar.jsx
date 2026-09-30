import "./EditorSidebar.css";

function EditorSidebar({ activeSection, setActiveSection }) {
  const sections = [
    {
      id: "home",
      icon: "🏠",
      label: "Inicio",
    },
    {
      id: "products",
      icon: "🛍️",
      label: "Productos",
    },
    {
      id: "workshops",
      icon: "🎓",
      label: "Talleres",
    },
    {
      id: "subscription",
      icon: "💎",
      label: "Membresía",
    },
    {
      id: "settings",
      icon: "⚙️",
      label: "Ajustes",
    },
  ];

  return (
    <aside className="editor-sidebar">

      <div className="sidebar-brand">
        <div className="sidebar-logo">🌿</div>

        <div>
          <strong>Lister</strong>
          <span>Artist Studio</span>
        </div>
      </div>

      <div className="sidebar-divider" />

      <div className="sidebar-profile">
        <div className="profile-avatar">🌿</div>

        <div className="profile-info">
          <strong>Herbolaria</strong>
          <span>Artista</span>
        </div>

        <span className="profile-arrow">›</span>
      </div>

      <div className="sidebar-divider" />

      <p className="sidebar-title">MI PÁGINA</p>

      <nav className="sidebar-nav">
        {sections.map((section) => (
          <button
            key={section.id}
            className={
              activeSection === section.id
                ? "sidebar-item active"
                : "sidebar-item"
            }
            onClick={() => setActiveSection(section.id)}
          >
            <span className="sidebar-icon">
              {section.icon}
            </span>

            <span>{section.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">

        <button className="sidebar-item">
          <span className="sidebar-icon">👁️</span>
          <span>Ver página</span>
        </button>

        <button className="sidebar-item">
          <span className="sidebar-icon">❓</span>
          <span>Ayuda</span>
        </button>

      </div>
    </aside>
  );
}

export default EditorSidebar;