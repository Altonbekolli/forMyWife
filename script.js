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
    let diffTime = Math.abs(today - startDate);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('daysTogether').textContent = diffDays;
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
