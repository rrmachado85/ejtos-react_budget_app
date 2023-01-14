import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {

    const { currency,dispatch } = useContext(AppContext);

    const changeCurrency = (currency) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        });
    };

    return (
        <div className='alert alert-primary'>
            <span>Currency £{currency}</span>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => changeCurrency(event.target.value)}>
                        <option defaultValue>Choose...</option>
                    <option value="$" name="$">$ Dollar</option>
                    <option value="£" name="£">£ Pound</option>
                    <option value="€" name="€">€ Euro</option>
                    <option value="₹" name="₹">₹ Ruppee</option>
                  </select>
            
        </div>
    );
};

export default Currency;