const en = document.querySelector("#en");
const ka = document.querySelector("#ka");
const text = document.querySelector("#text");

const enClicked = () => {
    localStorage.setItem("language", "en");
    text.innerHTML = "Hello";
};

const kaClicked = () => {
    localStorage.setItem("language", "ka");
    text.innerHTML = "გამარჯობა";
};

const init = () => {
    localStorage.getItem('language') === 'ka' ? kaClicked() : enClicked();
};

en.addEventListener("click", enClicked);
ka.addEventListener("click", kaClicked);
document.addEventListener("DOMContentLoaded", init)