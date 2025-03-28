import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg my-10">
        <img
          className="w-full"
          src={
            book.imageUrl
              ? book.imageUrl
              : "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200"
          }
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{book.bookName}</div>
          <p className="text-gray-700 text-base">Rs. {book.bookPrice}</p>
          <p className="text-black-700 text-base">{book.isbnNumber}</p>
        </div>
        <Link to={`/book/${book._id}`}>See More</Link>
      </div>
    </>
  );
};

export default Card;
