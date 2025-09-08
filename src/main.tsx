import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Favicon from './assets/logo-esten.png'; // Importamos a imagem do favicon

// Função para definir o favicon dinamicamente
const setFavicon = () => {
  // Procura por uma tag de favicon existente ou cria uma nova
  let link = document.querySelector<HTMLLinkElement>("link[rel*='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  link.type = 'image/png';
  // O Vite substituirá 'Favicon' pelo caminho correto da imagem após o build
  link.href = Favicon;
};

// Executa a função para garantir que o favicon seja definido
setFavicon();

createRoot(document.getElementById("root")!).render(<App />);
