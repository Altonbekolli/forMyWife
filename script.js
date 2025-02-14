document.addEventListener("DOMContentLoaded", function() {
    calculateDaysTogether();
    fetchRandomFact();
    updateClock();
    setInterval(updateClock, 1000);
});

// Menü umschalten
function toggleMenu() {
    let menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Tage zusammen berechnen
function calculateDaysTogether() {
    let startDate = new Date("2024-02-16");
    let today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
    let days = today.getDate() - startDate.getDate();

    // Falls der Monat oder der Tag negativ ist, muss ein Jahr/Monat abgezogen werden
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    if (days < 0) {
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
    }

    let totalDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    document.getElementById('daysTogether').textContent = totalDays;
}


// Uhrzeit aktualisieren
function updateClock() {
    let now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString();
}

// Zufälligen Fakt abrufen
async function fetchRandomFact() {
    try {
        let response = await fetch("https://uselessfacts.jsph.pl/random.json?language=de");
        let data = await response.json();
        document.getElementById('randomFact').textContent = data.text;
    } catch (error) {
        document.getElementById('randomFact').textContent = "Fehler beim Laden der Fakten!";
    }
}

// IP-basierten Standort abrufen
async function fetchIPLocation() {
    try {
        let response = await fetch("https://ipapi.co/json/");
        let data = await response.json();
        document.getElementById('location').textContent = `${data.city}, ${data.country_name}`;
    } catch (error) {
        document.getElementById('location').textContent = "Fehler beim Laden des Standorts";
    }
}
