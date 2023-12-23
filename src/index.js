import "./styles/style.css";

const main = () => {
  const input = document.querySelector("#cityInput");
  const search = document.querySelector("#searchButton");
  const apiKey = "1fe5f03e8b679377cbc41601289edfdd";

  search.addEventListener("click", () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((response) => {
        let weatherResult = document.querySelector("#weatherResult");

        if (response.cod === "404") {
          // Kota tidak ditemukan
          weatherResult.innerHTML = "<p>Kota/Wilayah tidak ditemukan.</p>";
        } else {
          // Kota ditemukan, tampilkan informasi cuaca
          weatherResult.innerHTML = `<h3>${response.name}, ${response.sys.country}</h3>
        <h1>${response.main.temp}°С</h1>
        <h6 class="mb bold">${response.weather[0].description}</h6>
        <p>Temperature from ${response.main.temp_min}°С to ${response.main.temp_max}°С</p>
        <p>Wind Speed : ${response.wind.speed} m/s</p>
        <p>Clouds : ${response.clouds.all}%</p>
        <p class="mb">Geo Coordinates : [${response.coord.lat}, ${response.coord.lon}]</p>`;
        }
      })
      .catch((error) => {
        // Tangani kesalahan saat melakukan fetch
        console.error("Error fetching weather data:", error);
        let weatherResult = document.querySelector("#weatherResult");
        weatherResult.innerHTML =
          "<p>Masukkan Nama KotaTerjadi kesalahan, coba lagi nanti.</p>";
      });

    input.value = null;
  });
};

export default main;
