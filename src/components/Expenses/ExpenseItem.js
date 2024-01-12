import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Cards from '../UI/Cards';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    
    const clickHandler = () => {
        setTitle('Updated Value');    
    }
    return (
        <Cards className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{ title }</h2>
                <div className='expense-item__price'>{ props.amount }</div>
                <button onClick={clickHandler}>Click Me</button>
            </div>
        </Cards>
    );
}
export default ExpenseItem