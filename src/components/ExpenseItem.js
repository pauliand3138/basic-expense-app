import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>11th November 2022</div>
      <div className="expense-item__description">
        <h2>Pet Insurance</h2>
        <div className="expense-item__price">RM 300</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
