
import styled from 'styled-components';
import { Balance } from './Components/Balance';
import { HistoryList } from './Components/HistoryList';
import { Transaction } from './Components/Transaction';
import {BudgetProvider} from './utils/ContextProvider'

// #region STYLES
const AppContent = styled.section`
  --color-text: #58596F;
  --color-green: #00b33c;
  --color-red: #f00;

  box-sizing: border-box;
  max-width: 400px;
  width: 95%;
  margin: 0 auto;
  padding: 50px 0;
  color: var(--color-text);
  font-family: 'Roboto Condensed', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

const AppTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 20px;
  text-align: center;
`;
// #endregion


export const App = () => {

  return (
    <BudgetProvider >
      <AppContent>
        <AppTitle>Budget Tracker</AppTitle>
        <Balance />
        <Transaction />
        <HistoryList />
      </AppContent>
    </BudgetProvider>
  );
}

