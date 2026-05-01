
import React from 'react';
import { Card } from "@heroui/react";
import Image from 'next/image';

const BookCard = ({book}) => {
    console.log(book);
    return (
        <Card className="border">
            <div className='relative w-full aspect-square'>
                <Image src={book.image_url}
                    height={200}
                    width={200}
                    alt={book.title}
                    className='object-cover rounded-xl'
                >
                </Image>
            </div>

            <div>
                <h2>{book.title}</h2>
            </div>

           <button className="w-full border font-semibold border-gray-500 text-gray-700 px-4 py-2 rounded-full">
            View Details
        </button>
        </Card>
    );
};

export default BookCard;