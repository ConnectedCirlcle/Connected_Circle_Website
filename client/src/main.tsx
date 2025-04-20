import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Additional CSS to match the design reference
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #F8F1E6;
    color: #333333;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Playfair Display', serif;
  }
  .episode-card:hover {
    transform: translateY(-5px);
  }
  .quote-card {
    position: relative;
  }
  .quote-card:before {
    content: '"';
    font-family: 'Playfair Display', serif;
    font-size: 6rem;
    position: absolute;
    top: -1.5rem;
    left: -1rem;
    color: rgba(178, 89, 60, 0.1);
  }

  /* Custom colors */
  :root {
    --rust-red: #B2593C;
    --olive-green: #858461;
    --cream-beige: #F8F1E6;
    --dark-text: #333333;
    --light-text: #8A8A8A;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
