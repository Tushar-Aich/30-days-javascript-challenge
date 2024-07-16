//Task 4
const day = 7;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;

    default:
        console.log("Please enter a number between 1 to 7");
        break;
}

//Task 5
let marks = 65;
marks = Math.floor(marks/10);
switch (marks) {
    case 9 :
        console.log("Grade :: A+");
        break;
    case 8 :
        console.log("Grade :: A");
        break;
    case 7 :
        console.log("Grade :: B");
        break;
    case 6 :
    case 5 :
        console.log("Grade :: C");
        break;
    case 3 :
    case 4 :
        console.log("Grade :: D");
        break;
    case 0 :
    case 1 :
    case 2 :
        console.log("Grade :: F");
        break;

    default:
        console.log("Bhai 100 se upar laane ki aukat na hai teri 0 se 100 ke bich mai daal le :-) ");
        break;
}