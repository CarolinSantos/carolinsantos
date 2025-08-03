const texts = {
  es: {
    inicio: 'Bienvenidos',
    sobreMi: 'Sobre mí',
    productos: 'Algunos productos',
    contacto: 'Contacto',
    slogan: 'Crochet con sabor a sol y calma',
    btnLang: 'EN',
    footerText: '© 2025 Carolin Santos. Todos los derechos reservados.',
    navInicio: 'Inicio',
    navSobreMi: 'Sobre mí',
    navProductos: 'Productos',
    navContacto: 'Contacto',
    bienvenidaTexto: 'Creaciones únicas hechas a mano, perfectas para quienes aman lo artesanal y el estilo natural. Desde cardigans hasta accesorios de playa, todo con un toque de calidez.',
    sobreMiTexto: 'Hola, soy Carolin. Diseñadora de piezas en crochet inspiradas en la tranquilidad del mar y la calidez del sol caribeño. Cada prenda que creo tiene un pedacito de mi historia.',
    productosTexto: 'Muy pronto podrás ver aquí algunas fotos de mis creaciones favoritas. Mientras tanto, visita mi Instagram para ver todo lo que he hecho.',
    contactoTexto: '¿Te interesa un pedido personalizado o tienes alguna duda? Escríbeme por Instagram o envíame un correo.'
  },
  en: {
    inicio: 'Welcome',
    sobreMi: 'About me',
    productos: 'Some products',
    contacto: 'Contact',
    slogan: 'Crochet with a taste of sun and calm',
    btnLang: 'ES',
    footerText: '© 2025 Carolin Santos. All rights reserved.',
    navInicio: 'Home',
    navSobreMi: 'About',
    navProductos: 'Products',
    navContacto: 'Contact',
    bienvenidaTexto: 'Unique handmade creations, perfect for those who love artisanal and natural style. From cardigans to beach accessories, all with a touch of warmth.',
    sobreMiTexto: 'Hi, I’m Carolin. Designer of crochet pieces inspired by the tranquility of the sea and the warmth of the Caribbean sun. Each garment I create has a piece of my story.',
    productosTexto: 'Soon you will be able to see here some photos of my favorite creations. Meanwhile, visit my Instagram to see everything I have made.',
    contactoTexto: 'Interested in a custom order or have questions? Write me on Instagram or send me an email.'
  }
};

function updateTexts(lang) {
  document.querySelector('header h1').textContent = 'Carolin Santos'; // fijo
  document.querySelector('.slogan').textContent = texts[lang].slogan;
  document.querySelector('#btnLang').textContent = texts[lang].btnLang;

  document.querySelector('nav a[href="#inicio"]').textContent = texts[lang].navInicio;
  document.querySelector('nav a[href="#sobre-mi"]').textContent = texts[lang].navSobreMi;
  document.querySelector('nav a[href="#productos"]').textContent = texts[lang].navProductos;
  document.querySelector('nav a[href="#contacto"]').textContent = texts[lang].navContacto;

  document.querySelector('#inicio h2').textContent = texts[lang].inicio;
  document.querySelector('#inicio p').textContent = texts[lang].bienvenidaTexto;

  document.querySelector('#sobre-mi h2').textContent = texts[lang].sobreMi;
  document.querySelector('#sobre-mi p').textContent = texts[lang].sobreMiTexto;

  document.querySelector('#productos h2').textContent = texts[lang].productos;
  document.querySelector('#productos p').textContent = texts[lang].productosTexto;

  document.querySelector('#contacto h2').textContent = texts[lang].contacto;
  document.querySelector('#contacto p').textContent = texts[lang].contactoTexto;

  document.querySelector('#footerText').textContent = texts[lang].footerText;
}

let currentLang = 'es';
updateTexts(currentLang);

document.getElementById('btnLang').addEventListener('click', () => {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  updateTexts(currentLang);
});
