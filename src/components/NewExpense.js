import React, { useState } from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'
function NewExpense(props) {
    const [isEditing, setEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        
        }
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        setEditing(false);
    }

    const startEditingHandler = () => {
        setEditing(true);
    }
    const stopEditing = () => {
        setEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopEditing={stopEditing} />}
        </div>
    )
}

export default NewExpense
