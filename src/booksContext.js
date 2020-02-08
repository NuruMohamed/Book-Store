import React,{ useState,createContext } from 'react'

export const BookContext = createContext();

export const BooksProvider = props => {
    let [books, setBooks] = useState(
                [
                    {
                        id: 1,
                        name: "Regret",
                        price: "$20"
                    },
                    {
                        id: 2,
                        name: "My Life",
                        price: "$50"
                    },
                    {
                        id: 3,
                        name: "The laddar",
                        price: "$10"
                    }
                ]
            )
console.log(books);
        return (
            <BookContext.Provider value={[books,setBooks]}>
                {props.children}
            </BookContext.Provider>
        )

}