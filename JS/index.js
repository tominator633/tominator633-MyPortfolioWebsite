/* ############### Language options WEB ############# */
let languageOptions = document.getElementById("language-options");
let languageAll = document.querySelector("#language-options a");
let languageOne = document.querySelector("#language-options a:nth-child(1)");
let languageTwo = document.querySelector("#language-options a:nth-child(2)");
let languageSelected = document.querySelector("#language-options a:nth-child(3)");

function showLanguageOptions () {
    languageOptions.style.clipPath = "polygon(10% 0, 90% 0, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0 80%, 0 20%)";
    languageOptions.style.backgroundColor = "#333";
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