let myLibrary = [];

const bookChart = document.getElementById('book-chart');
const newBook = document.querySelector('.add_book');
const bookEntry = document.querySelector('.book-entry');
const submitButton = document.querySelector('.submit');

const inputTitle = document.getElementById('title').value;
const inputAuthor = document.getElementById('author').value;
const inputPages = document.getElementById('pages').value;
const inputYear = document.getElementById('year').value;
const inputStatus = document.getElementById('status').value;


function toggleForm(){
    newBook.classList.toggle("browse");
    newBook.innerHTML == 'Add New Book' ? newBook.innerHTML = "<i class ='fas fa-times'<i/> Close": newBook.innerHTML = "Add New Book";
   bookEntry.classList.toggle('display');
}

function Book(title, author, pages, year, status){
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.year = year;
   this.status = status
}

bookEntry.addEventListener('submit', function(e){
	e.preventDefault();
	let title = inputTitle.value;
	let author = inputAuthor.value;
	let pages = inputPages.value;
	let year = inputYear.value;
	let status = inputStatus.value;
	if(title === '', author === '', pages === '') {
		showMessage('alert', 'fill all blanks');
		return
	}
	let otherBook = new Book(title, author, pages, year, status);
	addBookToLibrary(otherBook);
	displayBook(newBook);
	showMessage('success', 'Book Added.')
	inputTitle.value = "";
	inputAuthor.value = "";
	inputPages.value = "";
	inputYear.value = "";
	inputStatus.value = "";
});



function addBookToLibrary(book){
	myLibrary.push(book);
}

function displayBook(book){

	let row = document.createElement('tr');
	row.id = "book-data";
	let title = document.createElement('td');
	title.textContent = book.title;
	row.appendChild(title);

	let author = document.createElement('td');
	author.textContent = book.author;
	row.appendChild(author);

	let pages = document.createElement('td');
	pages.textContent = book.pages;
	row.appendChild(pages);

	let year = document.createElement('td');
	year.textContent = book.year;
	row.appendChild(year);

	let status = document.createElement('td');
	status.innerHTML = book.status;
	row.appendChild(status);

	let remove = document.createElement('td');
	let eraseButton = document.createElement('button')
	eraseButton.id = "erase";
	eraseButton.innerHTML = "X";

	remove.appendChild(eraseButton);
	row.appendChild(eraseButton);	

	bookChart.appendChild(row);
}


function render(bookInfo){

}



function message(className, m){
	let div = document.createElement('div');
	div.className = `empty ${className}`;
	div.innerHTML = `<h6>${m}</h6>`;
	bookEntry.insertBefore(div, bookChart);
	setTimeout(function(){
		document.querySelector('.empty').remove();
	}, 4000)
}
function showBookLS(){
	if(localStorage.getItem('books')=== null) {
		myLibrary = [];
	}else{
		myLibrary = JSON.parse(localStorage.getItem('books'));
	}
	myLibrary.forEach(function(book){
		displayBook(book);
	});
}


submitButton.addEventListener('click', function(e){
	e.preventDefault();
	/*submitBook();*/
	showBookLS();
	displayBook();
	console.log(displayBook);
});	


	
	


