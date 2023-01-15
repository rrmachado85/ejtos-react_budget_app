import React, { useContext } from 'react';
import {Dropdown,DropdownButton} from 'react-bootstrap';
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
   <DropdownButton
      alignRight
      title={optionsState}
      id="drop"
      onSelect={changeCurrency}
      
      >
              <Dropdown.Item eventKey="$">$ Dollar</Dropdown.Item>
              <Dropdown.Item eventKey="£">£ Pound</Dropdown.Item>
              <Dropdown.Item eventKey="€">€ Euro</Dropdown.Item>
              <Dropdown.Item eventKey="₹">₹ Ruppee</Dropdown.Item>
      </DropdownButton>
        </div>

    );
};

export default Currency;