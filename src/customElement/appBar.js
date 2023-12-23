class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<h1><span class="putih">Pencarian</span> Cuaca</h1>`;
  }
}

customElements.define("app-bar", AppBar);
