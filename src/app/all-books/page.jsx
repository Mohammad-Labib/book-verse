import BookCard from '@/components/shared/BookCard';
import React from 'react';

const AllBooksPage = async() => {
    const res = await fetch('https://book-verse-ebon.vercel.app/data.json')
    const books = await res.json()
    console.log(books);
    return (
        <div>
            <h1 className='text-2xl font-bold m-4'>All Books:</h1>

            <div className='grid grid-cols-4  gap-4'>
                {books.map(book => <BookCard key={book.id} book={book}></BookCard>)}
            </div>
        </div>
    );
};

export default AllBooksPage;