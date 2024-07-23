//Task 3
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1st message");
    }, 100);
})
const thirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("4th message");
    }, 1000);
})
const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("3rd message");
    }, 600);
})
const fourthPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("2nd message");
    }, 400);
})

firstPromise.then((val) => {
    console.log(val);
})
secondPromise.then((val) => {
    console.log(val);
})
thirdPromise.then((val) => {
    console.log(val);
})
fourthPromise.then((val) => {
    console.log(val);
})