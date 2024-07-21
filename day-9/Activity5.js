//Task 9
const button = document.querySelector("button");
button.addEventListener("click", () => {
    const para = document.querySelector(".Task2");
    para.innerHTML = "Yo! I am Tushar";
})

//Task 10
button.addEventListener("mouseover", (event => {
    event.target.style.borderColor = "orange";
    setTimeout(() => {
        event.target.style.borderColor = "";
    }, 700)
}))