//Task 8
const book = {
    title: "Last Dance",
    author: "Cristiano dos santos aviero Ronaldo",
    year: 2016,
}

for (const key in book) {
    console.log(`${key} : ${book[key]}`);
}

//Task 9
console.log(Object.keys(book), Object.values(book));