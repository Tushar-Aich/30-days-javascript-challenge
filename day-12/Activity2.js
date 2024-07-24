//Task 3
const str = "Tushar";
try {
    str = "Aich";
} catch (error) {
    console.log("Error :: ", error);
}finally{
    console.log(str);
}