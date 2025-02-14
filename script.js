document.addEventListener("DOMContentLoaded", function() {
    calculateDaysTogether();
    calculateYearsTogether();
    calculateMonthsTogether();
    calculateWeeksTogether();
    love();
    fetchRandomFact();
    updateClock();
    setInterval(updateClock, 1000);
});

// Menü umschalten
function toggleMenu() {
    let menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

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
function calculateYearsTogether() {
    let startDate = new Date("2024-02-16");
    let today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();

    if (today.getMonth() < startDate.getMonth() ||
       (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate())) {
        years--;
    }
    document.getElementById('yearsTogether').textContent = years;
}
function calculateMonthsTogether() {
    let startDate = new Date("2024-02-16");
    let today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();

    if (today.getMonth() < startDate.getMonth() ||
        (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate())) {
        years--;
        months += 11;
    }
    let totalMonths = years * 12 + months;

    document.getElementById('monthsTogether').textContent = totalMonths;
}

function calculateWeeksTogether(){
    let startDate = new Date("2024-02-16");
    let today = new Date();
    let totalDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    let weeks = Math.floor(totalDays/7);
    document.getElementById('weeksTogether').textContent = weeks;

}
function love() {
    // "Nein"-Button bewegt sich zufällig
    document.getElementById("noButton").addEventListener("mouseover", function() {
        let button = document.getElementById("noButton");
        let maxX = window.innerWidth - button.clientWidth - 20;
        let maxY = window.innerHeight - button.clientHeight - 20;

        let x = Math.random() * maxX;
        let y = Math.random() * maxY;

        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
        button.style.position = "absolute";
    });
    document.getElementById("yesButton").addEventListener("click", function() {
        document.getElementById("loveSurprise").classList.remove("hidden");
        document.getElementById("loveSurprise").classList.add("showLove");
        document.getElementById("loveSurprise").style.animation = "pop 0.5s ease-in-out";
    });
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


