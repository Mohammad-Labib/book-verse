import React from 'react';
import Marquee from 'react-fast-marquee';

const UseMarquee = async () => {
  const res = await fetch('https://book-verse-ebon.vercel.app/data.json', {
    cache: "no-store",
  });
  const bookMarquee = await res.json();

  return (
    <div className="flex items-center gap-4 bg-gray-100 p-2  mt-4">
      
      <span className="font-semibold rounded p-2  bg-amber-500">
        New Arrivals:
      </span>

      <div className="flex-1 overflow-hidden">
        <Marquee pauseOnHover={true} speed={50}>
          {bookMarquee.map((book) => (
            <span key={book.id} className="mx-2 whitespace-nowrap">
               {book.title} |
            </span>
          ))}
        </Marquee>
      </div>

    </div>
  );
};

export default UseMarquee;