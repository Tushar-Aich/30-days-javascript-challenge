//Task 11 - 13
const num1 = 10;
const num2 = 5;

if(num1 > num2 && num2 <= 0){ // output --> false
    console.log(true);
}else{
    console.log(false);
}

if(num1 < num2 || num2 >= 0){ // output --> true
    console.log(true);
}else{
    console.log(false);
}

console.log(!(num1 > num2)); // output --> false
console.log(!(num1 < num2)); // output --> true