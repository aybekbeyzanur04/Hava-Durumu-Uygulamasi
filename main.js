const API_KEY = "SENIN_API_KEY"; // <-- Buraya OpenWeatherMap API key'inizi yazın

const cities = [
  "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın",
  "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı",
  "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir",
  "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul",
  "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya",
  "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir",
  "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ",
  "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray",
  "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova",
  "Karabük", "Kilis", "Osmaniye", "Düzce"
];

const weatherCards = document.getElementById("weatherCards");

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},TR&appid=${API_KEY}&lang=tr&units=metric`;
  const response = await fetch(url);
  if (!response.ok) return null;
  return await response.json();
}

async function loadWeatherData() {
  weatherCards.innerHTML = "";
  for (const city of cities) {
    const data = await getWeather(city);
    if (data) {
      const card = createWeatherCard(data);
      weatherCards.appendChild(card);
    }
  }
}

function createWeatherCard(data) {
  const div = document.createElement("div");
  div.className = "weather-card";

  // Basit görsel eşleme (icon koduna göre)
  const iconCode = data.weather[0].icon;
  let bgImage = "https://images.unsplash.com/photo-1503264116251-35a269479413"; // default: cloudy

  if (iconCode.includes("01")) bgImage = "https://images.unsplash.com/photo-1501973801540-537f08ccae7d"; // clear
  else if (iconCode.includes("02")) bgImage = "https://images.unsplash.com/photo-1523987355523-c7b5b94f1c39"; // few clouds
  else if (iconCode.includes("09") || iconCode.includes("10")) bgImage = "https://images.unsplash.com/photo-1561489429-9c0f2c44086c"; // rain
  else if (iconCode.includes("13")) bgImage = "https://images.unsplash.com/photo-1608889178115-27bfe85f5caa"; // snow
  else if (iconCode.includes("11")) bgImage = "https://images.unsplash.com/photo-1602275832436-e4f3b8e3ad0f"; // thunderstorm

  div.style.backgroundImage = `url(${bgImage}&auto=format&fit=crop&w=400&q=80)`;

  div.innerHTML = `
    <div class="overlay">
      <h3>${data.name}</h3>
      <p>${data.weather[0].description}</p>
      <p><strong>${data.main.temp.toFixed(1)}°C</strong></p>
      <p>Nem: ${data.main.humidity}%</p>
      <p>Rüzgar: ${data.wind.speed} m/s</p>
    </div>
  `;
  return div;
}


function searchCity() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase().trim();
  const cards = document.querySelectorAll(".weather-card");
  cards.forEach(card => {
    const cityName = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = cityName.includes(searchInput) ? "block" : "none";
  });
}

// Sayfa yüklendiğinde çalışır
window.onload = loadWeatherData;

