import React,{useContext, useEffect, useState} from 'react'
import './nav.css'
import {BookContext} from './booksContext'


export default function BookList(props){
    const [books,setBooks] = useContext(BookContext); 

    return (
        <div id = "bookList">
            { 
                books.map( (book, index) => {
                    return <h2 key={index} class = "book"> {book.name} : {book.price} </h2>   
                })
            }
                   { console.log("render going")}
        </div>

    )
}