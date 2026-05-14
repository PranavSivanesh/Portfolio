function toggleMenu(){
    document.getElementById("sidebar").classList.toggle("open");
    document.getElementById("overlay").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {

    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }

        });

    }, {
        threshold: 0.15,
    });

    fadeElements.forEach(el => {
        observer.observe(el);
    });

});