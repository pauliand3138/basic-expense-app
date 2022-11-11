import "./ExpenseItem.css";

function ExpenseItem(props) {
    const expenseDate = new Date(2022, 11, 11);
    const expenseTitle = "Pet Insurance";
    const expenseAmount = 300;

    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">RM {props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
