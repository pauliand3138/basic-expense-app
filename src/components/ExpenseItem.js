import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date(2022, 11, 11);
    const expenseTitle = "Pet Insurance";
    const expenseAmount = 300;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">RM {expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
