document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".dots").forEach(dotsContainer => {
        const level = parseInt(dotsContainer.getAttribute("data-level")) || 0;
        const totalDots = 10; // số chấm tối đa

        dotsContainer.innerHTML = ""; // xóa nội dung cũ

        for (let i = 1; i <= totalDots; i++) {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            if (i <= level) dot.classList.add("filled");
            dotsContainer.appendChild(dot);
        }
    });
});
