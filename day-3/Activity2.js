//Task 3
const num1 = 15;
const num2 = 10;
const num3 = 25;

if(num2 > num1){
    if(num3 > num2){
        console.log(`num3 is largest`);
    }else{
        console.log(`num2 is largest`);
    }
}else{
   if(num3 > num1){
        console.log(`num3 is largest`);
   }else{
        console.log("Num1 is largest");
   }
}