import React, { createContext, useState } from "react";
// import uuid from "../utils/uuid";
// import  uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Name of the wind", author: "Patrick", id: "1" },
    { title: "The Great Gatsby", author: "J.K. Rowling", id: "2" },
  ]);
  const addBook = (title, author ) =>{
    setBooks([...books, { title, author, id: books.length + 1 }]);
  }
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }  
  return (
    <BookContext.Provider value={{books ,addBook , removeBook}}>
        {props.children} 
    </BookContext.Provider>
  )
};

export default BookContextProvider;
