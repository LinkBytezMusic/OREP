import "./PreviewPanel.css";

function PreviewPanel({ artistData }) {
  const {
    artist,
    hero,
    promo,
    products,
    workshops,
    subscription,
  } = artistData;

  return (
    <div className="preview-wrapper">

      <div className="preview-browser">

        <div className="preview-browser-bar">

          <div className="browser-dots">
            <span />
            <span />
            <span />
          </div>

          <div className="browser-url">
            listerradio.com/{artist.username}
          </div>

          <div className="browser-actions">
            ↗
          </div>

        </div>

        <div className="artist-page">

          {/* NAVBAR */}

          <header className="artist-navbar">

            <div className="artist-brand">

              <span className="artist-brand-icon">
                {artist.profileImage}
              </span>

              <div>
                <strong>{artist.name}</strong>
                <span>{artist.category}</span>
              </div>

            </div>

            <nav>
              <a href="#preview-home">Inicio</a>
              <a href="#preview-products">Productos</a>
              <a href="#preview-workshops">Talleres</a>
              <a href="#preview-subscription">
                Suscripción
              </a>
            </nav>

            <button className="preview-account-btn">
              Mi cuenta
            </button>

          </header>

          {/* HERO */}

          <section
            id="preview-home"
            className="preview-hero"
          >

            <div className="preview-hero-content">

              <span className="preview-eyebrow">
                {hero.eyebrow}
              </span>

              <h1>
                {hero.title}
                <span>{hero.highlight}</span>
              </h1>

              <p>{hero.description}</p>

              <div className="preview-hero-buttons">

                <button className="preview-primary-btn">
                  {hero.primaryButton}
                </button>

                <button className="preview-secondary-btn">
                  {hero.secondaryButton}
                </button>

              </div>

            </div>

            <div className="preview-hero-art">

              <div className="preview-plant-circle">
                {hero.image}
              </div>

              <div className="preview-floating-card preview-card-one">
                <span>🌿</span>

                <div>
                  <strong>Natural</strong>
                  <small>Hecho a mano</small>
                </div>
              </div>

              <div className="preview-floating-card preview-card-two">
                <span>✨</span>

                <div>
                  <strong>Artesanal</strong>
                  <small>Pequeños lotes</small>
                </div>
              </div>

            </div>

          </section>

          {/* PROMO */}

          <section className="preview-promo">

            <div>
              <span>{promo.label}</span>

              <h2>{promo.title}</h2>

              <p>{promo.description}</p>
            </div>

            <button className="preview-light-btn">
              {promo.button}
            </button>

          </section>

          {/* PRODUCTS */}

          <section
            id="preview-products"
            className="preview-section"
          >

            <div className="preview-section-heading">

              <div>
                <span className="preview-eyebrow">
                  NUESTRA COLECCIÓN
                </span>

                <h2>Productos artesanales</h2>
              </div>

              <button>Ver todos →</button>

            </div>

            <div className="preview-product-grid">

              {products.map((product) => (
                <article
                  className="preview-product-card"
                  key={product.id}
                >

                  <div className="preview-product-image">
                    {product.image}
                  </div>

                  <div className="preview-product-info">

                    <span>{product.category}</span>

                    <h3>{product.name}</h3>

                    <p>{product.description}</p>

                    <strong>
                      ${product.price}
                    </strong>

                  </div>

                </article>
              ))}

            </div>

          </section>

          {/* WORKSHOPS */}

          <section
            id="preview-workshops"
            className="preview-workshop"
          >

            <div className="preview-workshop-content">

              <span className="preview-eyebrow">
                {workshops.eyebrow}
              </span>

              <h2>
                {workshops.title}
                <span>{workshops.highlight}</span>
              </h2>

              <p>
                {workshops.description}
              </p>

              <button className="preview-primary-btn">
                {workshops.button}
              </button>

            </div>

            <div className="preview-workshop-art">

              <div className="preview-workshop-image">
                {workshops.image}
              </div>

              <div className="preview-workshop-label">
                <strong>{workshops.label}</strong>
                <span>{workshops.subtitle}</span>
              </div>

            </div>

          </section>

          {/* SUBSCRIPTION */}

          <section
            id="preview-subscription"
            className="preview-subscription"
          >

            <div className="preview-subscription-header">

              <span className="preview-eyebrow">
                {subscription.eyebrow}
              </span>

              <h2>
                {subscription.title}
                <span>{subscription.highlight}</span>
              </h2>

              <p>
                {subscription.description}
              </p>

            </div>

            <div className="preview-subscription-card">

              <div className="preview-subscription-preview">

                <div className="preview-lock">
                  🔒
                </div>

                <span>
                  {subscription.previewLabel}
                </span>

                <h3>
                  {subscription.previewTitle}
                </h3>

                <p>
                  {subscription.previewDescription}
                </p>

                <button>
                  {subscription.previewButton}
                </button>

              </div>

              <div className="preview-subscription-details">

                <span className="preview-member-label">
                  {subscription.memberLabel}
                </span>

                <h3>
                  {subscription.memberTitle}
                </h3>

                <ul>
                  {subscription.benefits.map(
                    (benefit, index) => (
                      <li key={index}>
                        ✓ {benefit}
                      </li>
                    )
                  )}
                </ul>

                <div className="preview-price">
                  <strong>
                    ${subscription.price}
                  </strong>

                  <span>
                    {subscription.period}
                  </span>
                </div>

                <button className="preview-subscribe-btn">
                  {subscription.button}
                </button>

              </div>

            </div>

          </section>

          {/* FOOTER */}

          <footer className="preview-footer">

            <div className="artist-brand">

              <span className="artist-brand-icon">
                {artist.profileImage}
              </span>

              <div>
                <strong>{artist.name}</strong>
                <span>{artist.category}</span>
              </div>

            </div>

            <p>
              Sabiduría natural, elaboración artesanal.
            </p>

            <span>
              © 2026 {artist.name}
            </span>

          </footer>

        </div>
      </div>
    </div>
  );
}

export default PreviewPanel;