const letter = document.querySelector(".bottom");
const container = document.querySelector(".container");

letter.addEventListener("click", () => {
    container.classList.toggle("active"); 
});
