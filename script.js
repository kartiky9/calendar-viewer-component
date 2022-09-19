// write your JavaScript here

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let daysElement = document.querySelector(".days");

for (let i = 1; i <= 31; i++) {
  let divElement = document.createElement("div");
  let numberDayElement = divElement.appendChild("span");
  numberDayElement.innerText = i;
  numberDayElement.className = "day-span";
  if (i === today.getDay()) {
    numberDayElement.classList.add("selected-day");
  }
  daysElement.appendChild(divElement);
}
