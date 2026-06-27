"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "../interior.module.css";

const navFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const WHATSAPP_LINK =
  "https://wa.me/526861234567?text=Hola%20El%20Letrero%2C%20quiero%20cotizar%20un%20proyecto";

export default function InternalHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClassName = [
    styles.header,
    navFont.className,
    isScrolled ? styles.headerScrolled : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClassName}>
      <Link href="/" className={styles.headerBrand} onClick={closeMobileMenu}>
        <img
          src="/logo-el-letrero.png"
          alt="El Letrero Sign Shop"
          className={styles.headerLogoImage}
        />
      </Link>

      <button
        type="button"
        className={`${styles.mobileMenuButton} ${
          mobileMenuOpen ? styles.mobileMenuButtonOpen : ""
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
        className={`${styles.headerRight} ${
          mobileMenuOpen ? styles.headerRightOpen : ""
        }`}
      >
        <nav className={styles.headerNav} aria-label="Navegación principal">
          <Link href="/" onClick={closeMobileMenu}>
            Inicio
          </Link>

          <Link href="/servicios" onClick={closeMobileMenu}>
            Servicios
          </Link>

          <Link href="/proyectos" onClick={closeMobileMenu}>
            Proyectos
          </Link>

          <Link href="/proceso" onClick={closeMobileMenu}>
            Proceso
          </Link>

          <Link href="/ubicacion" onClick={closeMobileMenu}>
            Ubicación
          </Link>

          <Link href="/cotizar" onClick={closeMobileMenu}>
            Cotizar
          </Link>
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className={styles.orderBtn}
          onClick={closeMobileMenu}
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
