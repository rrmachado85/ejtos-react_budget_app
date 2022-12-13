import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,dispatch } = useContext(AppContext);

    const changeBudget = (budget) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: budget
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                step='10'
                max='20000'
                onChange={event=> changeBudget(event.target.value)}>
            </input>
        </div>
    );
};

export default Budget;
