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

async function loadRBA() {

    const container = document.getElementById("rbaData");

    try {

        container.innerHTML = "Loading...";

        // Replace this URL later with your own API or Cloudflare Worker
        const response = await fetch("YOUR_API_URL");

        const data = await response.json();

        container.innerHTML = `
            <p><strong>Cash Rate:</strong> ${data.cashRate}%</p>
            <p><strong>Next Meeting:</strong> ${data.nextMeeting}</p>
            <p><strong>Decision:</strong> ${data.decision}</p>
        `;

    } catch (error) {

        console.error(error);

        container.innerHTML =
            "Unable to load RBA data.";

    }

}

loadRBA();