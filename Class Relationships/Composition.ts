interface IPage {
    addText(text: string): void;
    getContent(): string;
    removeText(text: string): void;
}
interface IBook {
    goToPageNumber(pageNumber: number): IPage;
    addPage(content: string);
    removePage(pageNumber: number);
}

class Page implements IPage {
    private content: string;
    addText(text: string): void {
        this.content+=text;
    }
    getContent(): string {
        return this.content;
    }
    removeText(text: string): void {
        const removeFrom = this.content.indexOf(text);
        this.content = this.content.slice(0, removeFrom);
    }

}
class Book implements IBook {
    private pages: IPage[]
    title: string;
    author: string;
    price: number;

    constructor(title: string, author: string, price: number) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    addPage(content: string) {
        const page = new Page(); // this is composition, as we are creating the page object inside the book. Book "owns" the page.
        // if book is destroyed, page will also be destroyed.
        page.addText(content);
        this.pages.push(page);
    }
    removePage(pageNumber: number) {
        this.pages = this.pages.filter((_,index) => index!==pageNumber);
    }
    goToPageNumber(pageNumber: number): IPage {
        return this.pages[pageNumber];
    }
}