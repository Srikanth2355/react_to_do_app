import React, { useState } from 'react'
import Card from './Card'
 import "./Expenses.css"
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

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
                <ExpensesChart expenses={filteredItems} />
                <ExpensesList expenses={filteredItems} />
            </Card>
        </div>
    )
}

export default Expenses
