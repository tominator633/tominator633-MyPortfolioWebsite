
/* MY PROJECTS PREVIEWS */
/* first one */

let supalexDesign = document.getElementById("supalex-design");
let projectPreviewImage = document.getElementById("project-preview-image");
function showProjectPreview () {
projectPreviewImage.style.backgroundImage = "url(PROJECTS/Supalex-design/supalex-design-preview.png)";
}
supalexDesign.addEventListener("mouseover", showProjectPreview);
