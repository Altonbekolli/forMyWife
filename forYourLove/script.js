document.addEventListener("DOMContentLoaded", function() {
    updateClock();
    setInterval(updateClock, 1000);
});

// Menü umschalten
function toggleMenu() {
    let menu = document.getElementById('menu');
    let firstBlock=document.getElementById('container')
     if (menu.style.display === 'block') {
            menu.style.display = 'none';
            container.style.display = 'flex';
     }else {
            menu.style.display = 'block';
            container.style.display = 'none';
     }
}

function calculateRelationship() {
    let inputDate = document.getElementById('startDate').value;
    let errorMessage = document.getElementById('error-message');

    if (!inputDate) {
       errorMessage.textContent = "Bitte gib ein Datum ein!";
       errorMessage.style.display = "block";
       return;
    }

    let startDate = new Date(inputDate);
    let today = new Date();

    if(startDate > today){
        errorMessage.textContent = "Das Datum kann nicht in der Zukunft liegen!";
        errorMessage.style.display = "block";
        return;
    }
    errorMessage.style.display="none";

    let totalDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    let totalWeeks = Math.floor(totalDays / 7);

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();

    if (today.getMonth() < startDate.getMonth() ||
       (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate())) {
        years--;
        months += 12;
    }

    let totalMonths = years * 12 + months;

    document.getElementById('daysTogether').textContent = totalDays;
    document.getElementById('yearsTogether').textContent = years;
    document.getElementById('monthsTogether').textContent = totalMonths;
    document.getElementById('weeksTogether').textContent = totalWeeks;
}

function updateClock() {
    let now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString();
}




