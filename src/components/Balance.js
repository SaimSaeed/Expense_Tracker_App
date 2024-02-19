import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
// function moneyFormatter(num) {
//   let p = num.toFixed(2).split('.');
//   return (
//     '$ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
//     p[0]
//       .split('')
//       .reverse()
//       .reduce(function (acc, num, i, orig) {
//         return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
//       }, '') +
//     '.' +
//     p[1]
//   );
// }
function Balance() {

  const { transactions } = useContext(GlobalContext);
  // Defining the variable for amounts and total amount
  // Amount varaible is storing all the amount of the array
  const amounts = transactions.map(transaction => transaction.amount);
  // Total variable is usnig reduce function to round all the values of amounts
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className='balanceContainer'>
      <h4>Your Balance</h4>
      <h1 id='balance'>{total}</h1>
    </div>
  )
}

export default Balance