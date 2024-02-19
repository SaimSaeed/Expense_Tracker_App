export default (state, action) => {
    // Switch statement for Reducer
    switch (action.type) {
        case "DELETE_TRANSACTION":
            return {
                // Using spread operator to spread state
                ...state,
                // Filtering transactions from state
                // The Condition is defining that if transaction id is not equal to the id of payload then filter those values
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case "ADD_TRANSACTION":
            return {
                // Simply spreading state and adding state in array 
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case "EDIT_TRANSACTION":
            // naming a variable with property of action
            const updatedTransaction = action.payload;
            // Then unsing a map function mapping the transacions and setting the condition
            // The condition states that transaction id should be equal to updated transaction id which is 
            // the id stored in the payload
            const updatedTransactions = state.transactions.map((transaction) => {
                if (transaction.id === updatedTransaction.id) {
                    // Returning the updatedtransaction
                    return updatedTransaction;
                }
                // Returning the transaction
                return transaction;
            });


            // Returning the value of edit function
            return {
                ...state,
                // Assigning the updatedTransactions value to transactions
                transactions: updatedTransactions
            }
        default:
            return state;
    }
}