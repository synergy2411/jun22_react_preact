import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';

const sortBooks = (books, isAscending) => {
    if(isAscending){
        return books.sort((bookA, bookB) => {
            if(bookA.title > bookB.title) return 1;
            else if(bookA.title < bookB.title) return -1;
            else return 0
        })
    }else{
        return books.sort((bookA, bookB) => {
            if(bookA.title > bookB.title) return -1;
            else if(bookA.title < bookB.title) return 1;
            else return 0
        })
    }
};

const Books = () => {
    const { authorId } = useParams();
    const [books, setBooks] = useState([]);

    const navigate = useNavigate()
    const location = useLocation()

    const query = new URLSearchParams(location.search);
    const isAscending = query.get("sort") === "asc";

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await fetch("http://localhost:3030/books")
            const data = await res.json();
            const filteredBooks = data.filter(book => book.author === authorId)
            setBooks(filteredBooks)
        }
        fetchBooks()
    }, [authorId])

    const onSortBooks = () => {
        navigate(`/authors/${authorId}/books?sort=${isAscending ? 'desc' : 'asc'}`)
    }

    if(books){
        const sortedBooks = sortBooks(books, isAscending);
        console.log(sortedBooks);
        return (
            <>
            <button className='btn btn-dark' onClick={onSortBooks}>
                Sort {isAscending ? 'Decending' : 'Ascending'}</button>
                <br/>
                <Link to={`/authors/${authorId}/books/add-new`}>Add New Book</Link>
                <br/>
            <ul>
                {sortedBooks.map(book => <li key={book.id}>{book.title.toUpperCase()}</li>)}
            </ul>
            </>
        );
    }else{
        return <p>Loading....</p>
    }
}

export default Books;
