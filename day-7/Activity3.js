//Task 5
const library = {
    name: "District Library",
    books: [
        {
            title: "Last Dance",
            author: "Cristiano dos santos aviero Ronaldo",
            year: 2016,
        },
        {
            title: "Brazilian Dance",
            author: "Neymar Jr.",
            year: 2024,
        },
        {
            title: "Angel",
            author: "Lionel Messi",
            year: 2024,
        }
    ]
}

console.log("Library :: ", library);

//Task 6
for(let i = 0; i < library.books.length; i++){
    console.log("Title :: ", library.books[i].title);
}