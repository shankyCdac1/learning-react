import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

function NewExpenses(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpensesDataHandler = (childData) => {
    const expenseData = {
      ...childData,
      id: Math.random() * 10 + 1,
    };
    //sending data from child to parent that is, from NewExpenses to App
    props.onAddExpense(expenseData);

    //closing the forma after expense is added
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenses={saveExpensesDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpenses;
