//Task 7
const year = 2008;

if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log("Year is a leap year");
        }else{
            console.log("Year is not a leap year");
        }
    }else{
        console.log("Year is a leap year");
    }
}