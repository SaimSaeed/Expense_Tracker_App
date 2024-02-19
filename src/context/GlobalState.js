import React,{createContext,useReducer,useEffect} from 'react'
import AppReducer from "./AppReducer"
// Initial State 
const initialState = {
transactions:[]
}

// Initial State Function
// const  GetInitialState = ()=> {
//     const transactionData = localStorage.getItem('Transaction')
//     return transactionData ? JSON.parse(transactionData) : []
//   }
  
//   export const transactionProvider = props => {
//     const [transactionData, setTransactionData] = useState(getInitialState)
  
//     useEffect(() => {
//       localStorage.setItem('notes', JSON.stringify(transactionData))
//     })
//   }
  

// Creating Context
export const GlobalContext = createContext(initialState)

// Provider Component
export const GlobalProvider = ({children}) =>{
const [state,dispatch] = useReducer(AppReducer,[],(initial)=>JSON.parse(localStorage.getItem("State")) || initial);

useEffect(() => {
    
localStorage.setItem("State",JSON.stringify(state))
}, [state]);






// Actions
function deleteTransaction(id){
    dispatch({
        type:"DELETE_TRANSACTION",
        payload: id
    });
}

function addTransaction(transaction){
    dispatch({
        type:"ADD_TRANSACTION",
        payload: transaction
    });
}

function editTransaction(id,text,amount){
    dispatch({
        type:"EDIT_TRANSACTION",
        payload: {
            id:id,
            text:text,
            amount:+amount
        }
    });
}




return (
    <GlobalContext.Provider
    value={{
        state,
        dispatch,
        transactions:state.transactions,
        deleteTransaction,
        addTransaction,
        editTransaction
    }
    }
    >
        {children}
    </GlobalContext.Provider>
)
}