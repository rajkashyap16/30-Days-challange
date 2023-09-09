const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const para = document.querySelector(".para");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let lb = 2.2;
  let lbs = input.value * lb;
  let result = lbs.toFixed(2);

  if (input.value == "" || input.value <= 0) {
    para.innerHTML = "Please enter the correct value";
  } else {
    para.innerHTML = `
    Your Weight in Pounds : <span class = "green">${result}</span>`;
  }
});
