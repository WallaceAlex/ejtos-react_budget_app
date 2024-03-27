import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';


const Budget = () => {
    const { budget } = useContext(AppContext);
    console.log(budget);
    const [newBudget, setNewBudget] = useState(budget);
    // const  expenses  = ExpenseTotal.totalExpenses;
    // console.log(expenses);
    const handleBudgetChange = (event) => {        
        const upperLimit = 20000;        

        if(newBudget > upperLimit) {
            alert("The value cannot exceed £"  + upperLimit);
            setNewBudget(budget);
            return;
        }
        if(newBudget < 500) {
            alert("You cannot reduce the budget value lower than the spending");
            setNewBudget(budget);
            return;
        }

        setNewBudget(event.target.value);
        console.log(event.target.value);
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>

<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
