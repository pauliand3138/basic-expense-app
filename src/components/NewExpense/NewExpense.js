import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isAddNewExpense, setIsAddNewExpense] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onAddExpense(expenseData);
        setIsAddNewExpense(false);
    };

    const startAddingHandler = () => {
        setIsAddNewExpense(true);
    };

    const stopAddingHandler = () => {
        setIsAddNewExpense(false);
    };

    return (
        <div className="new-expense">
            {!isAddNewExpense && (
                <button onClick={startAddingHandler}>Add New Expense</button>
            )}
            {isAddNewExpense && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopAddingHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
