
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




/* ############### Language options WEB ############# */
let languageOptions = document.getElementById("language-options");
let languageAll = document.querySelector("#language-options a");
let languageOne = document.querySelector("#language-options a:nth-child(1)");
let languageTwo = document.querySelector("#language-options a:nth-child(2)");
let languageSelected = document.querySelector("#language-options a:nth-child(3)");

function showLanguageOptions () {
    languageOptions.style.clipPath = "polygon(10% 0, 90% 0, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0 80%, 0 20%)";
    languageOptions.style.backgroundColor = "#001E6C";
    languageOne.style.display = "flex";
    languageTwo.style.display = "flex";
}
languageSelected.addEventListener("mouseover", showLanguageOptions);

function hideLanguageOptions () {
     languageOptions.style.clipPath = "none";
    languageOptions.style.backgroundColor = "transparent";
    languageOne.style.display = "none";
    languageTwo.style.display = "none";
}
languageOptions.addEventListener("mouseleave", hideLanguageOptions);
/* important to use mouseleave */


/* ############### Language options NAV ############# */


/* MY PROJECTS PREVIEWS */
/* first one */

const supalexDesign = document.querySelector("#supalex-design");
const projectPreviewImage = document.getElementById("project-preview-image");
function showProjectPreview () {
projectPreviewImage.style.backgroundColor = "red";
}
supalexDesign.addEventListener("mouseover", showProjectPreview);