//Task 5
const input = document.querySelector(".input");
input.addEventListener("keydown", (e) => {
    console.log(`${e.code} was pressed`);
})

//Task 6
const task6 = document.querySelector(".Task6");
const paraForTask6 = document.querySelector(".paraForTask6")
task6.addEventListener("keyup", (e) => {
    paraForTask6.innerHTML += e.key;
})