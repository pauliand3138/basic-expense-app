import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Groceries",
        amount: 94.12,
        date: new Date(2022, 7, 14),
    },
    {
        id: "e2",
        title: "Huawei Tablet",
        amount: 799.49,
        date: new Date(2022, 2, 12),
    },
    {
        id: "e3",
        title: "Health Insurance",
        amount: 294.67,
        date: new Date(2022, 2, 28),
    },
    {
        id: "e4",
        title: "Working Desk",
        amount: 450,
        date: new Date(2022, 5, 12),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevState) => {
            return [expense, ...prevState];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
};

export default App;
