import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>;
    }

    return (
        <div style={{ paddingTop: "2em" }}>
            <label className="expenses-list__label">All Expenses</label>
            <ul className="expenses-list">
                {props.items.map((item) => (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ExpensesList;
