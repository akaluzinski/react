import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Date</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">321.0</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
