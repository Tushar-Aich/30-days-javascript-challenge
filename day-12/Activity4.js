//Taks 6
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error")
    }, 1000)
})

promise.then((val) => {
    console.log("VALUE :: ", val);
}).catch((error) => {
    console.log("Error :: ", error);
})

//Task 7
const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error")
    }, 2000)
})

const func = async () => {
    try {
        const res = await newPromise.then((val) => {
            console.log(val);
        })
    } catch (error) {
        console.log("Error :: ", error);
    }
}

func();