

/* ###############  Nav buttons ############# */
let navButton = document.getElementById("navigation-button");
let navCloseButton = document.getElementById("navigation-close-button");
let mobileNav = document.getElementById("mobileNav");
/* Přidej ty vars do funkce (kvuli polution) */
function openHeader () {
    navButton.style.display = "none";
    mobileNav.style.display = "flex";
}
navButton.addEventListener("click",openHeader);

function closeHeader () {
    mobileNav.style.display = "none";
    navButton.style.display = "block"
}
navCloseButton.addEventListener("click",closeHeader);
/* ###############  Nav buttons ############# */





/* ############### Language options NAV ############# */


