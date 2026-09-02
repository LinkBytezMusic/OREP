import './App.css'

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="brand">
          <span className="brand-icon">🌿</span>
          <div>
            <strong>Herbolaria</strong>
            <span>Artesanal</span>
          </div>
        </div>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#talleres">Talleres</a>
          <a href="#suscripcion">Suscripción</a>
        </nav>

        <button className="account-btn">Mi cuenta</button>
      </header>

      {/* HERO */}
      <main>

        <section id="inicio" className="hero-section">
          <div className="hero-content">
            <span className="eyebrow">🌱 SABIDURÍA NATURAL</span>

            <h1>
              El arte de crear
              <span> con plantas</span>
            </h1>

            <p>
              Descubre productos elaborados artesanalmente,
              talleres y el conocimiento detrás de cada preparación.
            </p>

            <div className="hero-buttons">
              <a href="#productos" className="primary-btn">
                Explorar productos
              </a>

              <a href="#talleres" className="secondary-btn">
                Ver talleres
              </a>
            </div>
          </div>

          <div className="hero-art">
            <div className="plant-circle">
              🌿
            </div>

            <div className="floating-card card-one">
              <span>🌿</span>
              <div>
                <strong>Natural</strong>
                <small>Hecho a mano</small>
              </div>
            </div>

            <div className="floating-card card-two">
              <span>✨</span>
              <div>
                <strong>Artesanal</strong>
                <small>Pequeños lotes</small>
              </div>
            </div>
          </div>
        </section>

        {/* PROMO */}
        <section className="promo-section">
          <div>
            <span>PRÓXIMO TALLER</span>
            <h2>Aprende a crear tus propios productos herbales</h2>
            <p>
              Una experiencia práctica para conocer plantas,
              ingredientes y técnicas tradicionales.
            </p>
          </div>

          <a href="#talleres" className="light-btn">
            Reservar mi espacio →
          </a>
        </section>

        {/* PRODUCTS */}
        <section id="productos" className="section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">NUESTRA COLECCIÓN</span>
              <h2>Productos artesanales</h2>
            </div>

            <a href="#">Ver todos →</a>
          </div>

          <div className="product-grid">

            <article className="product-card">
              <div className="product-image">🌿</div>
              <div className="product-info">
                <span>Aceites</span>
                <h3>Aceite Herbal</h3>
                <p>Preparación artesanal con plantas seleccionadas.</p>
                <strong>$18.00</strong>
              </div>
            </article>

            <article className="product-card">
              <div className="product-image">🧼</div>
              <div className="product-info">
                <span>Cuidado natural</span>
                <h3>Jabón Botánico</h3>
                <p>Elaborado en pequeños lotes de forma artesanal.</p>
                <strong>$12.00</strong>
              </div>
            </article>

            <article className="product-card">
              <div className="product-image">🌱</div>
              <div className="product-info">
                <span>Infusiones</span>
                <h3>Mezcla Herbal</h3>
                <p>Una combinación de plantas seleccionadas.</p>
                <strong>$15.00</strong>
              </div>
            </article>

          </div>
        </section>

        {/* WORKSHOPS */}
        <section id="talleres" className="workshop-section">
          <div className="workshop-content">
            <span className="eyebrow">APRENDE CON NOSOTROS</span>

            <h2>
              El conocimiento también
              <span> se cultiva.</span>
            </h2>

            <p>
              Participa en nuestros talleres y descubre paso a paso
              cómo transformamos ingredientes naturales en productos
              artesanales.
            </p>

            <a href="#" className="primary-btn">
              Ver próximos talleres
            </a>
          </div>

          <div className="workshop-preview">
            <div className="workshop-image">
              🌿
            </div>

            <div className="workshop-label">
              <strong>Taller de elaboración</strong>
              <span>Experiencia práctica</span>
            </div>
          </div>
        </section>

        {/* SUBSCRIPTION */}
        <section id="suscripcion" className="subscription-section">

          <div className="subscription-header">
            <span className="eyebrow">MEMBRESÍA</span>

            <h2>
              Entra al mundo
              <span> detrás de la elaboración.</span>
            </h2>

            <p>
              Contenido exclusivo para quienes quieren aprender
              más sobre nuestra forma de trabajar.
            </p>
          </div>

          <div className="subscription-card">

            <div className="subscription-preview">
              <div className="lock">🔒</div>

              <span>CONTENIDO EXCLUSIVO</span>

              <h3>
                Así elaboramos nuestro
                Aceite Herbal
              </h3>

              <p>
                Mira un adelanto del proceso de elaboración.
              </p>

              <button className="preview-btn">
                ▶ Ver preview
              </button>
            </div>

            <div className="subscription-details">

              <span className="member-label">
                HERBOLARIA ARTESANAL MEMBERS
              </span>

              <h3>Conviértete en miembro</h3>

              <ul>
                <li>✓ Videos exclusivos</li>
                <li>✓ Procesos de elaboración</li>
                <li>✓ Recetas y técnicas</li>
                <li>✓ Contenido nuevo cada mes</li>
                <li>✓ Acceso desde móvil y computadora</li>
              </ul>

              <div className="price">
                <strong>$9.99</strong>
                <span>/ mes</span>
              </div>

              <button className="subscribe-btn">
                Suscribirme
              </button>

            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="brand">
            <span className="brand-icon">🌿</span>
            <div>
              <strong>Herbolaria</strong>
              <span>Artesanal</span>
            </div>
          </div>

          <p>
            Sabiduría natural, elaboración artesanal.
          </p>

          <span>© 2026 Herbolaria Artesanal</span>
        </footer>

      </main>
    </div>
  )
}

export default App