import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Cards from "../UI/Cards";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const getSelectValueHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.data.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Cards className="expenses">
      <div>
        <ExpensesFilter
          selected={filteredYear}
          onSelect={getSelectValueHandler}
        />
      </div>
      <ExpenseChart expense={filteredExpenses}/>
      <ExpensesList item={filteredExpenses} />
    </Cards>
  );
}
export default Expenses;
