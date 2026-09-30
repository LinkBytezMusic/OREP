
import { useState } from "react";
import "../components/ArtistEditor.css";
import EditorSidebar from "../components/EditorSidebar";
import mockArtistData from "../data/mockArtistData";

function ArtistEditor() {
  const [activeSection, setActiveSection] = useState("home");
  const [artistData, setArtistData] = useState(mockArtistData);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  const sectionTitles = {
    home: "Inicio",
    products: "Productos",
    workshops: "Talleres",
    subscription: "Membresía",
    settings: "Configuración",
  };

  return (
    <div className="artist-editor">

      {/* =====================================================
          SIDEBAR
          ===================================================== */}

      <EditorSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* =====================================================
          MAIN EDITOR
          ===================================================== */}

      <main className="editor-main">

        {/* HEADER */}

        <header className="editor-header">

          <div className="editor-header-left">
            <h1>HELBOLARIA ARTESANAL</h1>
            <span>{sectionTitles[activeSection]}</span>
          </div>

          <div className="editor-header-actions">

            <button
              type="button"
              className="save-btn"
              onClick={handleSave}
            >
              {saved ? "✓ Guardado" : "Guardar"}
            </button>

          </div>

        </header>


        {/* ===================================================
            CONTENT
            =================================================== */}

        <div className="editor-content">

          <section className="editing-panel">

            {activeSection === "home" && (
              <HomeEditor
                artistData={artistData}
                setArtistData={setArtistData}
              />
            )}

            {activeSection === "products" && (
              <ProductsEditor
                artistData={artistData}
                setArtistData={setArtistData}
              />
            )}

            {activeSection === "workshops" && (
              <WorkshopsEditor
                artistData={artistData}
                setArtistData={setArtistData}
              />
            )}

            {activeSection === "subscription" && (
              <SubscriptionEditor
                artistData={artistData}
                setArtistData={setArtistData}
              />
            )}

            {activeSection === "settings" && (
              <SettingsEditor
                artistData={artistData}
                setArtistData={setArtistData}
              />
            )}

          </section>

        </div>

      </main>
    </div>
  );
}


/* ============================================================
   HOME EDITOR
   ============================================================ */

function HomeEditor({
  artistData,
  setArtistData,
}) {
  const hero = artistData.hero;

  const updateArtist = (field, value) => {
    setArtistData({
      ...artistData,
      artist: {
        ...artistData.artist,
        [field]: value,
      },
    });
  };

  const updateHero = (field, value) => {
    setArtistData({
      ...artistData,
      hero: {
        ...hero,
        [field]: value,
      },
    });
  };

  return (
    <div className="editor-form">

      <div className="form-section">

        <h2>Información básica</h2>

        <label>
          Nombre

          <input
            type="text"
            value={artistData.artist.name}
            onChange={(e) =>
              updateArtist("name", e.target.value)
            }
          />
        </label>

        <label>
          Categoría

          <input
            type="text"
            value={artistData.artist.category}
            onChange={(e) =>
              updateArtist("category", e.target.value)
            }
          />
        </label>

      </div>


      <div className="form-section">

        <h2>Presentación</h2>

        <label>
          Texto superior

          <input
            type="text"
            value={hero.eyebrow}
            onChange={(e) =>
              updateHero("eyebrow", e.target.value)
            }
          />
        </label>

        <label>
          Título

          <input
            type="text"
            value={hero.title}
            onChange={(e) =>
              updateHero("title", e.target.value)
            }
          />
        </label>

        <label>
          Texto destacado

          <input
            type="text"
            value={hero.highlight}
            onChange={(e) =>
              updateHero("highlight", e.target.value)
            }
          />
        </label>

        <label>
          Descripción

          <textarea
            value={hero.description}
            onChange={(e) =>
              updateHero("description", e.target.value)
            }
          />
        </label>

      </div>


      <div className="form-section">

        <h2>Botones</h2>

        <label>
          Botón principal

          <input
            type="text"
            value={hero.primaryButton}
            onChange={(e) =>
              updateHero("primaryButton", e.target.value)
            }
          />
        </label>

        <label>
          Botón secundario

          <input
            type="text"
            value={hero.secondaryButton}
            onChange={(e) =>
              updateHero("secondaryButton", e.target.value)
            }
          />
        </label>

      </div>


      <div className="form-section">

        <h2>Imagen principal</h2>

        <div className="image-placeholder">

          <span>Imagen</span>

          <strong>Imagen del Hero</strong>

          <small>
            Próximamente podrás subir una imagen.
          </small>

          <button type="button">
            Cambiar imagen
          </button>

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   PRODUCTS EDITOR
   ============================================================ */

function ProductsEditor({
  artistData,
  setArtistData,
}) {
  const products = artistData.products;

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      category: "Nueva categoría",
      name: "Nuevo producto",
      description: "Descripción del producto.",
      price: "0.00",
      image: "🌿",
    };

    setArtistData({
      ...artistData,
      products: [
        ...products,
        newProduct,
      ],
    });
  };

  const updateProduct = (
    id,
    field,
    value
  ) => {
    setArtistData({
      ...artistData,
      products: products.map(
        (product) =>
          product.id === id
            ? {
                ...product,
                [field]: value,
              }
            : product
      ),
    });
  };

  const deleteProduct = (id) => {
    setArtistData({
      ...artistData,
      products: products.filter(
        (product) =>
          product.id !== id
      ),
    });
  };

  return (
    <div className="editor-form">

      <div className="editor-list-header">

        <div>
          <h2>Productos</h2>

          <p>
            Administra los productos que
            aparecerán en tu página.
          </p>
        </div>

        <button
          type="button"
          className="add-btn"
          onClick={addProduct}
        >
          + Añadir producto
        </button>

      </div>


      <div className="product-editor-list">

        {products.map((product) => (

          <div
            className="product-editor-card"
            key={product.id}
          >

            <div className="product-editor-image">
              {product.image}
            </div>


            <div className="product-editor-fields">

              <label>
                Categoría

                <input
                  type="text"
                  value={product.category}
                  onChange={(e) =>
                    updateProduct(
                      product.id,
                      "category",
                      e.target.value
                    )
                  }
                />
              </label>


              <label>
                Nombre

                <input
                  type="text"
                  value={product.name}
                  onChange={(e) =>
                    updateProduct(
                      product.id,
                      "name",
                      e.target.value
                    )
                  }
                />
              </label>


              <label>
                Descripción

                <textarea
                  value={product.description}
                  onChange={(e) =>
                    updateProduct(
                      product.id,
                      "description",
                      e.target.value
                    )
                  }
                />
              </label>


              <label>
                Precio

                <input
                  type="text"
                  value={product.price}
                  onChange={(e) =>
                    updateProduct(
                      product.id,
                      "price",
                      e.target.value
                    )
                  }
                />
              </label>

            </div>


            <button
              type="button"
              className="delete-btn"
              onClick={() =>
                deleteProduct(product.id)
              }
              aria-label="Eliminar producto"
              title="Eliminar producto"
            >
              Eliminar
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}


/* ============================================================
   WORKSHOPS EDITOR
   ============================================================ */

function WorkshopsEditor({
  artistData,
  setArtistData,
}) {
  const workshops = artistData.workshops;

  const updateWorkshop = (
    field,
    value
  ) => {
    setArtistData({
      ...artistData,
      workshops: {
        ...workshops,
        [field]: value,
      },
    });
  };

  return (
    <div className="editor-form">

      <div className="editor-list-header">

        <div>
          <h2>Talleres</h2>

          <p>
            Personaliza la sección de
            talleres de tu página.
          </p>

        </div>

      </div>


      <div className="form-section">

        <label>
          Texto superior

          <input
            type="text"
            value={workshops.eyebrow}
            onChange={(e) =>
              updateWorkshop(
                "eyebrow",
                e.target.value
              )
            }
          />
        </label>


        <label>
          Título

          <input
            type="text"
            value={workshops.title}
            onChange={(e) =>
              updateWorkshop(
                "title",
                e.target.value
              )
            }
          />
        </label>


        <label>
          Texto destacado

          <input
            type="text"
            value={workshops.highlight}
            onChange={(e) =>
              updateWorkshop(
                "highlight",
                e.target.value
              )
            }
          />
        </label>


        <label>
          Descripción

          <textarea
            value={workshops.description}
            onChange={(e) =>
              updateWorkshop(
                "description",
                e.target.value
              )
            }
          />
        </label>


        <label>
          Texto del botón

          <input
            type="text"
            value={workshops.button}
            onChange={(e) =>
              updateWorkshop(
                "button",
                e.target.value
              )
            }
          />
        </label>

      </div>

    </div>
  );
}


/* ============================================================
   SUBSCRIPTION EDITOR
   ============================================================ */

function SubscriptionEditor({
  artistData,
  setArtistData,
}) {
  const subscription =
    artistData.subscription;

  const updateSubscription = (
    field,
    value
  ) => {
    setArtistData({
      ...artistData,
      subscription: {
        ...subscription,
        [field]: value,
      },
    });
  };

  return (
    <div className="editor-form">

      <div className="editor-list-header">

        <div>
          <h2>Membresía</h2>

          <p>
            Configura tu programa de
            membresía.
          </p>
        </div>

      </div>


      <div className="form-section">

        <label>
          Nombre

          <input
            type="text"
            value={subscription.memberTitle}
            onChange={(e) =>
              updateSubscription(
                "memberTitle",
                e.target.value
              )
            }
          />
        </label>


        <label>
          Precio mensual

          <input
            type="text"
            value={subscription.price}
            onChange={(e) =>
              updateSubscription(
                "price",
                e.target.value
              )
            }
          />
        </label>


        <label>
          Descripción

          <textarea
            value={subscription.description}
            onChange={(e) =>
              updateSubscription(
                "description",
                e.target.value
              )
            }
          />
        </label>


        <label>
          Texto del botón

          <input
            type="text"
            value={subscription.button}
            onChange={(e) =>
              updateSubscription(
                "button",
                e.target.value
              )
            }
          />
        </label>

      </div>


      <div className="form-section">

        <h2>Beneficios</h2>

        {subscription.benefits.map(
          (benefit, index) => (

            <label key={index}>
              Beneficio {index + 1}

              <input
                type="text"
                value={benefit}
                onChange={(e) => {

                  const benefits = [
                    ...subscription.benefits,
                  ];

                  benefits[index] =
                    e.target.value;

                  updateSubscription(
                    "benefits",
                    benefits
                  );

                }}
              />

            </label>

          )
        )}

      </div>

    </div>
  );
}


/* ============================================================
   SETTINGS EDITOR
   ============================================================ */

function SettingsEditor({
  artistData,
  setArtistData,
}) {
  const settings =
    artistData.settings;

  const updateSetting = (
    field,
    value
  ) => {
    setArtistData({
      ...artistData,
      settings: {
        ...settings,
        [field]: value,
      },
    });
  };

  return (
    <div className="editor-form">

      <div className="editor-list-header">

        <div>
          <h2>Configuración</h2>

          <p>
            Administra la información
            pública de tu página.
          </p>
        </div>

      </div>


      <div className="form-section">

        <label>
          Instagram

          <input
            type="text"
            value={settings.instagram}
            onChange={(e) =>
              updateSetting(
                "instagram",
                e.target.value
              )
            }
          />
        </label>


        <label>
          Página web

          <input
            type="text"
            value={settings.website}
            onChange={(e) =>
              updateSetting(
                "website",
                e.target.value
              )
            }
          />
        </label>


        <label>
          Email

          <input
            type="email"
            value={settings.email}
            onChange={(e) =>
              updateSetting(
                "email",
                e.target.value
              )
            }
          />
        </label>

      </div>

    </div>
  );
}


export default ArtistEditor;

