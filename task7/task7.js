const en = document.querySelector("#en");
const ka = document.querySelector("#ka");
const text = document.querySelector("#text");

const init = () => {
  if (localStorage.getItem("language") === "en") enClicked();
  else if (localStorage.getItem("language") === "ka") kaClicked();
  else enClicked();
};
en.addEventListener("click", () => {
  localStorage.setItem("language", "en");
  text.innerHTML = "Hello";
});
ka.addEventListener("click", () => {
  localStorage.setItem("language", "ka");
  text.innerHTML = "გამარჯობა";
});

init();
