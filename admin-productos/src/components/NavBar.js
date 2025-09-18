import { LitElement, html, css } from "lit";

export class NavBar extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #1a1a1a;
      box-shadow: 0 4px 10px rgba(250, 204, 21, 0.3);
    }
    nav {
      @apply flex items-center justify-between p-4;
    }
    h1 {
      @apply text-yellowAccent text-xl font-bold;
    }
    button {
      @apply bg-yellowAccent text-dark font-semibold px-4 py-2 rounded-lg shadow-glow hover:bg-yellow-400 transition;
    }
    .btns {
      @apply flex gap-3;
    }
  `;

  render() {
    return html`
      <nav>
        <div class="flex items-center gap-2">
          <img src="/logo.png" alt="logo" class="w-8 h-8" />
          <h1>Catálogo</h1>
        </div>
        <div class="btns">
          <button @click=${() => (window.location.href = "/login.html")}>
            Iniciar sesión
          </button>
          <button @click=${() => (window.location.href = "/categorias.html")}>
            Categorías
          </button>
          <button @click=${() => (window.location.href = "/pedido.html")}>
            Hacer pedido
          </button>
        </div>
      </nav>
    `;
  }
}
customElements.define("nav-bar", NavBar);
