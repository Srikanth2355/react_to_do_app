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
    const filteredItems = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectYear;
    })
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter defaultyear={selectYear} onFilterValue={filteredYear} />
                {filteredItems.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} /> )}
            </Card>
        </div>
        
    )
}

export default Expenses
