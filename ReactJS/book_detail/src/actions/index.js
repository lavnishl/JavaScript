// selectBook is an actionCreator
export function selectBook(book) {
    // returns an action : an object with type property
    console.log('inside actionCreator : a book has been selected :-' + book.title);
    return {
        type : 'BOOK_SELECTED',
        payload : book
    };
}