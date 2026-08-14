const toggle = document.querySelector("#billing-toggle");
const pricesMensual = document.getElementsByClassName("only-mensual");
const pricesAnnual = document.getElementsByClassName("only-annual");

toggle.addEventListener("change", (e) => {

[...pricesMensual].forEach(element => {
    element.classList.toggle("hidden");
  });
[...pricesAnnual].forEach(element => {
    element.classList.toggle("hidden");
  });
});
