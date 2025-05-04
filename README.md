# weather-dashboard
A responsive web app that displays real-time weather information for any city using the OpenWeatherMap API. Built with HTML, CSS, and JavaScript, it shows temperature, humidity, wind, and more with a clean, modern UI.
---

# 🌤️ Live Weather App

**Live Weather App** is a responsive and modern web application that allows users to check real-time weather information for any city worldwide. It utilizes the **OpenWeatherMap API** to fetch and display weather details dynamically. This project is built using **HTML**, **CSS**, and **JavaScript**, and showcases a clean user interface with real-time data updates.

---

## 🔍 Features

* 🔎 **Search Weather by City** – Users can type in any city name to fetch current weather data.
* 🌡️ **Displays Temperature** – Shows current temperature, "feels like" temperature, and min/max values.
* 🌥️ **Weather Condition & Forecast** – Provides weather conditions like "Clear", "Cloudy", etc., with forecast tags.
* 💧 **Humidity & Pressure** – Displays relative humidity and atmospheric pressure.
* 🌬️ **Wind Speed** – Shows wind speed in meters per second.
* 📱 **Responsive Design** – Fully responsive layout that works across devices (mobile, tablet, desktop).
* 🎨 **Modern UI** – Gradient backgrounds, cards, and font icons for an appealing user experience.

---

## 🛠️ Technologies Used

| Technology             | Purpose                                               |
| ---------------------- | ----------------------------------------------------- |
| **HTML5**              | Page structure and markup                             |
| **CSS3**               | Styling and layout (Flexbox, Grid, shadows, gradient) |
| **JavaScript**         | Dynamic functionality, API requests, DOM manipulation |
| **OpenWeatherMap API** | Source for real-time weather data                     |
| **Font Awesome**       | Icons for weather visuals                             |

---

## 🗂️ File Structure

```
📁 project-root/
│
├── index.html       # Main HTML structure
├── style.css           # CSS styling and layout
└── java_script.js      # JavaScript logic and API integration
```

---

## ⚙️ How It Works

1. When the page loads, a default city (like Pune) is shown with its current weather.
2. Users can enter a new city in the input field and press enter.
3. The app uses `fetch()` in JavaScript to call the **OpenWeatherMap API**.
4. Weather data is retrieved in JSON format.
5. The data is parsed and displayed on the page, updating the weather cards and icons.

---

## 🔗 API Reference

* **OpenWeatherMap API**

  * Endpoint: `https://api.openweathermap.org/data/2.5/weather`
  * Data includes temperature (in Kelvin), humidity, pressure, weather type, etc.

---

## 💡 Learning Outcomes

* Working with third-party APIs
* Using `fetch()` and handling asynchronous data in JavaScript
* Responsive web design with CSS Grid and Flexbox
* Creating modular, readable code with proper separation of concerns
* DOM manipulation and event handling

---

## 🧪 Future Improvements

* Add 5-day forecast feature
* Support for dark/light theme toggle
* Use geolocation to fetch weather based on user’s location
* Add loading animation while data is being fetched
* Convert temperatures from Kelvin to Celsius/Fahrenheit toggle

---

## 📸 Screenshots

*(You can add screenshots of the project here)*

---

## 📬 Feedback or Contributions

If you have any suggestions, ideas, or improvements, feel free to open an issue or contribute via pull requests.

---

