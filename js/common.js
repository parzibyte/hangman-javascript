/*

  ____          _____               _ _           _       
 |  _ \        |  __ \             (_) |         | |      
 | |_) |_   _  | |__) |_ _ _ __ _____| |__  _   _| |_ ___ 
 |  _ <| | | | |  ___/ _` | '__|_  / | '_ \| | | | __/ _ \
 | |_) | |_| | | |  | (_| | |   / /| | |_) | |_| | ||  __/
 |____/ \__, | |_|   \__,_|_|  /___|_|_.__/ \__, |\__\___|
         __/ |                               __/ |        
        |___/                               |___/         
    
____________________________________
/ Si necesitas ayuda, contáctame en \
\ https://parzibyte.me               /
 ------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
Creado por Parzibyte (https://parzibyte.me). Este encabezado debe mantenerse intacto,
excepto si este es un proyecto de un estudiante.
*/
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