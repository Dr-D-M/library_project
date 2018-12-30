	let myLibrary = [];

	const bookChart = document.getElementById('book-chart');
	const newBook = document.querySelector('.add_book');
	const bookEntry = document.querySelector('.book-entry');
	const submitButton = document.querySelector('.submit');
	const bookChartRow = document.getElementById('book-data');

	const inputTitle = document.getElementById('title');
	const inputAuthor = document.getElementById('author');
	const inputPages = document.getElementById('pages');
	const inputYear = document.getElementById('year');
	const inputStatus = document.getElementById('status');


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
		status.textContent = book.status;
		row.appendChild(status);

		let remove = document.createElement('td');
		let eraseButton = document.createElement('button');
		eraseButton.id = "erase";
		eraseButton.textContent = "X";



		remove.appendChild(eraseButton);
		row.appendChild(eraseButton);	

		bookChart.appendChild(row);
	}


function showBookLS(){
	myLibrary.forEach(function(book){
		displayBook(book);
	});
}
	/*function showBookLS(){
		if(localStorage.getItem('books')=== null) {
			myLibrary = [];
		}else{
			myLibrary = JSON.parse(localStorage.getItem('books'));
		}
		myLibrary.forEach(function(book){
			displayBook(book);
		});
	}*/


	submitButton.addEventListener('click', function(e){
		e.preventDefault();
		
		// create the book
		let title = inputTitle.value;
		let author = inputAuthor.value;
		let pages = inputPages.value;
		let year = inputYear.value;
		let status = inputStatus.value;
		if(title == '', author == '',  pages == '', year == '' ) {
			alert('Fill All Blanks. We Are Watching');
			
		}else{

		}
		let otherBook = new Book(title, author, pages, year, status);
		addBookToLibrary(otherBook);
		
		inputTitle.value = "";
		inputAuthor.value = "";
		inputPages.value = "";
		inputYear.value = "";
		inputStatus.value = "";
		
		console.log(otherBook);

		showBookLS();
		
	});	


		
		


