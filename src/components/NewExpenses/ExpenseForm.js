import React, { useDebugValue, useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle : '',
  //   enteredAmount : '',
  //   enteredDate : ''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    /* setUserInput({
      ...userInput,
      enteredTitle : event.target.value
    }); */

    // setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle : event.target.value };
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount : event.target.value
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate : event.target.value
    // });
  };

  //instead of creating multiple handler function here, we can also create a single handler function
  const inputHandler = (identifier, value) => {
    if (identifier === "title") setEnteredTitle(value);
    else if (identifier === "date") setEnteredDate(value);
    else setEnteredAmount(value);
  };

  //combining all amount, date, title into single object, as we are not using combing approah above, if we use combining approach, then it will not be required
  const submitHandler = (event) => {
    event.preventDefault();
    const expenses = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //sending data from child to parent that is, from ExpenseForm to NewExpenses
    props.onSaveExpenses(expenses);

    //this value reset in input types can be done by using Two way binding, using the value attribute in input elements
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) => {
              inputHandler("title", event.target.value);
            }}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
