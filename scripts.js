const langToggle = document.getElementById('lang-toggle');
let currentLang = 'es';

function updateLanguage(lang) {
  const esElements = document.querySelectorAll('.lang-es');
  const enElements = document.querySelectorAll('.lang-en');

  if (lang === 'es') {
    esElements.forEach(el => el.style.display = '');
    enElements.forEach(el => el.style.display = 'none');
    langToggle.textContent = 'EN';
    document.documentElement.lang = 'es';
  } else {
    esElements.forEach(el => el.style.display = 'none');
    enElements.forEach(el => el.style.display = '');
    langToggle.textContent = 'ES';
    document.documentElement.lang = 'en';
  }
  currentLang = lang;
}

langToggle.addEventListener('click', () => {
  const newLang = currentLang === 'es' ? 'en' : 'es';
  updateLanguage(newLang);
});

updateLanguage(currentLang);

document.addEventListener('DOMContentLoaded', () => {
  const langToggleBtn = document.getElementById('lang-toggle');
  let currentLang = localStorage.getItem('lang') || 'es';

  function updateLanguage(lang) {
    document.querySelectorAll('.lang-es').forEach(el => {
      el.style.display = lang === 'es' ? '' : 'none';
    });
    document.querySelectorAll('.lang-en').forEach(el => {
      el.style.display = lang === 'en' ? '' : 'none';
    });
    langToggleBtn.textContent = lang === 'es' ? 'EN' : 'ES';
    localStorage.setItem('lang', lang);
    currentLang = lang;
  }

  langToggleBtn.addEventListener('click', () => {
    updateLanguage(currentLang === 'es' ? 'en' : 'es');
  });

  updateLanguage(currentLang);

  // Scroll al formulario y autollenar mensaje
  document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.getAttribute('data-product');
      const form = document.getElementById('contact-form');
      const messageField = document.getElementById('message');

      if (messageField) {
        messageField.value = currentLang === 'es'
          ? `Hola, me gustaría hacer un pedido del producto: ${productName}.`
          : `Hello, I would like to order the product: ${productName}.`;
      }

      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Poner foco en el campo mensaje para mejor UX
      messageField.focus();
    });
  });
});

const langToggle = document.getElementById('lang-toggle');
let currentLang = 'es';

function updateLanguage(lang) {
  const esElements = document.querySelectorAll('.lang-es');
  const enElements = document.querySelectorAll('.lang-en');

  if (lang === 'es') {
    esElements.forEach(el => el.style.display = '');
    enElements.forEach(el => el.style.display = 'none');
    langToggle.textContent = 'EN';
    document.documentElement.lang = 'es';
  } else {
    esElements.forEach(el => el.style.display = 'none');
    enElements.forEach(el => el.style.display = '');
    langToggle.textContent = 'ES';
    document.documentElement.lang = 'en';
  }
  currentLang = lang;
}

langToggle.addEventListener('click', () => {
  const newLang = currentLang === 'es' ? 'en' : 'es';
  updateLanguage(newLang);
});

updateLanguage(currentLang);
