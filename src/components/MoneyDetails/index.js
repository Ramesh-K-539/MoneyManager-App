// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {hi} = props
  return (
    <>
      <li className="list-item">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="text-details-container">
          <p className="your-balance-text">Your Balance</p>
          <p className="balance-amount">Rs 0 {hi}</p>
        </div>
      </li>
      <li className="list-item-income">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="text-details-container">
          <p className="your-balance-text">Your Income</p>
          <p className="balance-amount">Rs 0 {hi}</p>
        </div>
      </li>
      <li className="list-item-expenses">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt=" expenses"
        />
        <div className="text-details-container">
          <p className="your-balance-text">Your Expenses</p>
          <p className="balance-amount">Rs 0 {hi}</p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
