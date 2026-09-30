import { useState } from "react";
import "./AdminView.css";

function AdminView() {
  const [activeSection, setActiveSection] = useState("resumen");

  // =========================================================
  // DATOS DEMO
  // Después los conectamos con Firebase
  // =========================================================

  const workshopUsers = [
    {
      id: 1,
      name: "María Rodríguez",
      email: "maria@email.com",
      phone: "787-555-1234",
      town: "Caguas",
      workshop: "Introducción a las Plantas Medicinales",
      date: "30 Sep 2026",
      status: "Pendiente",
    },
    {
      id: 2,
      name: "Carlos Rivera",
      email: "carlos@email.com",
      phone: "787-555-4567",
      town: "Bayamón",
      workshop: "Elaboración de Remedios Naturales",
      date: "29 Sep 2026",
      status: "Confirmado",
    },
    {
      id: 3,
      name: "Ana Torres",
      email: "ana@email.com",
      phone: "787-555-7890",
      town: "San Juan",
      workshop: "Introducción a las Plantas Medicinales",
      date: "28 Sep 2026",
      status: "Confirmado",
    },
  ];

  const productSales = [
    {
      id: 1,
      customer: "José Martínez",
      email: "jose@email.com",
      product: "Aceite Herbal",
      price: 18,
      date: "30 Sep 2026",
      status: "Pagado",
    },
    {
      id: 2,
      customer: "Laura Pérez",
      email: "laura@email.com",
      product: "Té Digestivo",
      price: 12,
      date: "29 Sep 2026",
      status: "Pagado",
    },
    {
      id: 3,
      customer: "Miguel Santos",
      email: "miguel@email.com",
      product: "Bálsamo Natural",
      price: 15,
      date: "28 Sep 2026",
      status: "Pendiente",
    },
  ];

  const subscriptions = [
    {
      id: 1,
      customer: "Sofía González",
      email: "sofia@email.com",
      plan: "Membresía Herbal",
      price: 15,
      date: "30 Sep 2026",
      status: "Activa",
    },
    {
      id: 2,
      customer: "Daniel López",
      email: "daniel@email.com",
      plan: "Membresía Herbal",
      price: 15,
      date: "27 Sep 2026",
      status: "Activa",
    },
    {
      id: 3,
      customer: "Patricia Vega",
      email: "patricia@email.com",
      plan: "Membresía Herbal",
      price: 15,
      date: "20 Sep 2026",
      status: "Activa",
    },
  ];

  const totalSales = productSales.reduce(
    (total, sale) => total + sale.price,
    0
  );

  const totalSubscriptions = subscriptions.reduce(
    (total, subscription) => total + subscription.price,
    0
  );

  const totalRevenue = totalSales + totalSubscriptions;

  // =========================================================
  // NAVEGACIÓN
  // =========================================================

  const renderSection = () => {
    if (activeSection === "talleres") {
      return (
        <section className="admin-section">
          <div className="section-title">
            <div>
              <span className="admin-eyebrow">
                INSCRIPCIONES
              </span>
              <h2>Personas inscritas</h2>
              <p>
                Personas que solicitaron participar en los
                talleres.
              </p>
            </div>

            <span className="section-count">
              {workshopUsers.length} inscritos
            </span>
          </div>

          <div className="admin-table">
            <div className="table-header workshop-grid">
              <span>Persona</span>
              <span>Taller</span>
              <span>Pueblo</span>
              <span>Fecha</span>
              <span>Estado</span>
            </div>

            {workshopUsers.map((user) => (
              <div
                className="table-row workshop-grid"
                key={user.id}
              >
                <div className="person-cell">
                  <div className="person-avatar">
                    {user.name.charAt(0)}
                  </div>

                  <div>
                    <strong>{user.name}</strong>
                    <small>{user.email}</small>
                    <small>{user.phone}</small>
                  </div>
                </div>

                <span>{user.workshop}</span>

                <span>{user.town}</span>

                <span>{user.date}</span>

                <span
                  className={`status status-${user.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {user.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      );
    }

    if (activeSection === "ventas") {
      return (
        <section className="admin-section">
          <div className="section-title">
            <div>
              <span className="admin-eyebrow">
                PRODUCTOS
              </span>
              <h2>Ventas</h2>
              <p>
                Productos comprados desde la página.
              </p>
            </div>

            <span className="section-count">
              ${totalSales.toFixed(2)}
            </span>
          </div>

          <div className="admin-table">
            <div className="table-header sales-grid">
              <span>Cliente</span>
              <span>Producto</span>
              <span>Precio</span>
              <span>Fecha</span>
              <span>Estado</span>
            </div>

            {productSales.map((sale) => (
              <div
                className="table-row sales-grid"
                key={sale.id}
              >
                <div className="person-cell">
                  <div className="person-avatar">
                    {sale.customer.charAt(0)}
                  </div>

                  <div>
                    <strong>{sale.customer}</strong>
                    <small>{sale.email}</small>
                  </div>
                </div>

                <span>{sale.product}</span>

                <strong>${sale.price.toFixed(2)}</strong>

                <span>{sale.date}</span>

                <span
                  className={`status status-${sale.status.toLowerCase()}`}
                >
                  {sale.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      );
    }

    if (activeSection === "suscripciones") {
      return (
        <section className="admin-section">
          <div className="section-title">
            <div>
              <span className="admin-eyebrow">
                MEMBRESÍAS
              </span>
              <h2>Suscripciones</h2>
              <p>
                Personas que tienen una membresía activa.
              </p>
            </div>

            <span className="section-count">
              {subscriptions.length} activas
            </span>
          </div>

          <div className="admin-table">
            <div className="table-header subscription-grid">
              <span>Cliente</span>
              <span>Membresía</span>
              <span>Precio</span>
              <span>Fecha</span>
              <span>Estado</span>
            </div>

            {subscriptions.map((subscription) => (
              <div
                className="table-row subscription-grid"
                key={subscription.id}
              >
                <div className="person-cell">
                  <div className="person-avatar">
                    {subscription.customer.charAt(0)}
                  </div>

                  <div>
                    <strong>
                      {subscription.customer}
                    </strong>

                    <small>
                      {subscription.email}
                    </small>
                  </div>
                </div>

                <span>{subscription.plan}</span>

                <strong>
                  ${subscription.price.toFixed(2)}
                </strong>

                <span>{subscription.date}</span>

                <span
                  className={`status status-${subscription.status.toLowerCase()}`}
                >
                  {subscription.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      );
    }

    return (
      <section className="dashboard-section">
        <div className="welcome-card">
          <div>
            <span className="admin-eyebrow">
              HERBOLARIA ARTESANAL
            </span>

            <h2>
              Tu negocio, en un solo lugar.
            </h2>

            <p>
              Aquí puedes revisar las personas que se
              inscriben a tus talleres, las compras de
              productos y las membresías.
            </p>
          </div>

          <div className="welcome-icon">
            🌿
          </div>
        </div>

        <div className="stats-grid">
          <button
            className="stat-card"
            onClick={() =>
              setActiveSection("talleres")
            }
          >
            <span className="stat-icon">🌱</span>

            <div>
              <small>INSCRITOS A TALLERES</small>
              <strong>{workshopUsers.length}</strong>
            </div>

            <span className="stat-arrow">→</span>
          </button>

          <button
            className="stat-card"
            onClick={() =>
              setActiveSection("ventas")
            }
          >
            <span className="stat-icon">🧺</span>

            <div>
              <small>VENTAS DE PRODUCTOS</small>
              <strong>
                ${totalSales.toFixed(2)}
              </strong>
            </div>

            <span className="stat-arrow">→</span>
          </button>

          <button
            className="stat-card"
            onClick={() =>
              setActiveSection("suscripciones")
            }
          >
            <span className="stat-icon">🌿</span>

            <div>
              <small>SUSCRIPCIONES ACTIVAS</small>
              <strong>
                {subscriptions.length}
              </strong>
            </div>

            <span className="stat-arrow">→</span>
          </button>

          <div className="stat-card revenue-card">
            <span className="stat-icon">✦</span>

            <div>
              <small>INGRESOS REGISTRADOS</small>
              <strong>
                ${totalRevenue.toFixed(2)}
              </strong>
            </div>
          </div>
        </div>

        <div className="recent-grid">
          <div className="recent-card">
            <div className="recent-header">
              <div>
                <span className="admin-eyebrow">
                  ÚLTIMOS
                </span>
                <h3>Inscripciones</h3>
              </div>

              <button
                onClick={() =>
                  setActiveSection("talleres")
                }
              >
                Ver todas →
              </button>
            </div>

            <div className="recent-list">
              {workshopUsers.slice(0, 3).map((user) => (
                <div
                  className="recent-item"
                  key={user.id}
                >
                  <div className="person-avatar">
                    {user.name.charAt(0)}
                  </div>

                  <div>
                    <strong>{user.name}</strong>
                    <small>{user.town}</small>
                  </div>

                  <span>
                    {user.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="recent-card">
            <div className="recent-header">
              <div>
                <span className="admin-eyebrow">
                  ACTIVIDAD
                </span>
                <h3>Últimas ventas</h3>
              </div>

              <button
                onClick={() =>
                  setActiveSection("ventas")
                }
              >
                Ver todas →
              </button>
            </div>

            <div className="recent-list">
              {productSales.slice(0, 3).map((sale) => (
                <div
                  className="recent-item"
                  key={sale.id}
                >
                  <div className="product-mini">
                    🧺
                  </div>

                  <div>
                    <strong>{sale.product}</strong>
                    <small>{sale.customer}</small>
                  </div>

                  <strong>
                    ${sale.price.toFixed(2)}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="admin-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="admin-header">
        <div className="admin-brand">
          <div className="admin-brand-icon">
            🌿
          </div>

          <div>
            <strong>Herbolaria Artesanal</strong>
            <span>Panel de administración</span>
          </div>
        </div>

        <div className="admin-header-right">
          <span className="admin-live">
            <span></span>
            Panel activo
          </span>

          <button
            className="admin-view-page"
            onClick={() => {
              window.history.pushState(
                {},
                "",
                "/"
              );
              window.location.reload();
            }}
          >
            Ver página
          </button>
        </div>
      </header>

      {/* =====================================================
          BODY
      ===================================================== */}

      <div className="admin-layout">

        <aside className="admin-sidebar">
          <div className="sidebar-label">
            ADMINISTRACIÓN
          </div>

          <button
            className={
              activeSection === "resumen"
                ? "admin-nav active"
                : "admin-nav"
            }
            onClick={() =>
              setActiveSection("resumen")
            }
          >
            <span>⌂</span>
            Resumen
          </button>

          <button
            className={
              activeSection === "talleres"
                ? "admin-nav active"
                : "admin-nav"
            }
            onClick={() =>
              setActiveSection("talleres")
            }
          >
            <span>🌱</span>
            Talleres
            <b>{workshopUsers.length}</b>
          </button>

          <button
            className={
              activeSection === "ventas"
                ? "admin-nav active"
                : "admin-nav"
            }
            onClick={() =>
              setActiveSection("ventas")
            }
          >
            <span>🧺</span>
            Ventas
            <b>{productSales.length}</b>
          </button>

          <button
            className={
              activeSection === "suscripciones"
                ? "admin-nav active"
                : "admin-nav"
            }
            onClick={() =>
              setActiveSection("suscripciones")
            }
          >
            <span>✦</span>
            Suscripciones
            <b>{subscriptions.length}</b>
          </button>

          <div className="sidebar-bottom">
            <div className="admin-profile">
              <div className="admin-avatar">
                H
              </div>

              <div>
                <strong>Administrador</strong>
                <span>Herbolaria</span>
              </div>
            </div>
          </div>
        </aside>

        <main className="admin-main">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}

export default AdminView;