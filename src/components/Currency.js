import React, { useContext } from 'react';
import {Dropdown} from 'react-bootstrap';
import { AppContext } from '../context/AppContext';


const Currency = () => {

    const { currency,dispatch } = useContext(AppContext);

    var optionsState=currency;

    const changeCurrency = (currency) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        });
    };

    switch (currency) {
        case '$':
            optionsState="Currency ($ Dollar)";
          break;
        case '£':
            optionsState="Currency (£ Pound)";
          break;
        case '€':
            optionsState="Currency (€ Euro)";
          break;
        case '₹':
            optionsState="Currency (₹ Ruppee)";
          break;
        default:
      }

    return (
        <div className='alert alert-secondary'>
        
        <Dropdown
        onSelect={changeCurrency}
        >
        <Dropdown.Toggle id="drop">
          {optionsState}
        </Dropdown.Toggle>
        <Dropdown.Menu id="dropmenu">
            <Dropdown.Item id="ditem" eventKey="$">$ Dollar</Dropdown.Item>
            <Dropdown.Item id="ditem" eventKey="£">£ Pound</Dropdown.Item>
            <Dropdown.Item id="ditem" eventKey="€">€ Euro</Dropdown.Item>
            <Dropdown.Item id="ditem" eventKey="₹">₹ Ruppee</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    
        </div>
      
    );
};

export default Currency;