import React, { useContext } from 'react'
import './nav.css'
import {BookContext} from './booksContext'
import {AddBook} from './addBook'

export default function Nav() {
    const [books, setBooks] = useContext(BookContext);

    return (
        <div id = "nav">
            <div>
                <h1> Books </h1>
                <h2> Qty: {books.length} </h2>
            </div>
            <div>
                <AddBook/>
            </div>
        </div>
    )
}