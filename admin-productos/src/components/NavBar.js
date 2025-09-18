import { LitElement, html, css } from "lit";

export class NavBar extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #1a1a1a;
      box-shadow: 0 4px 10px rgba(250, 204, 21, 0.3);
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
    }
    h1 {
      color: #facc15;
      font-size: 1.25rem;
      font-weight: bold;
    }
    button {
      background: #facc15;
      color: #121212;
      font-weight: 600;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 20px rgba(250, 204, 21, 0.4);
      transition: background 0.2s ease;
      cursor: pointer;
    }
    button:hover {
      background: #fcd34d;
    }
    .btns {
      display: flex;
      gap: 0.75rem;
    }
    img {
      width: 2rem;
      height: 2rem;
    }
  `;

  render() {
    return html`
      <nav>
        <div class="flex items-center gap-2">
          <img src="/logo.png" alt="logo" />
          <h1>Catálogo</h1>
        </div>
        <div class="btns">
          <button @click=${() => (window.location.href = "/login.html")}>
            Iniciar sesión
          </button>
          <button @click=${() => (window.location.href = "/categorias.html")}>
            Categorías
          </button>
          <button id="abrirCarrito">🛒 Carrito</button>
        </div>
      </nav>
    `;
  }
}
customElements.define("nav-bar", NavBar);
