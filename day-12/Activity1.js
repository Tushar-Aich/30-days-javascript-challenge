//Task 1
const str = "Tushar";
try {
    str = "Aich"
} catch (error) {
    console.log("Error :: ", error);
}

//Task 2
let num1 = 10;
let num2 = 0;
let ans;

function divide(num1, num2){
    if(num2 === 0) throw new Error("Dividing by 0 is not possible");
    ans = num1/num2;
    console.log("Answer :: ", ans);
}

try {
    divide(num1, num2)
} catch (error) {
    console.log("Error :: ", error);
}