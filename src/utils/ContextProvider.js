import React, { useReducer, createContext } from 'react';

const initialState = {
  transactions: []
}

export const BudgetContext = createContext(initialState);

export const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }

      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [...state.transactions, action.payload]
        }
      default:
        return state;
    }
  }, initialState);

  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION", payload: transaction
    })
  }

  return (
    <BudgetContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
      {children}
    </BudgetContext.Provider>
  )
}