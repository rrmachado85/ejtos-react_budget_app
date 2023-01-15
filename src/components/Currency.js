import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {

    const { currency,dispatch } = useContext(AppContext);

    let optionsState;

    const changeCurrency = (currency) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        });
    };

    switch ({currency}) {
        case '$':
            optionsState="$ Dollar";
          break;
        case '£':
            optionsState="£ Pound";
          break;
        case '€':
            optionsState="€ Euro";
          break;
        case '₹':
            optionsState="₹ Ruppee";
          break;
        default:
      }

    return (
        <div className='alert alert-primary'>
            <span>Currency {optionsState}</span>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => changeCurrency(event.target.value)}>
                    <option value="$" name="$">$ Dollar</option>
                    <option value="£" name="£">£ Pound</option>
                    <option value="€" name="€">€ Euro</option>
                    <option value="₹" name="₹">₹ Ruppee</option>
                  </select>
            
        </div>
    );
};

export default Currency;