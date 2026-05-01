import React from 'react';
import { Card } from "@heroui/react";
import Image from 'next/image';

const BookCard = ({book}) => {
    console.log(book);
    return (
        <Card className="">
            <div>
                <Image src={book.image_url}
                    height={200}
                    width={200}
                    alt={book.title}
                >
                </Image>
            </div>
        </Card>
    );
};

export default BookCard;