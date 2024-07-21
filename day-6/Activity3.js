//Task 7
const arr = [1,2,3,4,5];
console.log("Old array :: ", arr);

const newArr = arr.map((value) => {
    value = value * 2;
    return value;
});

console.log("New Array :: ", newArr);

//Task 8
const evenArr = arr.filter((value) => {
    if(value % 2 === 0) return value;
})

console.log("Even Array :: ", evenArr);

//Task 9
const addArr = arr.reduce((prev, curr) => {
    let ans = 0;
    ans = prev + curr;
    return ans;
})

console.log("Add Array :: ", addArr);