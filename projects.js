
/* MY PROJECTS PREVIEWS */
/* first one */
let projectPreviewImage = document.getElementById("project-preview-image");
/* ------------------------------------------------------------------------- */
let supalexDesign = document.getElementById("supalex-design");
function showSupalexDesign () {
projectPreviewImage.style.backgroundImage = "url(PROJECTS/Supalex-design/supalex-design-ICON.png)";
projectPreviewImage.style.backgroundColor = "#c5d0cfff";
}
supalexDesign.addEventListener("click", showSupalexDesign);
/* ------------------------------------------------------------------------- */
let kurisPalace = document.getElementById("kuris-palace");
function showKurisPalace () {
projectPreviewImage.style.backgroundImage = "url(PROJECTS/Kuris-palace/kuris-palace-ICON.png)";
projectPreviewImage.style.backgroundColor = "white";
}
kurisPalace.addEventListener("click", showKurisPalace);
/* ------------------------------------------------------------------------- */
let addix = document.getElementById("addix");
function showAddix () {
projectPreviewImage.style.backgroundImage = "url(PROJECTS/Addix/addix-ICON.png)";
projectPreviewImage.style.backgroundColor = "#ffcc1dff";
}
addix.addEventListener("click", showAddix);
/* ------------------------------------------------------------------------- */
let tomasRuzickaPortfolio = document.getElementById("tomas-ruzicka-portfolio");
function showtomasRuzickaPortfolio () {
projectPreviewImage.style.backgroundImage = "url(PROJECTS/Tomas-Ruzicka-portfolio/Tomas-Ruzicka-portfolio-ICON.png)";
projectPreviewImage.style.backgroundColor = "#E8630A";
}
tomasRuzickaPortfolio.addEventListener("click", showtomasRuzickaPortfolio);





/* ################# PRACTISE PRACTISE ################# */
let mum = "Milena";
let dad = "Jakub";
let yearsTog = 34;

console.log(mum + " and " + dad + " have been together for " + yearsTog + " years.");
console.log(`${mum} and ${dad} have been together for ${yearsTog} years.`);

console.log(typeof mum);
console.log(typeof yearsTog);


let kelvin = 505;
let celsius = kelvin - 273;
let fahrenheit = celsius*(9/5)+32;
fahrenheit = Math.floor(fahrenheit);

console.log(`${kelvin} kelvin is equal to ${celsius}*C and ${fahrenheit}*F.`)


function performDivision (a,b) {
    return b !== 0 && a/b
}

console.log(performDivision(6,3));
console.log(performDivision(6,0));

let personAge = 34;
console.log(personAge >= 18 && "You can enter");
personAge === 34?console.log("You won a dinosaur"):console.log("You are trash");


function isMonday (day) {
    return day === "Monday" ? "Go to the cinema" : "Stay at home"
}
console.log(isMonday("Monday"));