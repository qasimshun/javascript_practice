// book constructor 
function Book(author,title,isbn){
    this.author = author;
    this.title = title;
    this.isbn = isbn;
}

// UI constructor

function UI() {

}

// add book to list
UI.prototype.addBookToList = function(book) {
    const list = document.querySelector('.list');

    // create row element
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <a href='' class='gg'>X</a>
    `;

    list.append(row);
}

// clear input values from ui
UI.prototype.clearValues = function() {
    const title = document.getElementById('title').value = '';
    const author = document.getElementById('author').value = '';
    const isbn = document.getElementById('isbn').value = '';
}

// show alert 
UI.prototype.showError = function(message, classnumber) {
    const div = document.createElement('div');
    div.className = `alert ${classnumber}`;
    div.append(document.createTextNode(message));
    const upper = document.querySelector('.upper');
    const heading = document.querySelector('.heading');
    upper.insertBefore(div, heading);

    setTimeout(()=>{
        document.querySelector('.alert').remove();
    },3000);
}

// delete method 
UI.prototype.deleteBook = function(target){
    if(target.className = 'gg'){
        target.parentElement.parentElement.remove();
    }
}

// main function

function main(e) {
    // get all input values
    const titleValue = document.getElementById('title').value;
          authorValue = document.getElementById('author').value;
          isbnValue = document.getElementById('isbn').value;

    // create book object
    const book = new Book(authorValue, titleValue, isbnValue);

    // create ui object
    const ui = new UI();
    
    //validation
    if (titleValue === '' || authorValue === '' || isbnValue === ''){
        ui.showError('please check your value', 'error');
    }else {
        // add list items
    ui.addBookToList(book);

    // sucess message
        ui.showError('sucess book added', 'success')
    // clear values from ui

    ui.clearValues();
    }

    e.preventDefault();
}

// add event listener to form

document.querySelector('form').addEventListener('submit', main);
document.querySelector('.list').addEventListener('click',function(e){

    const ui = new UI();

    ui.deleteBook(e.target);

    ui.showError('this is success', 'success');

    e.preventDefault();
})