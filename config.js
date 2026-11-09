/*
 * CONFIGURACIÓN DEL PORTAL — este es el único archivo que necesitas editar.
 * Después de cambiarlo, guarda y GitHub Pages publica el cambio en 1–2 minutos.
 */
window.FX_CONFIG = {
  // 1) Pega aquí la URL de la "Aplicación web" de Google Apps Script (termina en /exec).
  endpoint: 'https://script.google.com/macros/s/AKfycbzHylaPjIM-gkUSBQWxYcfsGSD9xP5J1azgURrgHfiR_3_7_5OSsyI-TII83wH_JYz4/exec',

  // Textos del evento
  eventLine: 'Colegio Americano · 12.11.2026',
  title: 'Fashion Experience',
  subtitle: 'Private Access',
  claim: 'Cuatro marcas. Una experiencia exclusiva.',
  cta: 'Descubre tu acceso exclusivo',
  teaser: 'Regístrate y recibe al instante un vale digital de Bs 100.',

  // Marcas, en el orden en que se muestran.
  //  image: foto de la tarjeta (recortada 4:5, 1000×1250 px)
  //  logo / logoDark: logo blanco (sobre fotos) y negro (sobre el vale)
  //  logoScale: ajuste óptico para que los cuatro logos se vean del mismo peso
  brands: [
    { name: 'Pedro del Hierro', line: 'Mujer · Hombre', image: 'assets/img/pdh.jpg',
      logo: 'assets/brands/pdh-white.png', logoDark: 'assets/brands/pdh-black.png', logoScale: 1.06 },
    { name: "Women'secret", line: 'Lencería · Pijamas', image: 'assets/img/womensecret.jpg',
      logo: 'assets/brands/womensecret-white.png', logoDark: 'assets/brands/womensecret-black.png', logoScale: 0.96 },
    { name: 'Springfield', line: 'Mujer · Hombre', image: 'assets/img/springfield.jpg',
      logo: 'assets/brands/springfield-white.png', logoDark: 'assets/brands/springfield-black.png', logoScale: 1.0 },
    { name: 'Cortefiel', line: 'Mujer · Hombre', image: 'assets/img/cortefiel.jpg',
      logo: 'assets/brands/cortefiel-white.png', logoDark: 'assets/brands/cortefiel-black.png', logoScale: 0.84 }
  ],

  // Fotos que rotan en la portada (brand = posición en la lista de arriba, para mostrar su logo)
  heroSlides: [
    { image: 'assets/img/pdh.jpg', brand: 0 },
    { image: 'assets/img/womensecret.jpg', brand: 1 },
    { image: 'assets/img/springfield.jpg', brand: 2 },
    { image: 'assets/img/cortefiel.jpg', brand: 3 },
    { image: 'assets/img/pdh-2.jpg', brand: 0 }
  ],

  // Aviso de privacidad (debe validarlo el responsable legal antes del evento)
  privacy: {
    responsable: '[RAZÓN SOCIAL POR CONFIRMAR]',
    contacto: '[CORREO O WHATSAPP DE CONTACTO POR CONFIRMAR]'
  },

  // Dónde vale el vale (texto que ve el invitado)
  voucherWhere: 'Válido en tiendas Pedro del Hierro, Women\'secret, Springfield y Cortefiel.'
};
