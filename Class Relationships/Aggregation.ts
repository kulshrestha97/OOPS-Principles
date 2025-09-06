class Book {
    id: string;
    name: string;
    genre: string;
    author: string;
    released: string;
}

class Library {
    private books: Book[];
    // Library is an aggregator of books. Books can exist freely without library.
    addBook(book: Book) { 
        this.books.push(book);
    }
    removeBook(id: string) {
        this.books = this.books.filter((book) => book.id !== id);
    }
}

function main() {
    const library = new Library();
    const book = new Book();
    // library is a whole, and book is a part.
    library.addBook(book);  
}
main()
export {}