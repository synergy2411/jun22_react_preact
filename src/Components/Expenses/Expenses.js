import React, { useState } from 'react';
import AddExpense from './AddExpense/AddExpense';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';
import ExpenseItem from './ExpenseItem/ExpenseItem';

const INTIAL_EXPENSES = [
    { id: "e001", title: "shopping", amount: 12.99, createdAt: new Date("Dec 21,2021") },
    { id: "e002", title: "grocery", amount: 10.9, createdAt: new Date("Aug 1,2020") },
    { id: "e003", title: "insurance", amount: 22.9, createdAt: new Date("Jan 13,2022") },
]

const Expenses = () => {

    const [expenses, setExpenses] = useState(INTIAL_EXPENSES)
    const [showForm, setShowForm] = useState(false)
    const [selectedYear, setSelectedYear] = useState('2022')

    const onToggleForm = () => setShowForm(!showForm);

    const onAddNewExpense = expense => {
        setExpenses((prevState) => {
            return [expense, ...prevState]
        })
        setShowForm(false)
    }

    const onCancelShowForm = () => setShowForm(false);

    let filteredExpenses = [];
    filteredExpenses = expenses.filter(exp => exp.createdAt.getFullYear().toString() === selectedYear)

    const onFilterYear = selYear => {
        setSelectedYear(selYear)
    }



    return (
        <div className='container'>
            <h4 className='text-center'>Awesome Expense App</h4>
            <div className='row'>
                <div className='col-4 offset-4'>
                    <button onClick={onToggleForm}
                        className="btn btn-block btn-primary">
                        {showForm ? 'Hide Form' : 'Add Expense'}
                    </button>
                </div>
                <div className='col-4'>
                    <ExpenseFilter onFilterYear={onFilterYear} selectedYear={selectedYear} />
                </div>
            </div>
            {showForm && <AddExpense onAddNewExpense={onAddNewExpense} onCancelShowForm={onCancelShowForm} />}
            <hr />
            <div className='row'>
                {
                    filteredExpenses.map(exp =>  <ExpenseItem expense = {exp} key={exp.id} />)
                }
            </div>

        </div>
    )

}

export default Expenses;