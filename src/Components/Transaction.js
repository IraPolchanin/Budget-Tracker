import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { BudgetContext } from '../utils/ContextProvider'


// #region STYLES
const TransactionContent = styled.div`
  margin-bottom: 40px;
`
const TransactionTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
`
const TransactionForm = styled.form`
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  
  .formInput{
    margin-bottom: 18px;
    height: 30px;
    padding: 0 10px;
    font-size: 18px;  
  }

  .formBtn{
    margin-top: 20px;
    height: 35px;
    background-color: var(--color-green);
    border: 0;
    border-radius: 5px;
    font-weight: 700;
    font-size: 18px;
    color: #58596F;
    cursor: pointer;
    transition: all 1s ease-out;

    &:hover{
    transform: scale(1.05)
    }
  }
`
// #endregion

export const Transaction = () => {

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(BudgetContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: nanoid(4),
      name,
      amount: +amount
    };

    if (name.length > 0 && amount !== 0) {
      addTransaction(newTransaction);
      setName('');
      setAmount('');
    }
  }

  return (
    <TransactionContent>
      <TransactionTitle>Add Transaction</TransactionTitle>
      <TransactionForm onSubmit={handleSubmit}>
        <label className='formLabel' htmlFor="formName">Enter name of transaction:</label>
        <input
          placeholder='salary, scholarship, food, fuel, etc'
          className='formInput'
          type="text"
          id='formName'
          value={name}
          onChange={(e) => setName(e.target.value.trim())}
          required
        />

        <label className='formLabel' htmlFor="formLabel">Enter amount:</label>
        <input
        placeholder='0'
          className='formInput'
          type="number"
          id='formAmount'
          value={amount}
          onChange={(e) => {
          setAmount(e.target.value.trim())}}
          required
        />
        <button className='formBtn' type="submit">Add Transaction</button>
      </TransactionForm>
    </TransactionContent>
  )
}

