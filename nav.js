

/* ###############  Nav buttons ############# */
let navButton = document.getElementById("navigation-button");
let navCloseButton = document.getElementById("navigation-close-button");
let header = document.getElementsByTagName("header")[0];
/* Přidej ty vars do funkce (kvuli polution) */
function openHeader () {
    navButton.style.display = "none";
    header.style.display = "flex";
}
navButton.addEventListener("click",openHeader);

function closeHeader () {
    header.style.display = "none";
    navButton.style.display = "block"
}
navCloseButton.addEventListener("click",closeHeader);
/* ###############  Nav buttons ############# */





/* ############### Language options NAV ############# */


