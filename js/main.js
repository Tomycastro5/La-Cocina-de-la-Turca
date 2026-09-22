// La Cocina De La Turca — menú mobile + animaciones al hacer scroll
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Cierra el menú al tocar un link (mobile)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (window.AOS) {
    AOS.init({
      duration: 700,
      once: true,
      offset: 60,
    });
  }

  // Evita que el formulario de contacto (decorativo, sin backend) recargue la página
  document.querySelectorAll(".pregunta").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var textarea = form.querySelector("textarea");
      if (textarea && textarea.value.trim() !== "") {
        var boton = form.querySelector(".boton");
        var original = boton.value;
        boton.value = "¡Gracias!";
        textarea.value = "";
        setTimeout(function () {
          boton.value = original;
        }, 2500);
      }
    });
  });
});
