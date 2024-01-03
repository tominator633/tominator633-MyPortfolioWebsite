
/* MY PROJECTS PREVIEWS */
/* first one */
let projectPreviewImage = document.getElementById("project-preview-image");

let supalexDesign = document.getElementById("supalex-design");
function showSupalexDesign () {
projectPreviewImage.style.backgroundImage = "url(PROJECTS/Supalex-design/supalex-design-preview.png)";
}
supalexDesign.addEventListener("click", showSupalexDesign);

let kurisPalace = document.getElementById("kuris-palace");
function showKurisPalace () {
projectPreviewImage.style.backgroundImage = "url(PROJECTS/Kuris-palace/kuris-palace-ICON.png)";
}
kurisPalace.addEventListener("click", showKurisPalace);