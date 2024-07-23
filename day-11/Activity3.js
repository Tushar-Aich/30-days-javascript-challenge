//Task 4
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello");
    }, 2000);
})

const task4 = async function(){
    const answer = await promise;
    console.log(answer);
    console.log("World");
}

task4();

//Task 5
const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error Message");
    }, 1000);
});

const task5 = async function(){
    try {
        const answer = await newPromise;
        console.log(answer);
    } catch (error) {
        console.log(error);
    }
}

task5();