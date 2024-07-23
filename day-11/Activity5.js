//Task 8
const promise1 = new Promise((resolve) => {
    resolve("Hi")
})
const promise2 = new Promise((resolve) => {
    resolve("Hello")
})
const promise3 = new Promise((resolve) => {
    resolve("Bye")
})

Promise.all([promise1, promise2, promise3]).then((val) => {
    console.log(val);
})

//Task 9
Promise.race([promise1, promise2, promise3]).then((val) => {
    console.log(val);
})