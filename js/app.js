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

updateClock();

setInterval(updateClock,1000);