import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { HistoryItem } from './HistoryItem';
import { BudgetContext } from '../utils/ContextProvider';

// #region STYLES

const HistoryTitle = styled.h2`
  margin: 0;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
  transition: all 1s easy-in;

    &:hover{
      text-decoration: underline var(--color-green);
      color: var(--color-green);
    }
`
const HistoryContent = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin: 0 0 20px;
  padding: 0;
  text-align: end;
`

// #endregion

export const HistoryList = () => {
  const [historyVisible, setHistoryVisible] = useState(true);
  const { transactions } = useContext(BudgetContext);

  
  return (Object.keys(transactions).length >0 &&<>
      <HistoryTitle onClick={() => setHistoryVisible(!historyVisible)}>
        {historyVisible ? 'Hide history' : 'Show history'}
      </HistoryTitle>

      {historyVisible && <HistoryContent>
        {transactions.map(transaction => (
          <HistoryItem key={transaction.id} name={transaction.name} amount={transaction.amount} id={transaction.id}/>
        ))}
      </HistoryContent>}
    </>
  )
}

