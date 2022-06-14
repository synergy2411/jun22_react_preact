import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import FavAuthor from './FavAuthor/FavAuthor';

const Authors = () => {

    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchAuthors = async () => {
            const res = await fetch("http://localhost:3030/authors")
            const data = await res.json()
            setAuthors(data)
        }
        fetchAuthors();
    }, [])

    const onAuthorSelect = (authorId) => {
        console.log(authorId);
        // history.push("/authors/"+authorId);
        navigate("/authors/"+authorId, { replace : true})
        // navigate(2)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-5'>
                    <h5>Select your Fav Author : </h5>
                </div>
                <div className='col-7'>
                    <select className='form-control' 
                        onChange={(event) => onAuthorSelect(event.target.value)}>
                        {authors.map(author => <option key={author.id} value={author.id}>
                                {author.name.toUpperCase()}</option>)}
                    </select>
                </div>
            </div>
            <hr/>
            <Outlet />
        </div>
    );
}

export default Authors;
