//Task 1
const para = document.querySelector(".Task1");
const button = document.querySelector(".click");

button.addEventListener("click", () => {
    para.innerHTML = "Hello Tushar!";
});

//Task 2
const image = document.querySelector(".Task2");

function hide(){
    image.style.visibility = "hidden";
}

image.addEventListener("dblclick", () => {
    hide();
})