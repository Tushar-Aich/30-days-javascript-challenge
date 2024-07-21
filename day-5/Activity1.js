//Task 1
let num = 25;

function isEvenOdd(k){
    if(k === 0) console.log(" Number is zero ");
    else if(k % 2 === 0) console.log(" Number is even ");
    else console.log(" Number is odd ");
}

isEvenOdd(num);

//Task 2

function square(k) {
    console.log(" Square ::", Math.pow(k, 2));
}

square(num);