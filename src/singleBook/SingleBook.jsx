import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleBook = () => {
  const { id } = useParams(); //single book ko id catch garerw arko component ma use garnaw ko lai useParams hook use gareko!
  const [book, setBook] = useState({}); // single book ko data store grnaw lai state banako jun chai object ho!

  const fetchBook = async () => {
    const response = await axios.get(`http://localhost:3000/book/${id}`); //Api hit gareko
    if (response.status === 200) {
      setBook(response.data.data);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);
  return (
    <>
      <Navbar />
      <img
        className="w-full"
        src={
          "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200"
        }
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{book.bookName}</div>
        <p className="text-gray-700 text-base">Rs. {book.bookPrice}</p>
        <p className="text-black-700 text-base">{book.isbnNumber}</p>
        <p className="text-black-700 text-base">{book.bookAuthor}</p>
      </div>
    </>
  );
};

export default SingleBook;
