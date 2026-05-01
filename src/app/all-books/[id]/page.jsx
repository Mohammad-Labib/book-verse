import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const booksDatailspage =async ({params}) => {
    const {id} = await params;

    const res = await fetch('https://book-verse-ebon.vercel.app/data.json')
    const books = await res.json();

    const book = books.find(p => p.id == id)

    console.log(books);
    return (
        <>
  <div className="card bg-base-100 w-96 shadow-md   rounded-2xl ">


  <figure className="px-4 pt-4">
    <div className="relative w-full aspect-square rounded-xl">
      <Image
        src={book.image_url}
        alt={book.title}
        fill
        className="object-cover "
      />
    </div>
  </figure>


  <div className="card-body space-y-2">


    <div className="flex justify-between items-center gap-2">
      <h2 className="card-title text-lg line-clamp-1">
        {book.title}
      </h2>
      <span className="text-sm text-pink-500 whitespace-nowrap">
         {book.author}
      </span>
    </div>

   
    <div className="flex justify-between items-center text-sm">
      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
        {book.category}
      </span>
      <span className="text-green-500 font-bold">
         {book.available_quantity}
      </span>
    </div>


    <p className="text-sm text-gray-500 line-clamp-2">
      {book.description}
    </p>

   
    <div className="card-actions justify-end mt-3">
      <button className="btn btn-outline bg-amber-300 p-2 rounded-full w-full">
        Buy Now
      </button>
    </div>

  </div>
</div>
        </>
    );
};

export default booksDatailspage;