import styles from "../interior.module.css";

const WHATSAPP_LINK =
  "https://wa.me/526861234567?text=Hola%20El%20Letrero%2C%20quiero%20cotizar%20un%20proyecto";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className={styles.floatingWhatsapp}
      aria-label="Cotizar por WhatsApp"
    >
      WhatsApp
    </a>
  );
}
