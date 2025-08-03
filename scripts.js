document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("lang-toggle");
  let currentLang = "es";

  langToggle.addEventListener("click", () => {
    if (currentLang === "es") {
      currentLang = "en";
      langToggle.textContent = "EN";
    } else {
      currentLang = "es";
      langToggle.textContent = "ES";
    }

    document.querySelectorAll(".lang.es").forEach(el => {
      el.style.display = currentLang === "es" ? "inline" : "none";
    });
    document.querySelectorAll(".lang.en").forEach(el => {
      el.style.display = currentLang === "en" ? "inline" : "none";
    });
  });
});
