document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slider img");
    let index = 0;

    function showNextImage() {
        slides[index].classList.remove("active");   // ocultar actual
        index = (index + 1) % slides.length;        // siguiente
        slides[index].classList.add("active");      // mostrar siguiente
    }

    setInterval(showNextImage, 1500); //
});

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slider2 img");
    let index = 0;

    function showNextImage() {
        slides[index].classList.remove("active");   // ocultar actual
        index = (index + 1) % slides.length;        // siguiente
        slides[index].classList.add("active");      // mostrar siguiente
    }

    setInterval(showNextImage, 3000); // cambiar cada 5s
});
