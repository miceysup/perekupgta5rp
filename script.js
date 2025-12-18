console.log("GTA RP калькулятор загружен");

let dayTotal = Number(localStorage.getItem("dayTotal")) || 0;
let weekTotal = Number(localStorage.getItem("weekTotal")) || 0;
let monthTotal = Number(localStorage.getItem("monthTotal")) || 0;

updateStats();

function setDefault() {
    document.getElementById("priceHour").value = 5500;
    document.getElementById("hours").value = 2;
}

function addRent() {
    let price = Number(document.getElementById("priceHour").value);
    let hours = Number(document.getElementById("hours").value);
    let expenses = Number(document.getElementById("expenses").value);

    let profit = (price * hours) - expenses;
    if (isNaN(profit)) return;

    addProfit(profit);
}

function addExtra() {
    let extra = Number(document.getElementById("extraMoney").value);
    if (extra <= 0) return;

    addProfit(extra);
    document.getElementById("extraMoney").value = "";
}

function addProfit(amount) {
    dayTotal += amount;
    weekTotal += amount;
    monthTotal += amount;

    save();
    updateStats();
}

function save() {
    localStorage.setItem("dayTotal", dayTotal);
    localStorage.setItem("weekTotal", weekTotal);
    localStorage.setItem("monthTotal", monthTotal);
}

function updateStats() {
    document.getElementById("day").innerText = "За день: " + dayTotal + "$";
    document.getElementById("week").innerText = "За неделю: " + weekTotal + "$";
    document.getElementById("month").innerText = "За месяц: " + monthTotal + "$";
}

function newDay() {
    dayTotal = 0;
    save();
    updateStats();
}

function resetAll() {
    localStorage.clear();
    location.reload();
}
