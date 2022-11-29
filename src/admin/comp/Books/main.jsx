import React from 'react';
import Card from './book_info';
import books from './trending_books';


export default function Trending() {
    return (
        <div className="trending-books">
            {
                books.map(book => {
                    return <Card book={book}/>;
                }
                )
            }
        </div>
    )
}