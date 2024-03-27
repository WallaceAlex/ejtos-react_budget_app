import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    // console.log(budget);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    // const  expenses  = ExpenseTotal.totalExpenses;
    // console.log(expenses);
    const handleBudgetChange = (event) => {        
        setNewBudget(event.target.value);   
        console.log(event.target.value);  
    }

    const handleKeyDown = (event) => {
        const upperLimit = 20000; 

        if (event.key === 'Enter' && newBudget > upperLimit){
            alert("The value cannot exceed £"  + upperLimit);
            setNewBudget(budget);
            return;
        } else if(event.key === 'Enter' && newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            setNewBudget(budget);
            return;
        } else if(event.key === 'Enter' && newBudget <= upperLimit) {
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget
            });
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: { currency }</span>

<input type="number" step="10" value={newBudget} onChange={handleBudgetChange} onKeyDown={handleKeyDown}></input>
</div>
    );
};
export default Budget;
