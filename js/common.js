// Tomado de https://parzibyte.me/blog/2019/06/26/menu-responsivo-bootstrap-4-sin-dependencias/
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector("#menu"),
        botonMenu = document.querySelector("#botonMenu");
    if (menu) {
        botonMenu.addEventListener("click", () => menu.classList.toggle("show"));
    }
});
const LOCAL_STORAGE_WORDS_KEY = "words";
const getWords = () => (JSON.parse(localStorage.getItem(LOCAL_STORAGE_WORDS_KEY)) || []);
const saveWords = (words) => (localStorage.setItem(LOCAL_STORAGE_WORDS_KEY, JSON.stringify(words)));