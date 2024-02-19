import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  // Defining the variable for amounts and total amount
  // Amount varaible is storing all the amount of the array
  const amounts = transactions.map(transaction=>transaction.amount);
  // Total variable is usnig reduce function to round all the values of amounts
  const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);

// income function
  const income = amounts
  .filter(item => item>0)
  .reduce((acc,item)=>(acc+=item),0)
  .toFixed(2);
// expense function
  const expense = (
  amounts
  .filter(item=>item < 0)
  .reduce((acc,item)=>(acc+=item),0) * -1)
  .toFixed(2);
  return (
    <div className='incomeExpenseContainer'>
        <div>
        <h4>Income</h4>
        <p id='moneyPlus' className='money plus'>{income}</p>
        </div>
        <div>
        <h4>Expense</h4>
        <p id='moneyMinus' className='money minus'>{expense}</p>
        </div>
        
        
        
        </div>
  )
}

export default IncomeExpense