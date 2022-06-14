import { useRef, useState } from "react";
import { v4 } from 'uuid';
import classes from './AddExpense.module.css';

const AddExpense = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredCreatedAt, setEnteredCreatedAt] = useState('')
    const [errors, setErrors] = useState([{message : ""}])
    const inputAmountRef = useRef()

    // let title = "My Title";
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const createdAtChangeHandler = (event) => setEnteredCreatedAt(event.target.value)

    // const amountChangeHandler = event => setEnteredAmount(event.target.value)

    const titleBlurHandler = (event) => {
        if(event.target.value.length < 3){
            setErrors(prevState => [{message : "Title length should be greater than 3"}, ...prevState])
        }else{
            setErrors([{message : ""}])
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(enteredTitle, enteredAmount, enteredCreatedAt)
        const expense = {
            id : v4(),
            title : enteredTitle,
            amount  : inputAmountRef.current.value,
            createdAt : new Date(enteredCreatedAt)
        }
        props.onAddNewExpense(expense);
    }

    return (
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-header">
                        <h5 className="text-center">Add Your Expense</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={submitHandler}>
                            {/* title */}
                            <div className="form-group">
                                <label htmlFor="title">Title :</label>
                                <input type="text"
                                    onBlur={titleBlurHandler}
                                    value={enteredTitle}
                                    name="title"
                                    className={`${errors[0].message === '' ? '' : classes['my-error']}`}
                                    onChange={titleChangeHandler} />
                                    {errors.map(err => <p>{err.message}</p>)}
                            </div>
                            {/* amount */}
                            <div className="form-group">
                                <label htmlFor="amount">Amount :</label>
                                <input type="number" 
                                    ref = {inputAmountRef} 
                                    className="form-control" 
                                    min="0.1" 
                                    step="0.1"/>
                                {/* <input type="number" value={enteredAmount} 
                                    onChange={amountChangeHandler} 
                                    name="amount" 
                                    className="form-control" 
                                    min="0.1" 
                                    step="0.1" /> */}
                            </div>
                            {/* createdAt */}
                            <div className="form-group">
                                <label htmlFor="createdAt">Date :</label>
                                <input type="date" 
                                    value={enteredCreatedAt} 
                                    onChange={createdAtChangeHandler} 
                                    min="2019-01-01" 
                                    max="2022-12-31" 
                                    name="createdAt" 
                                    className="form-control" />
                            </div>
                            {/* button */}
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-6">
                                    <button type="submit" className="btn btn-block btn-primary">Submit</button>
                                    </div>
                                    <div className="col-6">
                                    <button type="button" onClick={() => props.onCancelShowForm() } className="btn btn-block btn-warning">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddExpense;