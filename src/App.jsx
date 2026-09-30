import { useState } from "react";
import "./App.css";
import AdminView from "./views/AdminView";
import ArtistEditor from "./views/ArtistEditor";
import mockArtistData from "./data/mockArtistData";

function App() {
  const [currentView, setCurrentView] = useState(() => {
    if (window.location.pathname === "/editor") {
      return "editor";
    }

    if (window.location.pathname === "/admin") {
      return "admin";
    }

    return "public";
  });

  const [artistData] = useState(mockArtistData);
  // =========================================================
  // MODALS
  // =========================================================

  const [activeModal, setActiveModal] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // =========================================================
  // FORMULARIO TALLER
  // =========================================================

  const [workshopForm, setWorkshopForm] = useState({
    name: "",
    email: "",
    phone: "",
    town: "",
  });

  // =========================================================
  // NAVEGACIÓN
  // =========================================================

  const goToEditor = () => {
    window.history.pushState({}, "", "/editor");
    setCurrentView("editor");
    window.scrollTo(0, 0);
  };

  const goToPublic = () => {
    window.history.pushState({}, "", "/");
    setCurrentView("public");
    window.scrollTo(0, 0);
  };



  
  // =========================================================
  // MODALS
  // =========================================================

  const closeModal = () => {
    setActiveModal(null);
    setSelectedProduct(null);
  };

  const openWorkshop = () => {
    setActiveModal("workshop");
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
    setActiveModal("product");
  };

  const openSubscription = () => {
    setActiveModal("subscription");
  };

  const openVideo = () => {
    setActiveModal("video");
  };

  // =========================================================
  // FORMULARIO TALLER
  // =========================================================

  const handleWorkshopChange = (event) => {
    const { name, value } = event.target;

    setWorkshopForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleWorkshopSubmit = (event) => {
    event.preventDefault();

    alert(
      "¡Registro recibido! Pronto nos pondremos en contacto contigo."
    );

    setWorkshopForm({
      name: "",
      email: "",
      phone: "",
      town: "",
    });

    closeModal();
  };
// =========================================================
// ADMIN
// =========================================================

if (currentView === "admin") {
  return <AdminView />;
}
  // =========================================================
  // EDITOR
  // =========================================================

  if (currentView === "editor") {
    return (
      <div className="editor-app">

        <ArtistEditor />

        <button
          type="button"
          className="back-to-page-btn"
          onClick={goToPublic}
          aria-label="Volver a la página pública"
        >
          ← Ver página
        </button>

      </div>
    );
  }

  // =========================================================
  // DATA
  // =========================================================

  const {
    artist,
    hero,
    promo,
    products,
    workshops,
    subscription,
    settings,
  } = artistData;

  // =========================================================
  // PÁGINA PÚBLICA
  // =========================================================

  return (
    <div className="app">

      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <header className="navbar">

        <a
          href="#inicio"
          className="brand"
          aria-label={`Ir al inicio de ${artist.name}`}
        >

          <span className="brand-icon">
            {artist.profileImage}
          </span>

          <div className="brand-text">

            <strong>
              {artist.name}
            </strong>

            <span>
              {artist.category}
            </span>

          </div>

        </a>

        <nav className="main-nav">

          <a href="#inicio">
            Inicio
          </a>

          <a href="#productos">
            Productos
          </a>

          <a href="#talleres">
            Talleres
          </a>

          <a href="#suscripcion">
            Membresía
          </a>

        </nav>

       <div className="navbar-actions">
  <button
    type="button"
    className="admin-page-btn"
    onClick={() => {
      window.history.pushState({}, "", "/admin");
      setCurrentView("admin");
      window.scrollTo(0, 0);
    }}
  >
    Admin
  </button>

  <button
    type="button"
    className="edit-page-btn"
    onClick={goToEditor}
  >
    <span className="edit-icon">✎</span>
    <span>Editar página</span>
  </button>
</div>

      </header>

      {/* =====================================================
          MAIN
          ===================================================== */}

      <main>

        {/* ===================================================
            HERO
            =================================================== */}

        <section
          id="inicio"
          className="hero-section"
        >

          <div className="hero-content">

            <span className="eyebrow">
              {hero.eyebrow}
            </span>

            <h1>
              {hero.title}

              <span>
                {" "}
                {hero.highlight}
              </span>
            </h1>

            <p>
              {hero.description}
            </p>

            <div className="hero-buttons">

              <a
                href="#productos"
                className="primary-btn"
              >
                {hero.primaryButton}
              </a>

              <a
                href="#talleres"
                className="secondary-btn"
              >
                {hero.secondaryButton}
              </a>

            </div>

          </div>

          <div className="hero-art">

            <div className="plant-circle">
              {hero.image}
            </div>

            <div className="floating-card card-one">

              <span>
                🌿
              </span>

              <div>

                <strong>
                  Natural
                </strong>

                <small>
                  Hecho a mano
                </small>

              </div>

            </div>

            <div className="floating-card card-two">

              <span>
                ✨
              </span>

              <div>

                <strong>
                  Artesanal
                </strong>

                <small>
                  Pequeños lotes
                </small>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            PROMO
            =================================================== */}

        <section className="promo-section">

          <div>

            <span>
              {promo.label}
            </span>

            <h2>
              {promo.title}
            </h2>

            <p>
              {promo.description}
            </p>

          </div>

          <button
            type="button"
            className="light-btn"
            onClick={openWorkshop}
          >
            {promo.button}
          </button>

        </section>

        {/* ===================================================
            PRODUCTS
            =================================================== */}

        <section
          id="productos"
          className="section"
        >

          <div className="section-heading">

            <div>

              <span className="eyebrow">
                NUESTRA COLECCIÓN
              </span>

              <h2>
                Productos artesanales
              </h2>

            </div>

            <a href="#productos">
              Ver todos →
            </a>

          </div>

          <div className="product-grid">

            {products.map((product) => (

              <article
                className="product-card"
                key={product.id}
              >

                <div className="product-image">
                  {product.image}
                </div>

                <div className="product-info">

                  <span>
                    {product.category}
                  </span>

                  <h3>
                    {product.name}
                  </h3>

                  <p>
                    {product.description}
                  </p>

                  <strong>
                    ${product.price}
                  </strong>

                  <button
                    type="button"
                    className="primary-btn"
                    onClick={() => openProduct(product)}
                  >
                    Comprar
                  </button>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* ===================================================
            WORKSHOPS
            =================================================== */}

        <section
          id="talleres"
          className="workshop-section"
        >

          <div className="workshop-content">

            <span className="eyebrow">
              {workshops.eyebrow}
            </span>

            <h2>

              {workshops.title}

              <span>
                {workshops.highlight}
              </span>

            </h2>

            <p>
              {workshops.description}
            </p>

            <button
              type="button"
              className="primary-btn"
              onClick={openWorkshop}
            >
              {workshops.button}
            </button>

          </div>

          <div className="workshop-preview">

            <div className="workshop-image">
              {workshops.image}
            </div>

            <div className="workshop-label">

              <strong>
                {workshops.label}
              </strong>

              <span>
                {workshops.subtitle}
              </span>

            </div>

          </div>

        </section>

        {/* ===================================================
            SUBSCRIPTION
            =================================================== */}

        <section
          id="suscripcion"
          className="subscription-section"
        >

          <div className="subscription-header">

            <span className="eyebrow">
              {subscription.eyebrow}
            </span>

            <h2>

              {subscription.title}

              <span>
                {subscription.highlight}
              </span>

            </h2>

            <p>
              {subscription.description}
            </p>

          </div>

          <div className="subscription-card">

            {/* PREVIEW */}

            <div className="subscription-preview">

              <div className="lock">
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

              <button
                type="button"
                className="preview-btn"
                onClick={openVideo}
              >
                ▶ Ver contenido
              </button>

            </div>

            {/* MEMBERSHIP */}

            <div className="subscription-details">

              <span className="member-label">
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

              <div className="price">

                <strong>
                  ${subscription.price}
                </strong>

                <span>
                  {subscription.period}
                </span>

              </div>

              <button
                type="button"
                className="subscribe-btn"
                onClick={openSubscription}
              >
                {subscription.button}
              </button>

            </div>

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer>

        <div className="footer-main">

          <div className="brand">

            <span className="brand-icon">
              {artist.profileImage}
            </span>

            <div className="brand-text">

              <strong>
                {artist.name}
              </strong>

              <span>
                {artist.category}
              </span>

            </div>

          </div>

          <p>
            Sabiduría natural, elaboración artesanal.
          </p>

        </div>

        <div className="footer-contact">

          <span>
            {settings.instagram}
          </span>

          <span>
            {settings.website}
          </span>

          <span>
            {settings.email}
          </span>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 {artist.name}
          </span>

          <button
            type="button"
            onClick={goToEditor}
            className="footer-edit-btn"
          >
            ✎ Editar página
          </button>

        </div>

      </footer>

      {/* =====================================================
          MODAL GENERAL
          ===================================================== */}

      {activeModal && (

        <div
          className="modal-overlay"
          onClick={closeModal}
        >

          <div
            className="modal-card"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              className="modal-close"
              onClick={closeModal}
              aria-label="Cerrar"
            >
              ×
            </button>

            {/* =================================================
                TALLER
                ================================================= */}

            {activeModal === "workshop" && (

              <div>

                <span className="eyebrow">
                  TALLER
                </span>

                <h2>
                  Reserva tu espacio
                </h2>

                <p>
                  Déjanos tus datos y nos pondremos en contacto
                  contigo para confirmar tu participación.
                </p>

                <form
                  onSubmit={handleWorkshopSubmit}
                  className="modal-form"
                >

                  <label>
                    Nombre

                    <input
                      type="text"
                      name="name"
                      value={workshopForm.name}
                      onChange={handleWorkshopChange}
                      placeholder="Tu nombre"
                      required
                    />

                  </label>

                  <label>
                    Email

                    <input
                      type="email"
                      name="email"
                      value={workshopForm.email}
                      onChange={handleWorkshopChange}
                      placeholder="tu@email.com"
                      required
                    />

                  </label>

                  <label>
                    Teléfono

                    <input
                      type="tel"
                      name="phone"
                      value={workshopForm.phone}
                      onChange={handleWorkshopChange}
                      placeholder="787-000-0000"
                      required
                    />

                  </label>

                  <label>
                    Pueblo

                    <input
                      type="text"
                      name="town"
                      value={workshopForm.town}
                      onChange={handleWorkshopChange}
                      placeholder="Tu pueblo"
                      required
                    />

                  </label>

                  <button
                    type="submit"
                    className="primary-btn modal-submit"
                  >
                    Solicitar espacio
                  </button>

                </form>

              </div>

            )}

            {/* =================================================
                PRODUCTO
                ================================================= */}

            {activeModal === "product" && selectedProduct && (

              <div>

                <div className="modal-product-image">
                  {selectedProduct.image}
                </div>

                <span className="eyebrow">
                  {selectedProduct.category}
                </span>

                <h2>
                  {selectedProduct.name}
                </h2>

                <p>
                  {selectedProduct.description}
                </p>

                <div className="modal-price">
                  ${selectedProduct.price}
                </div>

                <button
                  type="button"
                  className="primary-btn modal-submit"
                  onClick={() => {
                    alert(
                      "Producto seleccionado. Aquí conectaremos el proceso de pago."
                    );
                    closeModal();
                  }}
                >
                  Comprar ahora
                </button>

              </div>

            )}

            {/* =================================================
                SUBSCRIPTION
                ================================================= */}

            {activeModal === "subscription" && (

              <div>

                <span className="eyebrow">
                  MEMBRESÍA
                </span>

                <h2>
                  {subscription.memberTitle}
                </h2>

                <p>
                  Obtén acceso al contenido exclusivo de la
                  membresía.
                </p>

                <div className="modal-price">
                  ${subscription.price}
                  <small>
                    {subscription.period}
                  </small>
                </div>

                <ul className="modal-benefits">

                  {subscription.benefits.map(
                    (benefit, index) => (

                      <li key={index}>
                        ✓ {benefit}
                      </li>

                    )
                  )}

                </ul>

                <button
                  type="button"
                  className="subscribe-btn modal-submit"
                  onClick={() => {
                    alert(
                      "Membresía seleccionada. Aquí conectaremos el pago."
                    );
                    closeModal();
                  }}
                >
                  Continuar al pago
                </button>

              </div>

            )}

            {/* =================================================
                VIDEO
                ================================================= */}

            {activeModal === "video" && (

              <div>

                <span className="eyebrow">
                  CONTENIDO EXCLUSIVO
                </span>

                <h2>
                  {subscription.previewTitle}
                </h2>

                <div className="video-placeholder">

                  <div className="video-play">
                    ▶
                  </div>

                  <p>
                    Este contenido estará disponible para
                    miembros.
                  </p>

                </div>

                <button
                  type="button"
                  className="primary-btn modal-submit"
                  onClick={openSubscription}
                >
                  Obtener membresía
                </button>

              </div>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default App;