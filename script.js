// ===== загрузка сохранённых данных =====
let dayTotal = Number(localStorage.getItem("dayTotal")) || 0;
let weekTotal = Number(localStorage.getItem("weekTotal")) || 0;
let monthTotal = Number(localStorage.getItem("monthTotal")) || 0;
let savedDate = localStorage.getItem("savedDate");

let today = new Date().toDateString();

// авто-новый день
if (savedDate !== today) {
    dayTotal = 0;
    localStorage.setItem("savedDate", today);
}

updateStats();

// ===== кнопка по умолчанию =====
function setDefault() {
    document.getElementById("priceHour").value = 5500;
    document.getElementById("hours").value = 2
