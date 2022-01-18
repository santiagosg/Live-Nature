/* RECORRIDO VIRTUAL INDIVIDUAL */
/* PANEL INFORMATIVO / TOOLTIP */
var opentooltip = document.getElementById("ttip-open-02");
var closetooltip = document.getElementById("ttip-close-02");
var contenttooltip = document.getElementById("ttip-content-02");

opentooltip.addEventListener("click", function (e) {
  e.preventDefault();
  contenttooltip.style.opacity = "1";
  contenttooltip.style.visibility = "visible";
  contenttooltip.classList.toggle("modal-close");
});

closetooltip.addEventListener("click", function () {
  contenttooltip.classList.toggle("modal-open");

  contenttooltip.setAttribute("style", "opacity:0 !important");
  contenttooltip.setAttribute("style", "visivility:hidden !important");

  opentooltip.setAttribute("style", "opacity:0 !important");
  opentooltip.setAttribute("style", "visivility:hidden !important");
});
