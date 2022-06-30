// src/components/Debits.js
import React from 'react';
import {Link} from 'react-router-dom';

const Debits = (props) => {
  // Create the list of Debit items
	let debitsView = () => {
    const debits = props.debitData;
    return debits.map((debit) => {
      let date = debit.date.slice(0,10);
      return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
    }) 
  }
  // Render the list of Debit items and a form to input new Debit item
  return (
    <div>
      <h1>Debits</h1>

      {debitsView()}

      <form onSubmit={props.addDebit}>
        <input type="text" name="description" />
        <input type="number" name="amount" />
        <button type="submit">Add Debit</button>
      </form>
      <div>      
        <Link to="/">Return to Home</Link>
      </div>
    </div>
  )
}

export default Debits;