//Task 7
const book = {
    title: "Last Dance",
    author: "Cristiano dos santos aviero Ronaldo",
    year: 2016,

    titleAndYear(){
        title = this.title;
        year = this.year;

        return {title, year};
    }
}

console.log(book.titleAndYear());


