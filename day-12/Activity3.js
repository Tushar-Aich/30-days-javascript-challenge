//Task 4
class newError extends Error{
    constructor(
        statusCode,
        message,
    ){
        super(statusCode, message)
        this.statusCode = statusCode,
        this.message = message
    }
}

let num1 = 10;
let num2 = 0;
let ans;

function divide(num1, num2){
    if(num2 === 0) throw new newError(400, "Dividing by 0 not possible")
    ans = num1/num2;
    console.log("Answer :: ", ans);
}

try {
    divide(num1, num2)
} catch (error) {
    console.log(error);
}

//Task 5
const str = "";
function user(){
    const Name = str;
    if(Name === "") throw new newError(400, "User not found");
    console.log(Name);
}

try {
    user();
} catch (error) {
    console.log(error);
}