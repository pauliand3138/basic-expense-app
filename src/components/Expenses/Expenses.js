import { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2022");

    const filterChangedHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    );

    return (
        <Card className="expenses">
            <ExpensesFilter
                onChangeFilter={filterChangedHandler}
                selected={filteredYear}
            />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
