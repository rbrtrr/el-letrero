"use client";

import { useEffect, useState } from "react";
import { Inter, Sora } from "next/font/google";
import styles from "./page.module.css";

const navFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nav",
});

const displayFont = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

const WHATSAPP_LINK =
  "https://wa.me/526861234567?text=Hola%20El%20Letrero%2C%20quiero%20cotizar%20un%20proyecto";

const INSTAGRAM_LINK = "https://www.instagram.com/el.letrero/";
const FACEBOOK_LINK = "https://www.facebook.com/elletrerosignshop";

const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=El%20Letrero%20Sign%20Shop%20Mexicali";

const services = [
  {
    number: "01",
    title: "Letreros luminosos",
    text: "Fabricación e instalación de letreros con presencia visual para negocios, locales y marcas comerciales.",
  },
  {
    number: "02",
    title: "Fachadas comerciales",
    text: "Diseño visual e instalación para transformar la entrada de tu negocio en una experiencia más profesional.",
  },
  {
    number: "03",
    title: "Letras 3D",
    text: "Letras corpóreas, acabados premium y soluciones visuales para interiores o exteriores.",
  },
  {
    number: "04",
    title: "Rotulación e impresión",
    text: "Vinil, lona, señalética, gráficos comerciales y rotulación para unidades o puntos de venta.",
  },
];

const processSteps = [
  "Revisamos tu idea o necesidad",
  "Diseñamos una propuesta visual",
  "Fabricamos con materiales adecuados",
  "Instalamos y dejamos listo tu proyecto",
];

const projects = [
  {
    title: "Fachadas",
    image: "/images/proyecto-1.jpg",
  },
  {
    title: "Letreros luminosos",
    image: "/images/proyecto-2.jpg",
  },
  {
    title: "Letras 3D",
    image: "/images/proyecto-3.jpg",
  },
  {
    title: "Rotulación",
    image: "/images/proyecto-4.jpg",
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
          }
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

  return (
    <main
      className={`${styles.page} ${navFont.variable} ${displayFont.variable}`}
    >
      <header
        className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
      >
        <a href="#inicio" className={styles.logo} onClick={closeMobileMenu}>
          <img
            src="/logo-el-letrero.png"
            alt="El Letrero Sign Shop"
            className={styles.logoImage}
          />
        </a>

        <button
          type="button"
          className={`${styles.menuButton} ${
            mobileMenuOpen ? styles.menuButtonOpen : ""
          }`}
          onClick={() => setMobileMenuOpen((current) => !current)}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`${styles.navWrap} ${
            mobileMenuOpen ? styles.navWrapOpen : ""
          }`}
        >
          <nav className={styles.nav}>
            <a href="#servicios" onClick={closeMobileMenu}>
              Servicios
            </a>
            <a href="#proyectos" onClick={closeMobileMenu}>
              Proyectos
            </a>
            <a href="#proceso" onClick={closeMobileMenu}>
              Proceso
            </a>
            <a href="#contacto" onClick={closeMobileMenu}>
              Contacto
            </a>
          </nav>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className={styles.navCta}
            onClick={closeMobileMenu}
          >
            Cotizar
          </a>
        </div>
      </header>

      <section id="inicio" className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <span className={`${styles.kicker} ${styles.loadFade}`}>
            SIGN SHOP · MEXICALI
          </span>

          <h1 className={`${styles.heroTitle} ${styles.loadFade} ${styles.delay1}`}>
            Letreros que hacen visible tu negocio.
          </h1>

          <p className={`${styles.heroText} ${styles.loadFade} ${styles.delay2}`}>
            Diseño, fabricación e instalación de letreros, fachadas comerciales,
            letras 3D, tótems, lonas y rotulación para marcas que quieren verse
            más profesionales.
          </p>

          <div className={`${styles.heroActions} ${styles.loadFade} ${styles.delay3}`}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={styles.primaryBtn}>
              Cotizar proyecto
            </a>

            <a href="#proyectos" className={styles.secondaryBtn}>
              Ver trabajos
            </a>
          </div>
        </div>

        <div className={`${styles.heroCard} ${styles.loadFade} ${styles.delay4}`}>
          <span>Desde idea hasta instalación</span>
          <strong>Diseño · Producción · Montaje</strong>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.introGrid}>
          <div>
            <span className={`${styles.sectionTag} ${styles.revealText}`} data-reveal>
              LO QUE HACEMOS
            </span>

            <h2 className={styles.revealText} data-reveal>
              Convertimos fachadas, locales y espacios comerciales en puntos de
              alto impacto visual.
            </h2>
          </div>

          <p className={styles.revealText} data-reveal>
            El Letrero trabaja con negocios que necesitan verse mejor, atraer
            más atención y proyectar una imagen más seria desde el primer
            contacto. La meta no es solo poner un letrero: es elevar la
            presencia completa de la marca.
          </p>
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
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proyectos" className={styles.projectsSection}>
        <div className={styles.projectsTop}>
          <div>
            <span className={`${styles.sectionTag} ${styles.revealText}`} data-reveal>
              PROYECTOS
            </span>

            <h2 className={styles.revealText} data-reveal>
              Trabajos diseñados para verse bien de día, de noche y desde lejos.
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

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <article className={styles.projectCard} key={project.title} data-reveal>
              <img src={project.image} alt={project.title} />
              <div>
                <span>Proyecto</span>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="proceso" className={styles.processSection}>
        <div className={styles.processContent}>
          <span className={`${styles.sectionTag} ${styles.revealText}`} data-reveal>
            PROCESO
          </span>

          <h2 className={styles.revealText} data-reveal>
            Un proceso claro para que tu proyecto avance sin vueltas.
          </h2>

          <p className={styles.revealText} data-reveal>
            Desde la primera idea hasta la instalación final, cuidamos que cada
            etapa tenga dirección visual, medidas correctas y una ejecución
            profesional.
          </p>
        </div>

        <div className={styles.processList}>
          {processSteps.map((step, index) => (
            <div className={styles.processItem} key={step} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.trustSection}>
        <div className={styles.trustBox}>
          <h2 className={styles.revealText} data-reveal>
            Tu fachada trabaja por tu negocio todos los días.
          </h2>

          <p className={styles.revealText} data-reveal>
            Un buen letrero no solo decora. Ubica, comunica, vende y hace que tu
            marca sea más fácil de recordar. Por eso cada proyecto debe sentirse
            bien pensado desde el diseño hasta la instalación.
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className={`${styles.primaryBtnDark} ${styles.revealText}`}
            data-reveal
          >
            Empezar cotización
          </a>
        </div>
      </section>

      <section id="contacto" className={styles.contactSection}>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <span className={`${styles.sectionTag} ${styles.revealText}`} data-reveal>
              CONTACTO
            </span>

            <h2 className={styles.revealText} data-reveal>
              ¿Listo para hacer visible tu negocio?
            </h2>

            <p className={styles.revealText} data-reveal>
              Escríbenos para revisar tu idea, medidas, ubicación y el tipo de
              letrero que necesita tu proyecto.
            </p>

            <div className={styles.contactActions}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className={`${styles.primaryBtn} ${styles.revealText}`}
                data-reveal
              >
                WhatsApp
              </a>

              <a
                href={MAP_LINK}
                target="_blank"
                rel="noreferrer"
                className={`${styles.secondaryBtnDark} ${styles.revealText}`}
                data-reveal
              >
                Abrir en Maps
              </a>
            </div>
          </div>

          <div className={styles.contactCard} data-reveal>
            <h3>El Letrero Sign Shop</h3>
            <p>Av. Emiliano Zapata #216</p>
            <p>Col. 1 de Diciembre, Mexicali, B.C.</p>

            <div className={styles.socialLinks}>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

          <footer className={styles.footer}>
            <div>
              <img
                src="/logo-el-letrero.png"
                alt="El Letrero Sign Shop"
                className={styles.footerLogo}
              />
              <p>Sign Shop · Mexicali, Baja California</p>
            </div>

        <nav>
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </footer>
    </main>
  );
}
