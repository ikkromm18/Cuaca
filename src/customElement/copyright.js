class CopyRight extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<p>&copy; 2023 Cuaca Web. ikkrom_m18.</p>`;
  }
}

customElements.define("copy-right", CopyRight);
