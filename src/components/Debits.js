// src/components/Debits.js
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';
import { v1 as uuidv1 } from 'uuid';
import { isArray } from 'lodash';
import moment from 'moment';

const Debits = ({debitData, accountBalance, setState}) => {
  // Create the list of Debit items
  const [totalDebit, setTotalDebit] = useState([...debitData]);
  const [description, setDescription] = useState('');
  const [debitAmount, setDebitAmount] = useState(0);
  console.log("totalDebit", totalDebit)
	let debitsView = () => {
    if (isArray(totalDebit)) {
      return totalDebit.map((debit) => { 
        return <li key={debit.id}> {debit.amount} {debit.description} {moment(debit.date).format('YYYY-MM-DD')}</li>
      })
    } 
  }
  
  //Once Add Debit clicked send description and debitAmount to 
  //Array. 
  let handleSubmit = (e) =>{
    e.preventDefault();
    const newObj = {
      id: uuidv1(),
      description: description,
      amount: debitAmount,
      date: moment(new Date()).format('YYYY-MM-DD'),
    }
    setTotalDebit([...totalDebit, newObj])
    setState(totalDebit);
  }
  
  // Render the list of Debit items and a form to input new Debit item
  return (
    <div>
      <h1>Debits</h1>
      {debitsView()}

      <form onSubmit={handleSubmit}>
        <div>Description:</div>
        <input type="description" name="description" value={description}onChange={(event) =>setDescription(event.target.value)}/>
        <div>Amount:</div>
        <input type="debits" name="debits" value={debitAmount} onChange={(e) => setDebitAmount(e.target.value)}/>
        <button type="submit">Add Debit</button>
      </form>
      <br></br>
      <div>      
        <Link to="/">Return to Home</Link>
      </div>
      <br></br>
      <AccountBalance accountBalance={accountBalance} />
    </div>
  )
}

export default Debits;