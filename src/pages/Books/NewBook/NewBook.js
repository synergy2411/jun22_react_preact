import React, { Fragment, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const NewBook = () => {
    const inputTitleRef = useRef(null);
    const { authorId } = useParams()
    const [ formIsBlurred, setFormIsBlurred] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault();
        const newbook = {
            title: inputTitleRef.current.value,
            author: authorId
        }
        const res = await fetch("http://localhost:3030/books", {
            method: "POST",
            body: JSON.stringify(newbook),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json();
        console.log(data)
    }

    return (
        <Fragment>
            {/* <Prompt when={formIsBlurred} message="Are you sure to leave this page?"/> */}
            <form onSubmit={submitHandler} onBlur = {() => setFormIsBlurred(true)}>
                {/* book title */}
                <input type="text" placeholder='book title' ref={inputTitleRef} />
                <button type='submit' className='btn btn-dark'>Add Book</button>
            </form>
        </Fragment>
    );
}

export default NewBook;
