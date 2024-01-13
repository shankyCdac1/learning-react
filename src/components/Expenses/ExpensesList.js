import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  let expenseContent = <p>No Expense Found</p>;

  if (props.item.length === 0)
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;

  return (
    <ul className="expenses-list">
      {props.item.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
  );
}

export default ExpensesList;
