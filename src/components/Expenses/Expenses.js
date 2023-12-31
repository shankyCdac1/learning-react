import ExpenseItem from "./ExpenseItem";
import Cards from "../UI/Cards";
import './Expenses.css';

function Expenses(props) {
  return (
    <Cards className="expenses">
      <ExpenseItem 
        title = { props.data[0].title }
        amount = { props.data[0].amount }
        date = { props.data[0].date }
      />
      <ExpenseItem 
        title = { props.data[1].title }
        amount = { props.data[1].amount }
        date = { props.data[1].date }
      />
      <ExpenseItem 
        title = { props.data[2].title }
        amount = { props.data[2].amount }
        date = { props.data[2].date }
      />
    </Cards>
  );
}
export default Expenses;
