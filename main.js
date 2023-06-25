const app = document.querySelector("#apps");

app.addEventListener("click", function () {
  const appData = document.querySelector(".app__data");
  appData.classList.toggle("app__data__active");
});
