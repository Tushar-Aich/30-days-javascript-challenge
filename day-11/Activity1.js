//Task 1
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello");
    }, 2000);
});

promise.then((val) => {
    console.log(`${val} world!`);
}).catch(() => {
    console.log(`Error while fetching`);
})

//Task 2
const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error");
    }, 2000);
})

secondPromise.then((val) => {
    console.log(`${val} Tushar`);
}).catch((val) => {
    console.log(`${val} while fetching promise`);
})