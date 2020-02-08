import React,{useState,useContext} from 'react'
import {BookContext} from './booksContext'

export let AddBook = props => {
    let [bookId, setBookId] = useState('');
    let [bookName, setBookName] = useState({
                                        name: '',
                                        border: 'white'
                                    });
    let [bookPrice, setBookPrice] = useState({
                                        price: '',
                                        border: 'white'
                                    });

    const [Books,sendOutBooks] = useContext(BookContext);

    
    let handleSubmit = e => {
        e.preventDefault();
        handleBookId();

        if(bookName.name == '' || bookPrice.price == '' ) { 
            if(bookName.name == '') {   
                bookName.border = '2px solid red';
            } else {
                bookName.border = '2px solid white';
            }
            if (bookPrice.price == '') {
                bookPrice.border = '2px solid red';
            } else {
                bookPrice.border = '2px solid white';
            }
        } else {
            setBookName(bookName);
            setBookPrice(bookPrice);

            sendOutBooks(
                [
                    ...Books, 
                    {
                        'id': bookId,
                        'name': bookName.name, 
                        'price': bookPrice.price
                    }
                ] 
            );
        }

    }

    let handleBookName = e => {
        bookName.name = e.target.value;
    }

    let handleBookPrice = e => {
        bookPrice.price = e.target.value;
    }

    let handleBookId = () => {
        setBookId(++Books[Books.length - 1].id);
    }
    return (
         <form onSubmit = {handleSubmit}>
            <input type="text"  onChange={handleBookName} style={{'border' : bookName.border}} />
            <input type="text"  onChange={handleBookPrice} style={{'border' : bookPrice.border}} />
            <button> Store </button>
        </form>
    )
}