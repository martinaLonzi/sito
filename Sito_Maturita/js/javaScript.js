// per creare l'animazione
document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");

    function checkScroll() {
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < window.innerHeight - 100) {
                box.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Per attivarlo anche su box già visibili all'inizio
});
