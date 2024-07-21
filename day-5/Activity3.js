//Task 5
let num1 = 5;
let num2 = 10;

const add = (k, l) => {
    console.log(k + l);
}

add(num1, num2)

//Task 6
let string = "TusharAich";

const find = (str) => {
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) === "T") return true;
        else return false;
    }
}

console.log(find(string));