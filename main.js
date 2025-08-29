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
  div.innerHTML = `
    <h3>${data.name}</h3>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
    <p>${data.weather[0].description}</p>
    <p><strong>${data.main.temp.toFixed(1)}°C</strong></p>
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
