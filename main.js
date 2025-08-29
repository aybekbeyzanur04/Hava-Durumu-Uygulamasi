const cityCoordinates = {
  "Adana": { lat: 36.98542, lon: 35.32502 },
  "Adıyaman": { lat: 37.76299, lon: 38.277298 },
  "Afyonkarahisar": { lat: 38.756217, lon: 30.537846 },
  "Ağrı": { lat: 39.718993, lon: 43.047663 },
  "Amasya": { lat: 40.656314, lon: 35.837068 },
  "Ankara": { lat: 39.942928, lon: 32.860481 },
  "Antalya": { lat: 36.896126, lon: 30.713081 },
  "Artvin": { lat: 41.18131, lon: 41.820537 },
  "Aydın": { lat: 37.838044, lon: 27.845571 },
  "Balıkesir": { lat: 39.644878, lon: 27.885361 },
  "Bilecik": { lat: 40.14296, lon: 29.979159 },
  "Bingöl": { lat: 38.88472, lon: 40.496391 },
  "Bitlis": { lat: 38.400664, lon: 42.108971 },
  "Bolu": { lat: 40.732006, lon: 31.607052 },
  "Burdur": { lat: 37.718293, lon: 30.282248 },
  "Bursa": { lat: 40.182816, lon: 29.066148 },
  "Çanakkale": { lat: 40.146777, lon: 26.40822 },
  "Çankırı": { lat: 40.60019, lon: 33.616304 },
  "Çorum": { lat: 40.549853, lon: 34.953694 },
  "Denizli": { lat: 37.783026, lon: 29.096246 },
  "Diyarbakır": { lat: 37.9137, lon: 40.224899 },
  "Edirne": { lat: 41.675907, lon: 26.553608 },
  "Elazığ": { lat: 38.6763, lon: 39.221802 },
  "Erzincan": { lat: 39.75, lon: 39.5 },
  "Erzurum": { lat: 39.905994, lon: 41.273784 },
  "Eskişehir": { lat: 39.766724, lon: 30.525608 },
  "Gaziantep": { lat: 37.062931, lon: 37.378159 },
  "Giresun": { lat: 40.917921, lon: 38.389876 },
  "Gümüşhane": { lat: 40.458673, lon: 39.478961 },
  "Hakkari": { lat: 37.57812, lon: 43.733805 },
  "Hatay": { lat: 36.217687, lon: 36.165362 },
  "Isparta": { lat: 37.075059, lon: 30.5563 },
  "Mersin": { lat: 36.81275, lon: 34.630542 },
  "İstanbul": { lat: 41.0082, lon: 28.9784 },
  "İzmir": { lat: 38.4237, lon: 27.1428 },
  "Kars": { lat: 40.605158, lon: 43.096173 },
  "Kastamonu": { lat: 41.3887, lon: 33.7827 },
  "Kayseri": { lat: 38.7312, lon: 35.4787 },
  "Kırklareli": { lat: 41.7333, lon: 27.2167 },
  "Kırşehir": { lat: 39.1425, lon: 34.1709 },
  "Kocaeli": { lat: 40.8533, lon: 29.8815 },
  "Konya": { lat: 37.8667, lon: 32.4833 },
  "Kütahya": { lat: 39.4167, lon: 29.9833 },
  "Malatya": { lat: 38.3552, lon: 38.3095 },
  "Manisa": { lat: 38.6191, lon: 27.4288 },
  "Kahramanmaraş": { lat: 37.5833, lon: 36.9333 },
  "Mardin": { lat: 37.3122, lon: 40.735 },
  "Muğla": { lat: 37.1642, lon: 28.2624 },
  "Muş": { lat: 38.9741, lon: 41.959 },
  "Nevşehir": { lat: 38.7235, lon: 34.7194 },
  "Niğde": { lat: 38.0665, lon: 34.7051 },
  "Ordu": { lat: 40.8293, lon: 37.4083 },
  "Rize": { lat: 40.9348, lon: 40.8271 },
  "Sakarya": { lat: 40.7732, lon: 30.4816 },
  "Samsun": { lat: 41.2894, lon: 36.3259 },
  "Siirt": { lat: 37.8647, lon: 42.051 },
  "Sinop": { lat: 42.0267, lon: 35.1507 },
  "Sivas": { lat: 39.7498, lon: 37.0137 },
  "Tekirdağ": { lat: 41.1186, lon: 27.4144 },
  "Tokat": { lat: 40.3321, lon: 36.3845 },
  "Trabzon": { lat: 41.0052, lon: 39.7253 },
  "Tunceli": { lat: 39.2198, lon: 39.414 },
  "Şanlıurfa": { lat: 37.1604, lon: 38.7909 },
  "Uşak": { lat: 38.612, lon: 29.324 },
  "Van": { lat: 38.5084, lon: 43.3742 },
  "Yozgat": { lat: 39.7152, lon: 35.171 },
  "Zonguldak": { lat: 41.2503, lon: 31.839 },
  "Aksaray": { lat: 38.4246, lon: 33.9215 },
  "Bayburt": { lat: 40.2023, lon: 40.2122 },
  "Karaman": { lat: 37.1797, lon: 33.3384 },
  "Kırıkkale": { lat: 39.886, lon: 33.8279 },
  "Batman": { lat: 37.7874, lon: 41.2574 },
  "Şırnak": { lat: 37.4553, lon: 42.5212 },
  "Bartın": { lat: 41.4948, lon: 32.4354 },
  "Ardahan": { lat: 41.0373, lon: 42.7462 },
  "Iğdır": { lat: 39.8945, lon: 43.9427 },
  "Yalova": { lat: 40.6292, lon: 29.2500 },
  "Karabük": { lat: 41.1090, lon: 32.6051 },
  "Kilis": { lat: 36.7797, lon: 37.1417 },
  "Osmaniye": { lat: 37.213, lon: 36.1763 },
  "Düzce": { lat: 40.8438, lon: 31.1565 }
};

const weatherCards = document.getElementById("weatherCards");

async function getWeatherByCoords(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relative_humidity_2m,wind_speed_10m&temperature_unit=celsius&windspeed_unit=ms&timezone=auto`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error("Veri alınamadı:", res.status);
    return null;
  }
  return await res.json();
}

function getWeatherDescription(code) {
  const mapping = {
    0: "Açık", 1: "Genelde Açık", 2: "Parçalı Bulut", 3: "Kapalı",
    45: "Sisli", 48: "Yoğun Sis", 51: "Çisenti", 61: "Hafif Yağmur",
    63: "Yağmur", 65: "Yoğun Yağmur", 71: "Kar", 73: "Yoğun Kar",
    95: "Fırtına", 99: "Şiddetli Fırtına"
  };
  return mapping[code] || "Bilinmiyor";
}

function createWeatherCard(city, data) {
  const div = document.createElement("div");
  div.className = "weather-card";
  const curr = data.current_weather;
  const humidity = data.hourly.relative_humidity_2m[0];
  const wind = data.hourly.wind_speed_10m[0];
  div.innerHTML = `
    <h3>${city}</h3>
    <p><strong>${curr.temperature}°C</strong></p>
    <p>${getWeatherDescription(curr.weathercode)}</p>
    <p>Nem: ${humidity}%</p>
    <p>Rüzgar: ${wind} m/s</p>
  `;
  return div;
}

async function loadWeatherCards() {
  weatherCards.innerHTML = "";
  for (const city in cityCoordinates) {
    const { lat, lon } = cityCoordinates[city];
    const data = await getWeatherByCoords(lat, lon);
    if (data) weatherCards.appendChild(createWeatherCard(city, data));
  }
}

function searchCity() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  document.querySelectorAll(".weather-card").forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = name.includes(input) ? "block" : "none";
  });
}

window.onload = loadWeatherCards;
