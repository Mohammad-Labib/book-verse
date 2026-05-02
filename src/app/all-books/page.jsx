import BookCard from '@/components/shared/BookCard';

import React from 'react';

const AllBooksPage = async() => {
    const res = await fetch('https://book-verse-ebon.vercel.app/data.json')
    const books = await res.json()
    // console.log(books);
    return (
        <div>
         <div className='flex justify-between items-center m-4'>
               <h1 className='text-2xl font-bold m-4'>All Books:</h1>
             
             <div className="flex items-center border-2 rounded-lg ">

  <input
    
    placeholder="Search books..."
    className="flex-1 px-3 py-2 "
  />

  <button className="bg-amber-400 px-4 py-2">
    Search
  </button>

</div>

         </div>

            <div className='grid grid-cols-4  gap-4'>
                {books.map(book => <BookCard key={book.id} book={book}></BookCard>)}
            </div>
        </div>
    );
};

export default AllBooksPage;




