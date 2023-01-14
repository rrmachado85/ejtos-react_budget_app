import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget,dispatch,currency} = useContext(AppContext);

    const changeBudget = (budget) => {

        if(budget > 20000) {
            alert("The budget cannot exceed 20000 £");
            budget=20000;
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: budget
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                step='10'
                onChange={event=> changeBudget(event.target.value)}>
            </input>
        </div>
    );
};

export default Budget;
