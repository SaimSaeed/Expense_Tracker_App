import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
function AddTransaction() {
  const [text,setText]= useState("");
  const [amount,setAmount]= useState(0);
const {addTransaction} = useContext(GlobalContext)

const onSubmit = (e)=>{
e.preventDefault();
const newTransaction = {
  id: Math.floor(Math.random()* 100000000),
  text:text,
  amount : +amount
}
addTransaction(newTransaction);
} 
  return (
    <div>
<h3>Add New Transaction</h3>
<form id='form' onSubmit={onSubmit}>
<div className='formControl'>
<label htmlFor="text">
    Text
</label>
<input type="text"  id='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter Text...'/>
</div>
<div className='formControl'>
<label htmlFor="amount">
    Amount<br/>
    (Negative-expense,Positive-Income)
</label>
<input type="number"  id='amount' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter Amount...'/>
</div>
<button className='btn'>Add Transaction</button>
</form>



    </div>
  )
}

export default AddTransaction