document.getElementById('langToggle').addEventListener('click', () => {
  const lang = document.documentElement.lang;
  if (lang === 'es') {
    document.documentElement.lang = 'en';
    document.querySelector('h2').textContent = 'Welcome to my crochet world';
    document.querySelector('main section p').textContent = 'Handmade designs with love, color, and a tropical touch. Every piece is unique, just like you.';
    document.querySelectorAll('h2')[1].textContent = 'Some Products';
    document.querySelectorAll('section p')[1].textContent = 'Soon you’ll be able to see some of my favorite creations here. Meanwhile, visit my Instagram to see everything I’ve made.';
    document.querySelectorAll('.button')[0].textContent = 'See on Instagram';
    document.querySelectorAll('h2')[2].textContent = 'Contact';
    document.querySelectorAll('section p')[2].textContent = 'Interested in something or want a custom order? Write me!';
    document.querySelectorAll('.button')[1].textContent = 'Send email';
    document.querySelector('footer p').textContent = '© 2025 Carolin Santos. Made with 🌞 and 🌊 from the Caribbean.';
  } else {
    location.reload();
  }
});
