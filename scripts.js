:root {
  --color-principal: #a86f60;
  --color-fondo: #fffaf3;
  --color-oscuro: #50362e;
  --fuente-titulo: 'Caveat', cursive;
  --fuente-texto: 'Quicksand', sans-serif;
}

body {
  margin: 0;
  font-family: var(--fuente-texto);
  background-color: var(--color-fondo);
  color: var(--color-oscuro);
  line-height: 1.6;
}

header {
  background-color: var(--color-principal);
  padding: 1rem 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  color: white;
  gap: 0.8rem;
}

.header-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-grow: 1;
  flex-wrap: wrap;
}

.logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(168, 111, 96, 0.3);
  user-select: none;
}

.textos-header {
  flex-grow: 1;
  text-align: center;
}

.logo-text {
  font-family: var(--fuente-titulo);
  font-size: 2.6rem;
  margin: 0;
  color: white;
  user-select: none;
}

.slogan {
  font-style: italic;
  font-weight: 500;
  font-size: 1.1rem;
  color: #f7d9c5cc;
  margin-top: 0.2rem;
  user-select: none;
}

#lang-toggle {
  background-color: white;
  color: var(--color-principal);
  border: none;
  border-radius: 20px;
  padding: 0.4rem 1rem;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  align-self: center;
}

nav {
  width: 100%;
  margin-top: 0.6rem;
  text-align: center;
}

nav a {
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0 1.2rem;
  text-decoration: none;
  user-select: none;
  transition: opacity 0.3s ease;
}

nav a:hover,
nav a:focus {
  opacity: 0.7;
  outline: none;
}

main {
  max-width: 900px;
  margin: 2rem auto 4rem auto;
  padding: 0 1rem;
  text-align: center;
}

section {
  margin-bottom: 3rem;
}

section h2 {
  font-family: var(--fuente-titulo);
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: var(--color-principal);
}

section p {
  max-width: 600px;
  margin: 0 auto 1.5rem;
}

.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.producto {
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(168, 111, 96, 0.2);
  padding: 1rem;
  text-align: center;
  max-width: 260px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.producto:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(168, 111, 96, 0.3);
}

.producto img {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.producto figcaption {
  font-family: var(--fuente-titulo);
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.btn-consultar {
  background-color: var(--color-principal);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  transition: background-color 0.3s ease;
  user-select: none;
}

.btn-consultar:hover {
  background-color: #c48d7a;
}

.button {
  background-color: var(--color-principal);
  color: white;
  padding: 0.6rem 1.4rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  user-select: none;
}

footer {
  background-color: var(--color-principal);
  color: white;
  text-align: center;
  padding: 1.2rem;
  font-size: 0.9rem;
  user-select: none;
}

/* Responsive */
@media (max-width: 600px) {
  header {
    flex-direction: column;
  }

  nav {
    margin-top: 0.5rem;
  }

  nav a {
    margin: 0 0.7rem;
    font-size: 1rem;
  }

  .galeria {
    grid-template-columns: 1fr;
  }

  main {
    padding: 0 0.5rem;
  }
}
