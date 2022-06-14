import React, { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';

const FavAuthor = () => {
    const { authorId } = useParams();
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        const fetchSingleAuthor = async () => {
            const res = await fetch(`http://localhost:3030/authors/${authorId}`);
            const data = await res.json();
            setAuthor(data)
        }
        fetchSingleAuthor()
    }, [authorId])

    if(author){
        return (
            <div className='card'>
                <div className='card-body'>
                    <p className='lead'>{author.name}</p>
                    <p>{author.email}</p>
                    <Link to={`/authors/${authorId}/books`}>Show All Books</Link>
                </div>
            </div>
        );
    }else{
        return <p>Loading...</p>
    }
}

export default FavAuthor;
