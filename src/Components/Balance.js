import React, { useContext } from 'react';
import styled from 'styled-components';
import { BudgetContext } from '../utils/ContextProvider';

// #region STYLES
const BalanceContent = styled.div`
  margin-bottom: 32px;
`
const BalanceTitle = styled.h2`
  margin: 0 0 20px;
  font-size: 24px;
  font-weight: 400;
`
const BalanceResults = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  border-radius: 3px;
  box-shadow: 0 1px 8px #00000026;
`
const BalanceResult = styled.div`
  text-transform: uppercase;

  .income-count{
    color: var(--color-green);
  }
  .expense-count{
    color: var(--color-red);
  }
`
const Devider = styled.div`
  border: 1px solid var(--color-text);
  border-radius: 2px;
  height: auto;
`
// #endregion

export const Balance = () => {
const { transactions } = useContext(BudgetContext);
// console.log(transactions.map(el=>el.amount))
const incomeSum = transactions.filter(transaction => transaction.amount>0).reduce((a,b) => a+b.amount, 0)
const expenseSum = transactions.filter(transaction => transaction.amount<0).reduce((a,b) => a+b.amount, 0)

  return (
    <BalanceContent>
      <BalanceTitle>Your balance $ {(incomeSum + expenseSum).toFixed(2)}</BalanceTitle>
      <BalanceResults>
        <BalanceResult> INCOME <span className='income-count'>$ {incomeSum.toFixed(2)}</span></BalanceResult>
        <Devider />
        <BalanceResult> EXPENSE <span className='expense-count'>$ {expenseSum.toFixed(2)} </span></BalanceResult>
      </BalanceResults>
    </BalanceContent>
  )
}

