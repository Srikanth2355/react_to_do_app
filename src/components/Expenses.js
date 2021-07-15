import React, { useState } from 'react'
import Card from './Card'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {
    const [selectYear, setselectYear] = useState('2020')
    const filteredYear = (selectedyear) => {
        setselectYear(selectedyear)
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter defaultyear={selectYear} onFilterValue={filteredYear} />
                {props.expenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} /> )}
            </Card>
        </div>
        
    )
}

export default Expenses
