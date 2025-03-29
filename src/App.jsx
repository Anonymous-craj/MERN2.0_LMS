import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import SingleBook from "./singleBook/SingleBook";
import AddBook from "./addBook/AddBook";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<SingleBook />} />
        <Route path="/addBook" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
