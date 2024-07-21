const book = {
    title: "Last Dance",
    author: "Cristiano dos santos aviero Ronaldo",
    year: 2024,
    
    //Task 3
    titleAndAuthor(){
        title = this.title;
        author = this.author;
        return{title, author};
    },

    //Task 4
    updateYear(year){
        this.year = year;
        return year;
    }
}

console.log(book.titleAndAuthor());
console.log(book.updateYear(2016));
console.log("Book :: ", book);