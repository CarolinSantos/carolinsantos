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
