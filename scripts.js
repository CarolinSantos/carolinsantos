document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('lang-toggle');
  let currentLang = localStorage.getItem('lang') || 'es';

  function updateLanguage(lang) {
    document.querySelectorAll('.lang-es').forEach(el => {
      el.style.display = lang === 'es' ? '' : 'none';
    });
    document.querySelectorAll('.lang-en').forEach(el => {
      el.style.display = lang === 'en' ? '' : 'none';
    });
    langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    currentLang = lang;
  }

  langToggle.addEventListener('click', () => {
    updateLanguage(currentLang === 'es' ? 'en' : 'es');
  });

  updateLanguage(currentLang);

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
      messageField.focus();
    });
  });
});
