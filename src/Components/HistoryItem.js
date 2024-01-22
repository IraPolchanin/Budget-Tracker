import React, { useContext } from 'react';
import styled from 'styled-components';
import { BudgetContext } from '../utils/ContextProvider'

// #region STYLES
const HistoryItemContent = styled.li`
  width: 80%;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0 1px 8px #00000026;
  border-right: 3px solid ${props => props.$amount >= 0 ? '#5AAD5A' : '#f00'};

  &:hover > .delete-btn{
  opacity: 1;
  }

  .delete-btn {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-100%,-50%);
    height: 100%;
    padding: 2px 5px;
    border-radius: 5px;
    background-color: #e74c3c;
    border: 0;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    line-height: 20px;
    opacity: 0;
    transition: all 1s ease-out;
  }

  .text{
    margin: 0;
    padding: 0;
  }
`
// #endregion

export const HistoryItem = ({ name, amount, id }) => {
  const { deleteTransaction } = useContext(BudgetContext)
  const amountSign = amount > 0 ? '+' : '-';
  return (
    <HistoryItemContent $amount={amount}>
      <button
        className="delete-btn"
        onClick={() => {
        deleteTransaction(id)
        }}
      >
        x
      </button>

      <p className="text">{name}</p>
      
      <p className="text">{amountSign}$ {Math.abs(amount.toFixed(2))}</p>
    </HistoryItemContent>
  )
}
