import React from 'react'
import BookList from './bookList'
import Nav from './nav'
import {BooksProvider} from './booksContext'

export default function Root() {


    return (
        <div>
            <BooksProvider>
                <Nav/>
                <BookList/>
            </BooksProvider>
        </div>
    )
}