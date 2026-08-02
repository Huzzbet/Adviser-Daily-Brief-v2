// Adviser Daily Brief Application

console.log("Adviser Daily Brief Loaded");

function updateClock() {

    const now = new Date();

    const dateOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    document.getElementById("currentDate").textContent =
        now.toLocaleDateString("en-AU", dateOptions);

    document.getElementById("currentTime").textContent =
        now.toLocaleTimeString("en-AU");

}

function updateMarketStatus(){

    const now = new Date();

    const day = now.getDay();

    const hour = now.getHours();

    const minute = now.getMinutes();

    const currentTime = hour + minute/60;

    const market =
        (day >= 1 && day <= 5 && currentTime >= 10 && currentTime < 16)
            ? "🟢 ASX Open"
            : "🔴 ASX Closed";

    document.getElementById("marketStatus").textContent = market;

}

// Run immediately
updateClock();
updateMarketStatus();

// Update every second
setInterval(() => {

    updateClock();
    updateMarketStatus();

}, 1000);