"use client";

import { useEffect, useState } from "react";
import { Inter, Sora } from "next/font/google";
import styles from "./page.module.css";

const navFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nav",
});

const displayFont = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

const BUSINESS_NAME = "El Letrero Sign Shop";
const PHONE_DISPLAY = "(686) 633 0841";
const ADDRESS = "Av. Emiliano Zapata #216, Col. 1 de Diciembre, Mexicali, B.C.";

const WHATSAPP_LINK =
  "https://wa.me/5216863166145?text=Hola%20El%20Letrero%2C%20quiero%20cotizar%20un%20proyecto";

const INSTAGRAM_LINK = "https://www.instagram.com/el.letrero/";
const FACEBOOK_LINK = "https://www.facebook.com/elletrerosignshop";

const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=El%20Letrero%20Sign%20Shop%20Mexicali";

const MAP_EMBED =
  "https://www.google.com/maps?q=El%20Letrero%20Sign%20Shop%20Mexicali&output=embed";

const services = [
  {
    title: "Anuncios luminosos",
    keyword: "Anuncios luminosos en Mexicali",
    text: "Fabricación e instalación de anuncios luminosos para negocios que quieren verse profesionales de día y de noche.",
    image: "/anuncios-luminosos-1.jpg",
  },
  {
    title: "Letreros luminosos",
    keyword: "Letreros luminosos en Mexicali",
    text: "Letras de canal, cajas de luz, luz LED, anuncios exteriores y soluciones visuales para locales comerciales.",
    image: "/letreros-luminosos-1.png",
  },
  {
    title: "Fachadas comerciales",
    keyword: "Fachadas comerciales en Mexicali",
    text: "Diseño, renovación e instalación de fachadas para que la entrada de tu negocio comunique más valor.",
    image: "/fachadas-comerciales-1.png",
  },
  {
    title: "Letras 3D",
    keyword: "Letras 3D en Mexicali",
    text: "Letras corpóreas en acrílico, aluminio, PVC y materiales personalizados para interior o exterior.",
    image: "/letras-3d-1.jpg",
  },
  {
    title: "Rotulación vehicular",
    keyword: "Rotulación de vehículos en Mexicali",
    text: "Rotulación para pickups, vans, flotillas y unidades comerciales que funcionan como publicidad móvil.",
    image: "/rotulacion-vehicular-1.jpeg",
  },
  {
    title: "Totems publicitarios",
    keyword: "Creacion de tótems publicitarios en Mexicali",
    text: " Diseño, fabricación e instalación de tótems publicitarios para negocios, plazas y estacionamientos.",
    image: "/totems-publicitarios-1.png",
  },
];

const gallery = [
  {
    title: "Anuncio luminoso exterior",
    category: "Letreros luminosos",
    image: "/fachada-comercial.jpg",
  },
  {
    title: "Fachada comercial",
    category: "Fachadas",
    image: "/anuncio-luminoso-exterior.jpg",
  },
  {
    title: "Letras 3D interiores",
    category: "Letras 3D",
    image: "/letras-3d-interiores.jpeg",
  },
  {
    title: "Rotulación de vehicular",
    category: "Rotulación",
    image: "/rotulacion-vehicular.png",
  },
  {
    title: "Tótem publicitario",
    category: "Tótems",
    image: "/totem-publicitario.jpg",
  },
  {
    title: "Y cualquiera de tus ideas",
    category: "Tus ideas",
    image: "/tus-ideas.png",
  },
];

const process = [
  {
    step: "01",
    title: "Revisión del proyecto",
    text: "Analizamos tu idea, ubicación, medidas, tipo de negocio y objetivo visual.",
  },
  {
    step: "02",
    title: "Propuesta visual",
    text: "Creamos una propuesta para que veas cómo puede lucir tu anuncio o fachada.",
  },
  {
    step: "03",
    title: "Fabricación",
    text: "Trabajamos materiales, estructura, iluminación, cortes, vinil o letras según el proyecto.",
  },
  {
    step: "04",
    title: "Instalación",
    text: "Instalamos en sitio y cuidamos que el resultado se vea limpio, fuerte y profesional.",
  },
];

const industries = [
  "Restaurantes",
  "Clínicas dentales",
  "Cafeterías",
  "Plazas comerciales",
  "Tiendas",
  "Gimnasios",
  "Oficinas",
  "Flotillas",
];

const faqs = [
  {
    question: "¿Hacen anuncios luminosos en Mexicali?",
    answer:
      "Sí. Fabricamos e instalamos anuncios luminosos, letreros LED, letras 3D, cajas de luz y fachadas comerciales para negocios en Mexicali.",
  },
  {
    question: "¿Pueden ayudarme con el diseño del letrero?",
    answer:
      "Sí. Podemos ayudarte a definir estilo, medidas, materiales, iluminación y composición visual según tu negocio.",
  },
  {
    question: "¿También hacen rotulación de vehículos?",
    answer:
      "Sí. Realizamos rotulación de vehículos comerciales, pickups, vans, flotillas y unidades de trabajo.",
  },
  {
    question: "¿Puedo mandar fotos o referencias?",
    answer:
      "Sí. Puedes mandar fotos de tu fachada, referencias, medidas aproximadas o ejemplos de lo que te gustaría lograr.",
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles.isVisible);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    const revealElements = document.querySelectorAll("[data-reveal]");
    revealElements.forEach((element) => observer.observe(element));

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealElements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    description:
      "Diseño, fabricación e instalación de anuncios luminosos, letreros luminosos, fachadas comerciales, letras 3D y rotulación vehicular en Mexicali, Baja California.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Emiliano Zapata #216, Col. 1 de Diciembre",
      addressLocality: "Mexicali",
      addressRegion: "Baja California",
      addressCountry: "MX",
    },
    areaServed: "Mexicali, Baja California",
    telephone: "+52 686 633 0841",
    sameAs: [INSTAGRAM_LINK, FACEBOOK_LINK],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className={`${styles.page} ${navFont.variable} ${displayFont.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
        <a href="#inicio" className={styles.logo} onClick={closeMobileMenu}>
          <img
            src="/logo-el-letrero.png"
            alt="El Letrero Sign Shop"
            className={styles.logoImage}
          />
        </a>

        <button
          type="button"
          className={`${styles.menuButton} ${mobileMenuOpen ? styles.menuButtonOpen : ""}`}
          onClick={() => setMobileMenuOpen((current) => !current)}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`${styles.navWrap} ${mobileMenuOpen ? styles.navWrapOpen : ""}`}>
          <nav className={styles.nav} aria-label="Navegación principal">
            <a href="/servicios" onClick={closeMobileMenu}>Servicios</a>
            <a href="/proyectos" onClick={closeMobileMenu}>Proyectos</a>
            <a href="/proceso" onClick={closeMobileMenu}>Proceso</a>
            <a href="/ubicacion" onClick={closeMobileMenu}>Ubicación</a>
            <a href="/cotizar" onClick={closeMobileMenu}>Cotizar</a>
          </nav>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className={styles.navCta}
            onClick={closeMobileMenu}
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section id="inicio" className={styles.hero}>
        <div className={styles.heroPattern} />

        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <span className={`${styles.kicker} ${styles.loadFade}`}>
              Anuncios luminosos en Mexicali
            </span>

            <h1 className={`${styles.heroTitle} ${styles.loadFade} ${styles.delay1}`}>
              Letreros, anuncios luminosos y fachadas comerciales para negocios en Mexicali.
            </h1>

            <p className={`${styles.heroText} ${styles.loadFade} ${styles.delay2}`}>
              En El Letrero diseñamos, fabricamos e instalamos soluciones visuales
              para que tu negocio se vea más profesional, más visible y más fácil
              de recordar.
            </p>

            <div className={`${styles.heroActions} ${styles.loadFade} ${styles.delay3}`}>
              <a href="/cotizar" className={styles.primaryBtn}>
                Cotizar proyecto
              </a>

              <a href="/proyectos" className={styles.secondaryBtn}>
                Ver trabajos
              </a>
            </div>

            <div className={`${styles.heroMiniStats} ${styles.loadFade} ${styles.delay4}`}>
              <span>Diseño</span>
              <span>Fabricación</span>
              <span>Instalación</span>
              <span>Rotulación</span>
            </div>
          </div>

          <div className={`${styles.heroVisual} ${styles.loadFade} ${styles.delay2}`}>
            <img
              src="/hero-elletrero.png"
              alt="Anuncios luminosos y letreros en Mexicali por El Letrero Sign Shop"
            />

            <div className={styles.heroVisualCard}>
              <strong>Tu fachada también vende.</strong>
              <span>Haz que tu negocio se vea desde lejos.</span>
            </div>
          </div>
        </div>
      </section>

        <section className={styles.introSection}>
          <div className={styles.introGrid}>
            <div>
              <span className={`${styles.sectionTag} ${styles.revealText}`} data-reveal>
                EL LETRERO SIGN SHOP
              </span>

              <h2 className={styles.revealText} data-reveal>
                Publicidad exterior con diseño, fabricación e instalación profesional.
              </h2>
            </div>

            <div className={`${styles.introCard} ${styles.revealText}`} data-reveal>
              <span>Más que un letrero</span>

              <p>
                Un buen anuncio no solo decora: ayuda a que las personas encuentren tu
                negocio, entiendan tu marca y confíen en lo que vendes.
              </p>

              <p>
                Trabajamos con negocios locales, restaurantes, clínicas, oficinas,
                tiendas y empresas que quieren verse más profesionales.
              </p>
            </div>
          </div>
        </section>

      <section id="servicios" className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <span className={`${styles.sectionTag} ${styles.revealText}`} data-reveal>
            SERVICIOS
          </span>

          <h2 className={styles.revealText} data-reveal>
            Soluciones visuales para negocios que quieren destacar.
          </h2>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.title} data-reveal>
              <div className={styles.serviceImage}>
                <img src={service.image} alt={service.keyword} />
              </div>

              <div className={styles.serviceContent}>
                <span>{service.keyword}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.industriesSection}>
        <div className={styles.industriesCopy}>
          <span className={`${styles.sectionTag} ${styles.revealText}`} data-reveal>
            NEGOCIOS
          </span>

          <h2 className={styles.revealText} data-reveal>
            Trabajamos con negocios que necesitan verse mejor desde la calle.
          </h2>
        </div>

        <div className={styles.industriesGrid}>
          {industries.map((industry) => (
            <div className={styles.industryCard} key={industry} data-reveal>
              {industry}
            </div>
          ))}
        </div>
      </section>

      <section id="proyectos" className={styles.projectsSection}>
        <div className={styles.projectsTop}>
          <div>
            <span className={`${styles.sectionTag} ${styles.revealText}`} data-reveal>
              PORTAFOLIO
            </span>

            <h2 className={styles.revealText} data-reveal>
              Proyectos terminados.
            </h2>
          </div>

          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noreferrer"
            className={`${styles.outlineBtn} ${styles.revealText}`}
            data-reveal
          >
            Ver Instagram
          </a>
        </div>

        <div className={styles.galleryGrid}>
          {gallery.map((project) => (
            <article className={styles.projectCard} key={project.title} data-reveal>
              <img src={project.image} alt={project.title} />

              <div className={styles.projectInfo}>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="proceso" className={styles.processSection}>
        <div className={styles.processIntro}>
          <span className={`${styles.sectionTag} ${styles.revealText}`} data-reveal>
            PROCESO
          </span>

          <h2 className={styles.revealText} data-reveal>
            Un proceso claro para llevar tu idea a instalación.
          </h2>
        </div>

        <div className={styles.processGrid}>
          {process.map((item) => (
            <article className={styles.processCard} key={item.step} data-reveal>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.visualSection}>
        <div className={styles.visualCopy}>
          <span className={`${styles.sectionTag} ${styles.revealText}`} data-reveal>
            INSTALACIÓN Y MONTAJE
          </span>

          <h2 className={styles.revealText} data-reveal>
            Instalación profesional de anuncios y fachadas comerciales.
          </h2>

          <p className={styles.revealText} data-reveal>
           Nos encargamos del proceso completo: fabricación, traslado, 
           montaje e instalación en sitio. Cuidamos medidas, estructura, iluminación y acabados para que cada anuncio quede firme,
           visible y listo para representar tu negocio.
          </p>
        </div>

        <div className={styles.visualGrid}>
          <img
            src="/fabricacion-letrero.jpg"
            alt="Fabricación de letreros en Mexicali"
            data-reveal
          />
          <img
            src="/instalacion-anuncio-luminoso.jpg"
            alt="Instalación de anuncios luminosos en Mexicali"
            data-reveal
          />
        </div>
      </section>

      <section id="ubicacion" className={styles.locationSection}>
        <div className={styles.locationGrid}>
          <div className={styles.mapCard}>
            <iframe
              title="Ubicación de El Letrero Sign Shop en Mexicali"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
            />
          </div>

          <div className={styles.locationInfo}>
            <span className={`${styles.sectionTag} ${styles.revealText}`} data-reveal>
              UBICACIÓN
            </span>

            <h2 className={styles.revealText} data-reveal>
              Visítanos en Mexicali o mándanos tu idea por WhatsApp.
            </h2>

            <p className={styles.revealText} data-reveal>{ADDRESS}</p>

            <div className={styles.locationActions}>
              <a href={MAP_LINK} target="_blank" rel="noreferrer" className={styles.primaryBtn}>
                Abrir en Maps
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className={styles.secondaryBtn}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="cotizar" className={styles.quoteSection}>
        <div className={styles.quoteGrid}>
          <div className={styles.quoteCopy}>
            <span className={`${styles.sectionTag} ${styles.revealText}`} data-reveal>
              COTIZA
            </span>

            <h2 className={styles.revealText} data-reveal>
              Cuéntanos qué anuncio necesita tu negocio.
            </h2>

            <p className={styles.revealText} data-reveal>
              Este formulario queda listo visualmente. Después lo conectamos a
              correo, WhatsApp, CRM o una automatización.
            </p>
          </div>

          <form className={styles.contactForm}>
            <label>
              Nombre
              <input type="text" name="name" placeholder="Tu nombre" />
            </label>

            <label>
              Teléfono / WhatsApp
              <input type="tel" name="phone" placeholder="686 633 0841" />
            </label>

            <label>
              Tipo de proyecto
              <select name="service" defaultValue="">
                <option value="" disabled>Selecciona una opción</option>
                <option>Anuncio luminoso</option>
                <option>Letrero luminoso</option>
                <option>Fachada comercial</option>
                <option>Letras 3D</option>
                <option>Rotulación vehicular</option>
                <option>Lona / vinil / impresión</option>
              </select>
            </label>

            <label>
              Mensaje
              <textarea
                name="message"
                rows={5}
                placeholder="Cuéntanos qué quieres hacer, dónde va instalado y si tienes medidas aproximadas."
              />
            </label>

            <button type="button">Enviar solicitud</button>
          </form>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <span className={`${styles.sectionTag} ${styles.revealText}`} data-reveal>
            FAQ
          </span>

          <h2 className={styles.revealText} data-reveal>
            Preguntas frecuentes sobre letreros y anuncios luminosos en Mexicali.
          </h2>
        </div>

        <div className={styles.faqGrid}>
          {faqs.map((faq) => (
            <article className={styles.faqCard} key={faq.question} data-reveal>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

        <footer className={styles.footer}>
          <div className={styles.footerBrand}>
            <img
              src="/logo-el-letrero.png"
              alt="El Letrero Sign Shop"
              className={styles.footerLogo}
            />

            <p>Av. Emiliano Zapata #216, Col. 1 de Diciembre, Mexicali, B.C.</p>
            <p>(686) 633 0841</p>
          </div>

          <nav className={styles.footerNav} aria-label="Navegación del footer">
            <strong className={styles.footerTitle}>Sitio</strong>

            <a href="/">Inicio</a>
            <a href="/servicios">Servicios</a>
            <a href="/proyectos">Proyectos</a>
            <a href="/proceso">Proceso</a>
            <a href="/ubicacion">Ubicación</a>
            <a href="/cotizar">Cotizar</a>
          </nav>

          <div className={styles.footerSocial}>
            <strong className={styles.footerTitle}>Redes sociales</strong>

            <a href="https://www.instagram.com/el.letrero/" target="_blank" rel="noreferrer">
              <span className={styles.footerSocialIcon}>
                <InstagramIcon />
              </span>
              Instagram
            </a>

            <a href="https://www.facebook.com/elletrerosignshop" target="_blank" rel="noreferrer">
              <span className={styles.footerSocialIcon}>
                <FacebookIcon />
              </span>
              Facebook
            </a>

            <a
              href="https://wa.me/526861234567?text=Hola%20El%20Letrero%2C%20quiero%20cotizar%20un%20proyecto"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.footerSocialIcon}>
                <WhatsAppIcon />
              </span>
              WhatsApp
            </a>
          </div>
        </footer>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className={styles.floatingWhatsapp}
        aria-label="Cotizar por WhatsApp"
      >
        WhatsApp
      </a>
    </main>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.2 8.3V6.8C14.2 6.1 14.7 6 15.1 6H17V3H14.4C11.5 3 10.8 5.1 10.8 6.5V8.3H8.5V11.6H10.8V21H14.3V11.6H16.9L17.3 8.3H14.2Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 3C7.08 3 3.04 6.86 3.04 11.6C3.04 13.18 3.5 14.65 4.3 15.92L3 21L8.34 19.74C9.45 20.31 10.71 20.63 12.04 20.63C17 20.63 21.04 16.77 21.04 12.03C21.04 7.29 17 3 12.04 3ZM12.04 19.08C10.84 19.08 9.72 18.76 8.76 18.22L8.44 18.04L5.34 18.77L6.08 15.82L5.87 15.5C5.08 14.38 4.63 13.04 4.63 11.6C4.63 7.72 7.95 4.55 12.04 4.55C16.13 4.55 19.45 7.72 19.45 12.03C19.45 15.91 16.13 19.08 12.04 19.08ZM16.1 13.82C15.88 13.71 14.78 13.19 14.57 13.12C14.37 13.05 14.22 13.01 14.07 13.23C13.92 13.45 13.5 13.93 13.37 14.08C13.24 14.23 13.11 14.25 12.89 14.14C12.67 14.03 11.96 13.81 11.12 13.1C10.47 12.55 10.03 11.88 9.9 11.66C9.77 11.44 9.89 11.32 10 11.21C10.1 11.11 10.22 10.95 10.33 10.82C10.44 10.69 10.48 10.6 10.55 10.45C10.62 10.3 10.59 10.17 10.53 10.06C10.48 9.95 10.03 8.9 9.85 8.46C9.67 8.03 9.49 8.09 9.35 8.08H8.93C8.78 8.08 8.55 8.13 8.35 8.35C8.15 8.57 7.59 9.1 7.59 10.17C7.59 11.24 8.38 12.28 8.49 12.43C8.6 12.58 10.04 14.7 12.24 15.61C12.77 15.83 13.18 15.96 13.5 16.06C14.03 16.22 14.51 16.2 14.89 16.15C15.31 16.09 16.19 15.61 16.37 15.09C16.55 14.57 16.55 14.13 16.5 14.03C16.45 13.93 16.32 13.88 16.1 13.82Z" />
    </svg>
  );
}
