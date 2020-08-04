// const s ="hello";
// console.log(typeof s)
// console.log(s.toLocaleUpperCase())
//  const s1 =new String("hello")
//  console.log(typeof s1)

// console.log(navigator.appVersion)

// const book ={
//     title :"book 1",
//     auther :"jhon doe",
//     year :2020,
//     getSummary :function(){
//     return`${this.title} is written by ${this.auther} in ${this.year}`

//     }
// }
// console.log(book)
// console.log(book.getSummary())

//***********constructor************** */
// function book (title,auther,year){
//     // console.log("book id initialized");
//     this.title =title;
//     this.auther= auther;
//     this.year =year
    // this.getSummary =function(){
    //     return`${this.title} is written by ${this.auther} in ${this.year}`}
// }

// book.prototype.getSummary =function(){
//             return`${this.title} is written by ${this.auther} in ${this.year}`
// }
// book.prototype.getAge=function(){
//     return `the time of the book released is ben (2020-${this.year})`
// }
// ;
// const book1 =new book("book1","sujan",2003)
// const book2 =new book("book2","sudip",2013)
// console.log(book1.getSummary());
// console.log(book1.getAge());
// console.log(book2.getSummary());
// console.log(book2.getAge());
// console.log()
/*
class*********************************
*/

class Book {
    constructor(title,auther,year){
        this.title=title;
        this.auther =auther;
        this.year=year;
    }

getSummary(){
     return`${this.title} is written by ${this.auther} in ${this.year}`
}
}
const book =new Book("CWH","sujan",2001)
console.log(book);
class Magazine extends Book{
    constructor(title,auther,year,month){
        super(title,auther,year);
        this.month =month;
    }
    getSummary2(){
        return`${this.title} is written by ${this.auther} in ${this.year} in ${this.month}`
    }
}

const book1 =new Magazine("XYZ","sujan",2001,"january")
console.log(book1.getSummary2());