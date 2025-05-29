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

// Funzione per attivare l'effetto quando i box entrano in vista
function revealOnScroll() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 100;
  
      if (boxTop < triggerPoint) {
        box.classList.add("show");
      }
    });
  }
  
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);