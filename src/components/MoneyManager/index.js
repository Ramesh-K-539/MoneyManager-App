import {Component} from 'react'

import './index.css'

import MoneyDetails from '../MoneyDetails'

/* const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
] */

// Write your code here
class MoneyManager extends Component {
  render() {
    return (
      <div className="money-manager-app">
        <div className="profile-container">
          <h1 className="user-name">Hi,Richard</h1>
          <p className="description">
            Welcome back to your{' '}
            <span className="span-text">Money Manager</span>
          </p>
        </div>
        <ul className="money-details-container">
          <MoneyDetails hi="hi" />
        </ul>
        <div className="container">
          <form className="form-container">
            <h1 className="add-transactions-text">Add Transaction</h1>
            <p className="input-title">TITLE</p>
            <input
              type="text"
              className="custom-input-bar"
              placeholder="TITLE"
            />
            <p className="input-title">AMOUNT</p>
            <input
              type="text"
              className="custom-input-bar"
              placeholder="AMOUNT"
            />
            <p className="input-title">TYPE</p>
            <select name="Type" className="custom-drop-down-list">
              <option value="Income">Income</option>
              <option value="Expenses">Expenses</option>
            </select>
            <button className="custom-btn" type="button">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="add-transactions-text">History</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
