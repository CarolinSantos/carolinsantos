const btnLang = document.getElementById('btnLang');
let lang = 'es';

const texts = {
  es: {
    title: 'Carolin Santos',
    slogan: 'Crochet con sabor a sol y calma',
    navInicio: 'Inicio',
    navSobre: 'Sobre mí',
    navProductos: 'Productos',
    navContacto: 'Contacto',
    h2Inicio: 'Bienvenidos',
    pInicio: 'Creaciones únicas hechas a mano, perfectas para quienes aman lo artesanal y el estilo natural. Desde cardigans hasta accesorios de playa, todo con un toque de calidez.',
    h2Sobre: 'Sobre mí',
    pSobre: 'Hola, soy Carolin. Diseñadora de piezas en crochet inspiradas en la tranquilidad del mar y la calidez del sol caribeño. Cada prenda que creo tiene un pedacito de mi historia.',
    h2Productos: 'Algunos productos',
    pProductos: 'Muy pronto podrás ver aquí algunas fotos de mis creaciones favoritas. Mientras tanto, visita mi Instagram para ver todo lo que he hecho.',
    btnInstagram: 'Ver en Instagram',
    h2Contacto: 'Contacto',
    pContacto: '¿Te interesa un pedido personalizado o tienes alguna duda? Escríbeme por Instagram o envíame un correo.',
    btnEmail: 'Escríbeme'
  },
  en: {
    title: 'Carolin Santos',
    slogan: 'Crochet with a taste of sun and calm',
    navInicio: 'Home',
    navSobre: 'About Me',
    navProductos: 'Products',
    navContacto: 'Contact',
    h2Inicio: 'Welcome',
    pInicio: 'Unique handmade creations, perfect for those who love artisanal and natural style. From cardigans to beach accessories, all with a touch of warmth.',
    h2Sobre: 'About Me',
    pSobre: 'Hi, I’m Carolin. Designer of crochet pieces inspired by the calm of the sea and the warmth of the Caribbean sun. Every piece I create has a little piece of my story.',
    h2Productos: 'Some products',
    pProductos: 'Soon you will be able to see some photos of my favorite creations here. Meanwhile, visit my Instagram to see everything I have made.',
    btnInstagram: 'See on Instagram',
    h2Contacto: 'Contact',
    pContacto: 'Interested in a custom order or have a question? Write to me on Instagram or send me an email.',
    btnEmail: 'Write to me'
  }
};

btnLang.addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';

  for (const [id, text] of Object.entries(texts[lang])) {
    const el = document.getElementById(id);
    if(el) el.textContent = text;
  }

  btnLang.textContent = lang === 'es' ? 'EN' : 'ES';
});
