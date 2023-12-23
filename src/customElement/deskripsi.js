class Deskripsi extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<p class="deskripsi mb">Temukan informasi cuaca terkini di kota tujuan anda. Cukup masukkan nama kota, klik "Cek Cuaca"</p>`;
  }
}

customElements.define("deskripsi-ce", Deskripsi);
