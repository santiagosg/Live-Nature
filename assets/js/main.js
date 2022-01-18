

let cerrar = document.querySelectorAll(".modal__btn-close")[0];
let abrir = document.querySelectorAll(".abrir-modal")[0];
let modal = document.querySelectorAll(".modal")[0];
var myvideo = document.getElementById("myVideo");


abrir.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.opacity = "1";
  modal.style.visibility = "visible";
  modal.classList.toggle("modal-close");

  if(!myvideo.paused && !myvideo.ended)   { 
    myvideo.pause(); 
    reproducir.value='Reproducir';   
 } 
 else 
 { 
    myvideo.play(); 
    reproducir.value='Pausa';   
 } 

});

cerrar.addEventListener("click", function () {
  modal.classList.toggle("modal-close");
  modal.style.opacity = "0";
  modal.style.visibility = "hidden";

  /* Tiempo de espera para redireccionar */
  setTimeout(function () {
    window.location.href = "rec-virtual.html";
  }, 500);
});

myvideo.onended = function () {
  window.location.href = "rec-virtual.html";
};










