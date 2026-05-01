import React from 'react';
import BookCard from './BookCard';

const FeaturedBooks = async() => {

    const res = await fetch('https://book-verse-ebon.vercel.app/data.json')
    const books = await res.json();
    const topBooks = books.slice(0, 4)
    console.log(topBooks);

    return (
        <div>
            <h1 className='text-2xl font-bold mt-4'>Showing the top 4 books:</h1>

            <div>
                {topBooks.map(book => <BookCard key={book.id} book={book}></BookCard>)}
            </div>
        </div>
    );
};

export default FeaturedBooks;