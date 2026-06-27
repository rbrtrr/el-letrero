import type { Metadata } from "next";
import Link from "next/link";
import styles from "../interior.module.css";
import InternalHeader from "../components/InternalHeader";

export const metadata: Metadata = {
  title: "Ubicación de El Letrero Sign Shop en Mexicali",
  description:
    "Visita El Letrero Sign Shop en Mexicali para cotizar anuncios luminosos, letreros, fachadas comerciales, letras 3D y rotulación.",
};

const ADDRESS = "Av. Emiliano Zapata #216, Col. 1 de Diciembre, Mexicali, B.C.";
const PHONE_DISPLAY = "(686) 633 0841";

const WHATSAPP_LINK =
  "https://wa.me/5216863166145?text=Hola%20El%20Letrero%2C%20quiero%20cotizar%20un%20proyecto";

const INSTAGRAM_LINK = "https://www.instagram.com/el.letrero/";
const FACEBOOK_LINK = "https://www.facebook.com/elletrerosignshop";

const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=El%20Letrero%20Sign%20Shop%20Mexicali";

const MAP_EMBED =
  "https://www.google.com/maps?q=El%20Letrero%20Sign%20Shop%20Mexicali&output=embed";

export default function UbicacionPage() {
  return (
    <main className={styles.page}>
      <InternalHeader />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.kicker}>Ubicación</span>

          <h1>Visítanos en Mexicali o mándanos tu idea por WhatsApp.</h1>

          <p>
            Puedes visitarnos para revisar tu proyecto, mandar referencias,
            compartir medidas o cotizar un anuncio luminoso para tu negocio.
          </p>

          <div className={styles.actions}>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
              className={styles.primaryBtn}
            >
              Abrir en Google Maps
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
      </section>

      <section className={styles.section}>
        <div className={styles.mapGrid}>
          <div className={styles.mapCard}>
            <iframe
              title="Ubicación de El Letrero Sign Shop en Mexicali"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className={styles.infoCard}>
            <span className={styles.kicker}>El Letrero Sign Shop</span>

            <h2>Ubicados en Mexicali, B.C.</h2>

            <p>{ADDRESS}</p>

            <p>
              Cotiza anuncios luminosos, letreros, letras 3D, fachadas
              comerciales, tótems, viniles, lonas y rotulación vehicular en
              Mexicali.
            </p>

            <div className={styles.actions}>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noreferrer"
                className={styles.primaryBtn}
              >
                Cómo llegar
              </a>

              <Link href="/cotizar" className={styles.secondaryBtn}>
                Cotizar proyecto
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.mapGrid}>
            <div className={styles.infoCard}>
              <span className={styles.kicker}>Antes de venir</span>

              <h2>También puedes enviarnos tu idea directamente.</h2>

              <p>
                Si todavía no sabes qué tipo de anuncio necesitas, mándanos una
                foto de tu fachada, medidas aproximadas y referencias visuales.
                Te ayudamos a definir la mejor solución para tu negocio.
              </p>

              <div className={styles.actions}>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryBtn}
                >
                  Enviar WhatsApp
                </a>

                <Link href="/servicios" className={styles.secondaryBtn}>
                  Ver servicios
                </Link>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardImage}>
                <img
                  src="/ideainstalacion.jpg"
                  alt="Asesoría para anuncios luminosos y letreros en Mexicali"
                />
              </div>

              <div className={styles.cardContent}>
                <span>Asesoría</span>
                <h3>Te orientamos antes de fabricar.</h3>
                <p>
                  Revisamos ubicación, visibilidad, materiales, iluminación y
                  medidas para que tu anuncio tenga presencia real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <img src="/logo-el-letrero.png" alt="El Letrero Sign Shop" />
          <p>{ADDRESS}</p>
          <p>{PHONE_DISPLAY}</p>
        </div>

        <nav className={styles.footerNav} aria-label="Navegación del footer">
          <strong className={styles.footerTitle}>Sitio</strong>

          <Link href="/">Inicio</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/proyectos">Proyectos</Link>
          <Link href="/proceso">Proceso</Link>
          <Link href="/ubicacion">Ubicación</Link>
          <Link href="/cotizar">Cotizar</Link>
        </nav>

        <div className={styles.footerSocial}>
          <strong className={styles.footerTitle}>Redes sociales</strong>

          <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">
            <span className={styles.footerSocialIcon}>
              <InstagramIcon />
            </span>
            Instagram
          </a>

          <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer">
            <span className={styles.footerSocialIcon}>
              <FacebookIcon />
            </span>
            Facebook
          </a>

          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
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
