//Book class banaune jasle each  book laai represent gareko hunxa
class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author =author;
        this.isbn =isbn
    }
}


// UI class ,,jasle ui task handle garxa
class UI{
    static displayBooks()
    {
        const books =Store.getBooks();
        books.forEach((book)=> UI.addBookList(book))  
    }
    static addBookList(book)
    {
        const list =document.getElementById('book-list');

        const row =document.createElement('tr');
        row.setAttribute('class','bd')
        row.innerHTML=`
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class ="btn btn-danger btn-sm delete">X</a></td>
                    `;
        list.appendChild(row);
    }
    static deleteBook(el){
        if(el.classList.contains('delete')){
                el.parentElement.parentElement.remove();
        }
    }

    // <div class ="alert alert-success"

    static showAlert(message,className){
        const div =document.createElement('div')
        div.className =`alert alert-${className}`
        div.appendChild(document.createTextNode(message));
        const container =document.querySelector('.container');
        const form =document.querySelector('#book-form');
        container.insertBefore(div,form);
        //vanish in 2 sec
        setTimeout(()=> document.querySelector('.alert').remove(),2000)

    }


    static clearFields(){
        document.querySelector('#title').value=" ";
        document.querySelector('#author').value=" ";
        document.querySelector('#isbn').value=" ";
    }
// ****************************************************************************************
    // Sreach garna ko lagi test
    static search(){
        console.log("congrats")
    let bookInput = document.getElementById('bookInput');
    console.log(bookInput)
    // bookInput.addEventListener('keyup',BookName);
    function BookName(){
        console.log("hudaixa")
    //getting value of input
        let bookValue =document.getElementById('bookInput').value.toUpperCase();
        console.log(bookValue)
        //get name ul
        let tbody =document.getElementById('book-list');
        console.log(tbody)
        //get li from ul


        var tr =document.getElementsByClassName('bd')
        // console.log(tr)
        // loop through colletion item li
        for (let i = 0;i<tr.length; i++){
            let td =tr[i].getElementsByTagName("td")[0];
            console.log(td)
            //if matched
            if(td.innerHTML.toUpperCase().indexOf(bookValue)>-1)
            {
                tr[i].style.display ='';
            }else{
                tr[i].style.display="none"
            }
    }
}
BookName()
}
}


//Event :DISPLAY books

document.addEventListener('DOMContentLoaded' ,UI.displayBooks);



//EVENT Addimg the BOOK

document.getElementById('book-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    //geting form value
    const title =document.getElementById('title').value;
    const author =document.getElementById('author').value;
    const isbn =document.getElementById('isbn').value;

    //Validate
    if(title===" " || author ===" "|| isbn ===" "){
        UI.showAlert("Please Fullfill All the Requirement",'danger');
    }else{
        // instantiate book
        const book =new Book(title,author,isbn);
        
            // console.log(book)
            //adding book to UI
        UI.addBookList(book);
        //add book to store
        Store.addBook(book);
        
        //success method
        UI.showAlert("book Added Successfully buddy","success")
            //clearfields
        UI.clearFields();
    }
});

//Event to remove the book 
document.getElementById('book-list').addEventListener('click',(e)=>{
   UI.deleteBook(e.target) 
   //remove book from Store
   Store.removedBook(e.target.parentElement.previousElementSibling.textContent)
    //delete notice method
    UI.showAlert("book deleted Successfully buddy","info")
});


//srored Class
class Store{
    static getBooks(){
        let books;
        if (localStorage.getItem('books')===null){
            books =[];
        }else{
            books=JSON.parse(localStorage.getItem('books'))
        }
        return books
    }

    static addBook(book){
        const books =Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }
    static removedBook(isbn){
        const books =Store.getBooks();
        books.forEach((book,index)=>{
            if(book.isbn ===isbn){
                books.splice(index,1);
            }
        });
        localStorage.setItem('books',JSON.stringify(books));
    }
}




//Search Button
let btn =document.getElementById('search-btn');
btn.addEventListener('click',UI.search)


