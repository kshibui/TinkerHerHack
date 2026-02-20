let scores = [];
let chartInstance = null;

function calculateStress() {

    let mood = parseInt(document.getElementById("mood").value);
    let sleep = parseFloat(document.getElementById("sleep").value);
    let screen = parseFloat(document.getElementById("screen").value);
    let study = parseFloat(document.getElementById("study").value);
    let social = document.getElementById("social").value;
    let cycle = document.getElementById("cycle").value;

    if (isNaN(mood) || isNaN(sleep) || isNaN(screen) || isNaN(study)) {
        alert("Please fill all fields correctly.");
        return;
    }

    let score = 0;

    if (mood == 1) score += 4;
    else if (mood == 2) score += 3;
    else if (mood == 3) score += 2;
    else if (mood == 4) score += 1;

    if (sleep < 5) score += 3;
    else if (sleep < 6) score += 2;
    else if (sleep < 7) score += 1;

    if (screen > 8) score += 3;
    else if (screen > 6) score += 2;
    else if (screen > 4) score += 1;

    if (study > 10) score += 3;
    else if (study > 8) score += 2;
    else if (study > 6) score += 1;

    if (social === "no") score += 2;
    if (cycle === "yes") score += 2;

    scores.push(score);

    let risk = score <= 5 ? "Low" :
               score <= 10 ? "Moderate" : "High";

    document.getElementById("result").innerHTML =
        "Score: " + score + "<br>Risk Level: " + risk;

    drawChart();
}

function drawChart() {

    let ctx = document.getElementById("chart").getContext("2d");

    if (chartInstance !== null) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: scores.map((_, i) => "Day " + (i + 1)),
            datasets: [{
                label: "Stress Score Trend",
                data: scores,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true
        }
    });
}

function newQuote() {
    let quotes = [
        "You are stronger than you think.",
        "Your hormones do not define your worth.",
        "Rest is productive.",
        "You deserve peace.",
        "Growth takes time."
    ];

    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[random];
}

function saveWin() {
    let win = document.getElementById("winInput").value;
    if (win.trim() === "") {
        alert("Write something small. It still counts.");
        return;
    }
    document.getElementById("savedWin").innerText = "You did this today: " + win;
}

function startBreathing() {
    let text = document.getElementById("breathingText");
    text.innerText = "Inhale...";
    
    setTimeout(() => text.innerText = "Hold...", 4000);
    setTimeout(() => text.innerText = "Exhale...", 8000);
    setTimeout(() => text.innerText = "Repeat 3 times 🌿", 12000);
}

function newQuote() {
    let quotes = [
        "You are stronger than your toughest days.",
        "Your hormones do not define your worth.",
        "Rest is productive.",
        "Growth takes time.",
        "You deserve peace and success.",
        "Even on low-energy days, you are enough.",
        "Your body is not your enemy.",
        "Progress is not linear, and that is okay."
    ];

    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[random];
}