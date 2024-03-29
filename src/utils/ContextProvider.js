import React, { useReducer, createContext, useEffect } from 'react';

const initialState = {
  //transactions: []
  transactions: JSON.parse(localStorage.getItem('transactions')) || []
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

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
  }, [state.transactions]);

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