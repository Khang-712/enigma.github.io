document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".dots").forEach(dotsContainer => {
        let level = parseInt(dotsContainer.getAttribute("data-level"));
        let totalDots = 10; // số chấm tối đa

        for (let i = 1; i <= totalDots; i++) {
            let dot = document.createElement("span");
            dot.classList.add("dot");
            if (i <= level) dot.classList.add("filled");
            dotsContainer.appendChild(dot);
        }
    });
});
