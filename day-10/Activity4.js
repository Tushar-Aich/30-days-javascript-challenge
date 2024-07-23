//Task 7
const task7 = document.querySelector(".Task7");

task7.addEventListener("change", (e) => {
    e.preventDefault();
    console.log(e.target.value);
})

//Task 8
const select = document.querySelector("#vegies");
select.addEventListener("change", (e) => {
    e.preventDefault();
    console.log(select.value);
})