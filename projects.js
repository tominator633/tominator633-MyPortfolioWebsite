
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
