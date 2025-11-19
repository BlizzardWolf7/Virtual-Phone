const apps = [
    { name: "Messages", icon: "fas fa-comment", id: "messages" },
    { name: "Camera", icon: "fas fa-camera" },
    { name: "Music", icon: "fas fa-music" },
    { name: "Settings", icon: "fas fa-cog" },
    { name: "Weather", icon: "fas fa-cloud-sun" },
    { name: "Gallery", icon: "fas fa-images" },
    { name: "Calculator", icon: "fas fa-calculator" }
];

const newsArticles = [
    {
        id: "tech-innovations",
        title: "Tech Innovations 2025",
        description: "AI copilots, smart robotics, and edge computing breakthroughs to watch this year.",
        image: "news1.png",
        fullText: "Artificial intelligence and robotics are evolving at an unprecedented rate. Experts predict a surge in collaborative robots, on-device AI, and sustainable chip manufacturing shaping 2025.",
        category: "Technology",
        time: "2h ago",
        source: "TechWire",
        tags: ["AI", "Robotics", "Edge"]
    },
    {
        id: "spacex-mars",
        title: "SpaceX’s Mars Mission",
        description: "Musk unveils a refreshed plan with rapid launches and reusable crew habitats.",
        image: "https://source.unsplash.com/600x400/?space,rocket",
        fullText: "SpaceX has revealed a detailed plan to send humans to Mars, with new Starship innovations, rapid launch cadence, and modular habitats designed to scale a permanent settlement.",
        category: "Science",
        time: "4h ago",
        source: "Orbital Daily",
        tags: ["Space", "Exploration"]
    },
    {
        id: "market-surges",
        title: "Stock Market Surges",
        description: "Global indexes rally as green tech and semiconductors outperform.",
        image: "https://source.unsplash.com/600x400/?finance,stocks",
        fullText: "The stock market is seeing unprecedented growth as investors become more optimistic. Analysts point to resilient consumer spending and policy incentives fuelling clean energy and semiconductor sectors.",
        category: "Markets",
        time: "30m ago",
        source: "MarketPulse",
        tags: ["Finance", "Stocks"]
    },
    {
        id: "climate-action",
        title: "Climate Action Coalition",
        description: "Forty cities commit to ambitious net-zero targets and shared funding.",
        image: "https://source.unsplash.com/600x400/?climate,city",
        fullText: "A new coalition of global cities has pledged to reach net-zero emissions by 2035, pooling investments into public transit, green roofs, and community-led energy grids.",
        category: "Climate",
        time: "1d ago",
        source: "EarthWatch",
        tags: ["Environment", "Policy"]
    },
    {
        id: "gaming-showcase",
        title: "Indie Gaming Showcase",
        description: "Immersive storytelling and cozy sims headline this year’s reveal event.",
        image: "https://source.unsplash.com/600x400/?gaming,controller",
        fullText: "Creative studios brought emotional narratives, minimalist art, and cross-platform releases to the spotlight during the Indie Gaming Showcase, signaling a vibrant year ahead for players.",
        category: "Entertainment",
        time: "3d ago",
        source: "PlayState",
        tags: ["Gaming", "Indie"]
    },
    {
        id: "health-bio",
        title: "BioTech Breakthrough",
        description: "mRNA therapies show promise in tackling rare autoimmune conditions.",
        image: "https://source.unsplash.com/600x400/?biotech,laboratory",
        fullText: "Researchers report encouraging mRNA therapy trials addressing autoimmune disorders, opening potential treatments for conditions previously deemed untreatable.",
        category: "Health",
        time: "6h ago",
        source: "MedLine",
        tags: ["Healthcare", "Research"]
    }
];

const conversations = [
    {
        id: "alex",
        contact: "Alex Rivera",
        initials: "AR",
        messages: [
            { author: "them", text: "Hey! Are you coming to game night?", time: "18:35" },
            { author: "me", text: "Wouldn’t miss it!", time: "18:38" }
        ]
    },
    {
        id: "jordan",
        contact: "Jordan Lee",
        initials: "JL",
        messages: [
            { author: "them", text: "New coffee shop opened downtown ☕", time: "16:12" },
            { author: "me", text: "Let’s check it out tomorrow morning.", time: "16:18" }
        ]
    },
    {
        id: "morgan",
        contact: "Morgan Diaz",
        initials: "MD",
        messages: [
            { author: "them", text: "Flight booked! ✈️", time: "12:04" },
            { author: "me", text: "Amazing. I’ll sort the hotel tonight.", time: "12:16" }
        ]
    }
];

const weatherCodeMap = {
    0: { text: "Clear sky", emoji: "☀️" },
    1: { text: "Mostly clear", emoji: "🌤️" },
    2: { text: "Partly cloudy", emoji: "⛅" },
    3: { text: "Overcast", emoji: "☁️" },
    45: { text: "Fog", emoji: "🌫️" },
    48: { text: "Fog", emoji: "🌫️" },
    51: { text: "Light drizzle", emoji: "🌦️" },
    53: { text: "Drizzle", emoji: "🌦️" },
    55: { text: "Heavy drizzle", emoji: "🌧️" },
    56: { text: "Freezing drizzle", emoji: "🌧️" },
    57: { text: "Freezing drizzle", emoji: "🌧️" },
    61: { text: "Light rain", emoji: "🌧️" },
    63: { text: "Rain", emoji: "🌧️" },
    65: { text: "Heavy rain", emoji: "⛈️" },
    66: { text: "Freezing rain", emoji: "🌧️" },
    67: { text: "Freezing rain", emoji: "🌧️" },
    71: { text: "Light snow", emoji: "🌨️" },
    73: { text: "Snow", emoji: "❄️" },
    75: { text: "Heavy snow", emoji: "❄️" },
    77: { text: "Snow grains", emoji: "🌨️" },
    80: { text: "Light showers", emoji: "🌦️" },
    81: { text: "Showers", emoji: "🌧️" },
    82: { text: "Heavy showers", emoji: "⛈️" },
    85: { text: "Snow showers", emoji: "🌨️" },
    86: { text: "Heavy snow", emoji: "❄️" },
    95: { text: "Thunderstorm", emoji: "⛈️" },
    96: { text: "Thunderstorm", emoji: "⛈️" },
    99: { text: "Thunderstorm", emoji: "⛈️" }
};

const DEFAULT_WEATHER_LOCATION = {
    lat: 55.6761,
    lon: 12.5683,
    label: "Copenhagen, Denmark"
};

let currentPage = 1;
let pagesContainer;
let navDots;
let pageElements = [];
let startX = 0;
let airplaneMode = false;
let expandedNewsPanel = null;

const weatherState = {
    widget: null,
    location: null,
    icon: null,
    temp: null,
    condition: null,
    humidity: null,
    wind: null
};

const newsState = {
    feed: null,
    searchInput: null,
    query: ""
};

const messagesState = {
    root: null,
    listView: null,
    threadView: null,
    threadMessages: null,
    threadForm: null,
    threadInput: null,
    headerTitle: null,
    backButton: null,
    closeButton: null,
    contactLabel: null,
    currentConversationId: null
};

document.addEventListener("DOMContentLoaded", () => {
    pagesContainer = document.querySelector(".ui-pages");
    navDots = document.querySelectorAll(".ui-dot");
    pageElements = Array.from(document.querySelectorAll(".ui-page"));
    const phone = document.querySelector(".ui-phone");

    setPageClasses();
    updateDots();

    loadApps();
    initialiseNews();
    initialiseWeather();
    initialiseMessagesApp();

    updateTime1();
    updateTime2();

    setInterval(updateTime1, 1000);
    setInterval(updateTime2, 1000);

    if (phone) {
        phone.addEventListener("touchstart", handleTouchStart, { passive: true });
        phone.addEventListener("touchend", handleTouchEnd, { passive: true });
    }
});

function toggleStatusBar() {
    const statusBar = document.querySelector(".ui-status-bar");
    if (!statusBar) return;
    statusBar.classList.toggle("active");
}

function toggleSetting(element, iconId) {
    if (!element) return;
    const willActivate = !element.classList.contains("active");
    element.classList.toggle("active", willActivate);

    const status = element.querySelector("span");
    if (status) {
        status.textContent = willActivate ? "Til" : "Fra";
    }

    if (!iconId) return;

    const icon = document.getElementById(iconId);
    if (!icon) return;

    icon.style.display = willActivate ? "inline-block" : "none";
}

function toggleFlytilstand(element) {
    if (!element) return;
    airplaneMode = !airplaneMode;
    element.classList.toggle("active", airplaneMode);

    const status = element.querySelector("span");
    if (status) {
        status.textContent = airplaneMode ? "Til" : "Fra";
    }

    const wifiIcon = document.getElementById("icon-wifi");
    const signalIcon = document.getElementById("icon-signal");
    const bluetoothIcon = document.getElementById("icon-bluetooth");
    const planeIcon = document.getElementById("icon-fly");

    if (airplaneMode) {
        if (wifiIcon) wifiIcon.style.display = "none";
        if (signalIcon) signalIcon.style.display = "none";
        if (bluetoothIcon) bluetoothIcon.style.display = "none";
        if (planeIcon) planeIcon.classList.remove("hidden");
    } else {
        if (wifiIcon) wifiIcon.style.display = "inline-block";
        if (signalIcon) signalIcon.style.display = "inline-block";
        if (bluetoothIcon) bluetoothIcon.style.display = "inline-block";
        if (planeIcon) planeIcon.classList.add("hidden");
    }
}

function closeWeatherWidget() {
    const widget = weatherState.widget || document.querySelector(".ui-weather-widget");
    if (widget) {
        widget.style.display = "none";
    }
}

function updateTime1() {
    const now = new Date();
    const display = document.getElementById("current-time1");
    const dayElement = document.querySelector(".ui-day");

    if (display) {
        display.textContent = formatTime(now);
    }

    if (dayElement) {
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        dayElement.textContent = dayNames[now.getDay()];
    }
}

function updateTime2() {
    const now = new Date();
    const display = document.getElementById("current-time2");
    if (display) {
        display.textContent = formatTime(now);
    }
}

function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
}

function initialiseWeather() {
    weatherState.widget = document.getElementById("weather-widget");
    weatherState.location = document.getElementById("weather-location");
    weatherState.icon = document.getElementById("weather-icon");
    weatherState.temp = document.getElementById("weather-temp");
    weatherState.condition = document.getElementById("weather-condition");
    weatherState.humidity = document.getElementById("weather-humidity");
    weatherState.wind = document.getElementById("weather-wind");

    if (!weatherState.widget) return;

    setWeatherLoadingState();

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => fetchWeather(coords.latitude, coords.longitude, false),
            () => fetchWeather(DEFAULT_WEATHER_LOCATION.lat, DEFAULT_WEATHER_LOCATION.lon, true),
            { enableHighAccuracy: false, timeout: 8000 }
        );
    } else {
        fetchWeather(DEFAULT_WEATHER_LOCATION.lat, DEFAULT_WEATHER_LOCATION.lon, true);
    }
}

function setWeatherLoadingState() {
    if (weatherState.location) {
        weatherState.location.textContent = "Detecting location…";
    }
    if (weatherState.condition) {
        weatherState.condition.textContent = "Loading current weather…";
    }
    if (weatherState.temp) {
        weatherState.temp.textContent = "--°C";
    }
    if (weatherState.icon) {
        weatherState.icon.textContent = "🌤️";
    }
    if (weatherState.humidity) {
        weatherState.humidity.textContent = "--%";
    }
    if (weatherState.wind) {
        weatherState.wind.textContent = "-- km/h";
    }
}

function fetchWeather(lat, lon, usedFallback) {
    Promise.all([fetchLocationName(lat, lon), fetchWeatherData(lat, lon)])
        .then(([location, weather]) => {
            if (!weather) {
                handleWeatherError(usedFallback);
                return;
            }
            applyWeather(location, weather, usedFallback);
        })
        .catch(() => {
            handleWeatherError(usedFallback);
        });
}

function fetchLocationName(lat, lon) {
    return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    )
        .then((response) => (response.ok ? response.json() : Promise.reject()))
        .then((data) => {
            const city = data.city || data.locality || data.principalSubdivision || null;
            const country = data.countryName || null;
            if (!city && !country) {
                return null;
            }
            return {
                city: city ?? "Unknown",
                country: country ?? "Unknown"
            };
        })
        .catch(() => null);
}

function fetchWeatherData(lat, lon) {
    const params = new URLSearchParams({
        latitude: lat,
        longitude: lon,
        current: "temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m",
        timezone: "auto",
        windspeed_unit: "kmh"
    });

    return fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`)
        .then((response) => (response.ok ? response.json() : Promise.reject()))
        .catch(() => null);
}

function applyWeather(location, weather, usedFallback) {
    if (!weather || !weather.current) {
        handleWeatherError(usedFallback);
        return;
    }

    const current = weather.current;
    const condition = describeWeatherCode(current.weather_code);

    if (weatherState.location) {
        if (location) {
            weatherState.location.textContent = `📍 ${location.city}, ${location.country}`;
        } else if (usedFallback) {
            weatherState.location.textContent = `📍 ${DEFAULT_WEATHER_LOCATION.label}`;
        } else {
            weatherState.location.textContent = "📍 Location unavailable";
        }
    }

    if (weatherState.icon) {
        weatherState.icon.textContent = condition.emoji;
    }

    if (weatherState.temp) {
        const temp = typeof current.temperature_2m === "number" ? Math.round(current.temperature_2m) : null;
        weatherState.temp.textContent = temp !== null ? `${temp}°C` : "--°C";
    }

    if (weatherState.condition) {
        weatherState.condition.textContent = condition.text;
    }

    if (weatherState.humidity) {
        const humidity =
            typeof current.relative_humidity_2m === "number"
                ? `${Math.round(current.relative_humidity_2m)}%`
                : "--%";
        weatherState.humidity.textContent = humidity;
    }

    if (weatherState.wind) {
        const wind =
            typeof current.wind_speed_10m === "number"
                ? `${Math.round(current.wind_speed_10m)} km/h`
                : "-- km/h";
        weatherState.wind.textContent = wind;
    }
}

function describeWeatherCode(code) {
    return weatherCodeMap[code] ?? { text: "Unknown conditions", emoji: "🌡️" };
}

function handleWeatherError(usedFallback) {
    if (weatherState.location) {
        weatherState.location.textContent = usedFallback
            ? `📍 ${DEFAULT_WEATHER_LOCATION.label}`
            : "📍 Location unavailable";
    }
    if (weatherState.condition) {
        weatherState.condition.textContent = "Weather data unavailable.";
    }
    if (weatherState.temp) {
        weatherState.temp.textContent = "--°C";
    }
    if (weatherState.icon) {
        weatherState.icon.textContent = "🌡️";
    }
    if (weatherState.humidity) {
        weatherState.humidity.textContent = "--%";
    }
    if (weatherState.wind) {
        weatherState.wind.textContent = "-- km/h";
    }
}

function loadApps() {
    const appGrid = document.querySelector(".ui-apps-grid");
    if (!appGrid) return;

    appGrid.innerHTML = "";

    apps.forEach((app) => {
        const appElement = document.createElement("div");
        appElement.classList.add("ui-app");
        appElement.innerHTML = `<i class="${app.icon}"></i><span>${app.name}</span>`;
        if (app.id) {
            appElement.dataset.appId = app.id;
        }
        appElement.addEventListener("click", () => handleAppLaunch(app.id));
        appGrid.appendChild(appElement);
    });
}

function handleAppLaunch(appId) {
    if (appId === "messages") {
        openMessagesApp();
    }
}

function goToPage(page) {
    if (currentPage === page) return;

    currentPage = page;
    setPageClasses();
    updateDots();
}

function updateDots() {
    if (!navDots) return;
    navDots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentPage);
    });
}

function setPageClasses() {
    if (!pageElements.length) return;
    pageElements.forEach((pageEl, index) => {
        pageEl.classList.remove("active", "previous", "next");
        if (index === currentPage) {
            pageEl.classList.add("active");
        } else if (index < currentPage) {
            pageEl.classList.add("previous");
        } else {
            pageEl.classList.add("next");
        }
    });
}

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
    const endX = event.changedTouches[0].clientX;
    const diff = startX - endX;
    const maxPageIndex = pageElements.length ? pageElements.length - 1 : 2;

    if (diff > 50 && currentPage < maxPageIndex) {
        goToPage(currentPage + 1);
    } else if (diff < -50 && currentPage > 0) {
        goToPage(currentPage - 1);
    }
}

function initialiseNews() {
    newsState.feed = document.getElementById("news-feed");
    newsState.searchInput = document.getElementById("news-search");

    if (newsState.searchInput) {
        newsState.searchInput.addEventListener("input", handleNewsSearch);
    }

    renderNews(newsArticles);
}

function handleNewsSearch(event) {
    const query = event.target.value.trim().toLowerCase();
    newsState.query = query;

    const filtered = query
        ? newsArticles.filter((article) => {
              const haystack = [
                  article.title,
                  article.description,
                  article.fullText,
                  article.category,
                  article.source,
                  ...(article.tags ?? [])
              ]
                  .join(" ")
                  .toLowerCase();
              return haystack.includes(query);
          })
        : newsArticles;

    renderNews(filtered, query);
}

function renderNews(articles, query = "") {
    if (!newsState.feed) return;

    newsState.feed.innerHTML = "";

    if (!articles.length) {
        const empty = document.createElement("div");
        empty.className = "ui-news-empty";
        empty.textContent = query
            ? `No stories match “${query}”. Try another keyword.`
            : "No stories available right now.";
        newsState.feed.appendChild(empty);
        return;
    }

    articles.forEach((article) => {
        const card = document.createElement("article");
        card.className = "ui-news-card";
        card.innerHTML = `
            <div class="ui-news-card-media">
                <img src="${article.image}" alt="${article.title}">
            </div>
            <div class="ui-news-card-body">
                <div class="ui-news-card-meta">
                    <span class="ui-news-chip">${article.category}</span>
                    <span>${article.time}</span>
                </div>
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                ${Array.isArray(article.tags) && article.tags.length ? `
                    <div class="ui-news-tags">
                        ${article.tags.map((tag) => `<span class="ui-news-tag">${tag}</span>`).join("")}
                    </div>
                ` : ""}
                <div class="ui-news-card-footer">
                    <span>${article.source}</span>
                    <button type="button" data-article-id="${article.id}">Read</button>
                </div>
            </div>
        `;

        const button = card.querySelector("button[data-article-id]");
        if (button) {
            button.addEventListener("click", (event) => {
                event.stopPropagation();
                openNews(article.id);
            });
        }

        card.addEventListener("click", () => openNews(article.id));

        newsState.feed.appendChild(card);
    });
}

function openNews(articleId) {
    const news = newsArticles.find((item) => item.id === articleId);
    if (!news) return;

    if (!expandedNewsPanel) {
        expandedNewsPanel = document.createElement("div");
        expandedNewsPanel.classList.add("ui-news-expanded");
        const closeButton = document.createElement("span");
        closeButton.className = "ui-news-close";
        closeButton.innerHTML = "&times;";
        closeButton.addEventListener("click", () => {
            expandedNewsPanel.style.display = "none";
        });
        expandedNewsPanel.appendChild(closeButton);

        const image = document.createElement("img");
        const title = document.createElement("h3");
        const meta = document.createElement("div");
        const source = document.createElement("span");
        const description = document.createElement("p");

        image.dataset.role = "image";
        title.dataset.role = "title";
        description.dataset.role = "description";
        meta.dataset.role = "meta";
        source.dataset.role = "source";

        meta.className = "ui-news-expanded-meta";
        source.className = "ui-news-expanded-source";

        expandedNewsPanel.appendChild(image);
        expandedNewsPanel.appendChild(title);
        expandedNewsPanel.appendChild(meta);
        expandedNewsPanel.appendChild(description);
        expandedNewsPanel.appendChild(source);

        document.body.appendChild(expandedNewsPanel);
    }

    const image = expandedNewsPanel.querySelector('[data-role="image"]');
    const title = expandedNewsPanel.querySelector('[data-role="title"]');
    const description = expandedNewsPanel.querySelector('[data-role="description"]');
    const meta = expandedNewsPanel.querySelector('[data-role="meta"]');
    const source = expandedNewsPanel.querySelector('[data-role="source"]');

    if (image) image.src = news.image;
    if (title) title.textContent = news.title;
    if (description) description.textContent = news.fullText;
    if (meta) {
        meta.innerHTML = `
            <span class="ui-news-chip">${news.category}</span>
            <span>${news.time}</span>
        `;
    }
    if (source) {
        source.textContent = `Source: ${news.source}`;
    }

    expandedNewsPanel.style.display = "flex";
}

function initialiseMessagesApp() {
    messagesState.root = document.getElementById("messages-app");
    if (!messagesState.root) return;

    messagesState.listView = document.getElementById("messages-list-view");
    messagesState.threadView = document.getElementById("messages-thread-view");
    messagesState.threadMessages = document.getElementById("thread-messages");
    messagesState.threadForm = document.getElementById("thread-form");
    messagesState.threadInput = document.getElementById("thread-input");
    messagesState.headerTitle = document.getElementById("messages-header-title");
    messagesState.backButton = document.getElementById("messages-back");
    messagesState.closeButton = document.getElementById("messages-close");
    messagesState.contactLabel = document.getElementById("thread-contact");

    if (messagesState.backButton) {
        messagesState.backButton.addEventListener("click", () => {
            if (messagesState.root.classList.contains("view-thread")) {
                showConversationList();
            } else {
                closeMessagesApp();
            }
        });
    }

    if (messagesState.closeButton) {
        messagesState.closeButton.addEventListener("click", closeMessagesApp);
    }

    if (messagesState.threadForm) {
        messagesState.threadForm.addEventListener("submit", handleThreadSubmit);
    }

    renderConversationList();
}

function openMessagesApp() {
    if (!messagesState.root) return;
    messagesState.root.classList.remove("hidden");
    showConversationList();
}

function closeMessagesApp() {
    if (!messagesState.root) return;
    messagesState.root.classList.add("hidden");
    messagesState.root.classList.remove("view-thread");
    messagesState.currentConversationId = null;
    if (messagesState.threadInput) {
        messagesState.threadInput.value = "";
    }
}

function showConversationList() {
    if (!messagesState.root) return;
    messagesState.root.classList.remove("view-thread");
    if (messagesState.headerTitle) {
        messagesState.headerTitle.textContent = "Messages";
    }
    if (messagesState.listView) {
        messagesState.listView.classList.remove("hidden");
    }
    if (messagesState.threadView) {
        messagesState.threadView.classList.add("hidden");
    }
}

function renderConversationList() {
    if (!messagesState.listView) return;

    messagesState.listView.innerHTML = "";

    conversations.forEach((conversation) => {
        const lastMessage = conversation.messages[conversation.messages.length - 1];
        const button = document.createElement("button");
        button.type = "button";
        button.className = "message-list-item";
        button.innerHTML = `
            <span class="message-avatar">${conversation.initials}</span>
            <span class="message-text">
                <span class="message-top">
                    <span class="message-contact">${conversation.contact}</span>
                    <span class="message-time">${lastMessage?.time ?? ""}</span>
                </span>
                <span class="message-preview">${lastMessage?.text ?? ""}</span>
            </span>
        `;
        button.addEventListener("click", () => openConversation(conversation.id));
        messagesState.listView.appendChild(button);
    });
}

function openConversation(conversationId) {
    const conversation = conversations.find((item) => item.id === conversationId);
    if (!conversation || !messagesState.root) return;

    messagesState.currentConversationId = conversationId;

    messagesState.root.classList.add("view-thread");
    if (messagesState.headerTitle) {
        messagesState.headerTitle.textContent = conversation.contact;
    }
    if (messagesState.contactLabel) {
        messagesState.contactLabel.textContent = conversation.contact;
    }
    if (messagesState.listView) {
        messagesState.listView.classList.add("hidden");
    }
    if (messagesState.threadView) {
        messagesState.threadView.classList.remove("hidden");
    }

    renderThread(conversation);
}

function renderThread(conversation) {
    if (!messagesState.threadMessages) return;

    messagesState.threadMessages.innerHTML = "";

    conversation.messages.forEach((message) => {
        const bubble = document.createElement("div");
        bubble.className = `message-bubble ${message.author === "me" ? "from-me" : "from-them"}`;
        bubble.innerHTML = `
            <span>${message.text}</span>
            <time>${message.time}</time>
        `;
        messagesState.threadMessages.appendChild(bubble);
    });

    messagesState.threadMessages.scrollTop = messagesState.threadMessages.scrollHeight;
}

function handleThreadSubmit(event) {
    event.preventDefault();
    if (!messagesState.threadInput) return;

    const text = messagesState.threadInput.value.trim();
    if (!text || !messagesState.currentConversationId) {
        return;
    }

    const conversation = conversations.find((item) => item.id === messagesState.currentConversationId);
    if (!conversation) return;

    const timestamp = formatTime(new Date());
    conversation.messages.push({
        author: "me",
        text,
        time: timestamp
    });

    messagesState.threadInput.value = "";
    renderThread(conversation);
    renderConversationList();
    scheduleMockReply(conversation);
}

function scheduleMockReply(conversation) {
    setTimeout(() => {
        const responses = [
            "Sounds good!",
            "👍 Perfect.",
            "Haha, absolutely!",
            "Let me check and get back to you.",
            "Great, see you soon!"
        ];
        const reply = responses[Math.floor(Math.random() * responses.length)];
        const timestamp = formatTime(new Date());
        conversation.messages.push({
            author: "them",
            text: reply,
            time: timestamp
        });

        if (messagesState.currentConversationId === conversation.id) {
            renderThread(conversation);
        }
        renderConversationList();
    }, 1800);
}

