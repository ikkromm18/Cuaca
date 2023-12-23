class Container extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<input type="text" id="cityInput" placeholder="Masukkan nama kota" required>
    <button id="searchButton" class="mainColor bold" type="submit">Cek Cuaca</button>
    <div id="weatherResult">
    </div>`;
  }
}

customElements.define("container-item", Container);
