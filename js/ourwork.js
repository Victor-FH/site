window.addEventListener("load", start);
function start() {
  hideAllScreens();
  console.log("hallog");
  document.querySelector("#modern_garden").classList.remove("hide");
  document.querySelector("#h2_modern").classList.remove("opacity");
  document.querySelector("#h2_saint").classList.add("opacity");
  document.querySelector("#h2_copenhagen").classList.add("opacity");
  document.querySelector("#h2_show").classList.add("opacity");
  document.querySelector("#h2_saint").addEventListener("click", saint);
  document
    .querySelector("#h2_copenhagen")
    .addEventListener("click", copenhagen);
  document.querySelector("#h2_show").addEventListener("click", show);
}
function hideAllScreens() {
  console.log("niuu");
  document.querySelector("#modern_garden").classList.add("hide");
  document.querySelector("#st_georges_hill").classList.add("hide");
  document.querySelector("#copenhagen_garden").classList.add("hide");
  document.querySelector("#show_garden").classList.add("hide");
}
function saint() {
  hideAllScreens();
  document.querySelector("#st_georges_hill").classList.remove("hide");
  document.querySelector("#h2_saint").classList.remove("opacity");
  document.querySelector("#h2_modern").classList.add("opacity");
  document.querySelector("#h2_copenhagen").classList.add("opacity");
  document.querySelector("#h2_show").classList.add("opacity");
  document.querySelector("#h2_modern").addEventListener("click", start);
  document
    .querySelector("#h2_copenhagen")
    .addEventListener("click", copenhagen);
  document.querySelector("#h2_show").addEventListener("click", show);
}
function copenhagen() {
  hideAllScreens();
  document.querySelector("#copenhagen_garden").classList.remove("hide");
  document.querySelector("#h2_copenhagen").classList.remove("opacity");
  document.querySelector("#h2_modern").classList.add("opacity");
  document.querySelector("#h2_saint").classList.add("opacity");
  document.querySelector("#h2_show").classList.add("opacity");
  document.querySelector("#h2_modern").addEventListener("click", start);
  document.querySelector("#h2_saint").addEventListener("click", saint);
  document.querySelector("#h2_show").addEventListener("click", show);
}
function show() {
  hideAllScreens();
  document.querySelector("#show_garden").classList.remove("hide");
  document.querySelector("#h2_show").classList.remove("opacity");
  document.querySelector("#h2_modern").classList.add("opacity");
  document.querySelector("#h2_copenhagen").classList.add("opacity");
  document.querySelector("#h2_saint").classList.add("opacity");
  document.querySelector("#h2_modern").addEventListener("click", start);
  document.querySelector("#h2_saint").addEventListener("click", saint);
  document
    .querySelector("#h2_copenhagen")
    .addEventListener("click", copenhagen);
}
