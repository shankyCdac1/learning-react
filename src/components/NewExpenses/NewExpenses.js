import ExpenseForm from "./ExpenseForm";

import './NewExpenses.css';

function NewExpenses(props) {
    const saveExpensesDataHandler = (childData) => {
        const expenseData = {
            ...childData,
            id : Math.random() * 10 + 1
        }
        //sending data from child to parent that is, from NewExpenses to App
        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenses={ saveExpensesDataHandler } />
        </div>
    );
}

export default NewExpenses;