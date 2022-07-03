// src/components/Credits.js
import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';
import { v1 as uuidv1 } from 'uuid';
import { isArray } from 'lodash';
import moment from 'moment';


const Credits = ({creditData, accountBalance, setState}) => {
  const [totalCredit, setTotalCredit] = useState([...creditData]);
  const [description, setDescription] = useState('');
  const [creditAmount, setCreditAmount] = useState('');
	console.log("totalCredit", totalCredit)
  let creditsView = () => {
    if (isArray(totalCredit)) {
      return totalCredit.map((credit) => {
        // console.log(credit);
        return <li key={credit.id}> {credit.amount} {credit.description} {moment(credit.date).format('YYYY-MM-DD')}</li>
        // console.log(credit);
      }) 
    }
  }

  // let showBalance = () =>{
  
  //  // console.log(props.creditData);
  //  const credits = creditData;
  //  let total = 0;
  //  return credits.map((credit) => {
  //   total = total + credit.amount;
  //   return <div> {total}</div>
  //  }) 

  // }

  //Once Add Credit clicked send description and creditAmount to 
  //Array. 
  let handleSubmit = (e) =>{
    e.preventDefault();
    const newObj = {
      id: uuidv1(),
      description: description,
      amount: creditAmount,
      date: moment(new Date()).format('YYYY-MM-DD'),
    }
    setTotalCredit([...totalCredit, newObj])
    setState(totalCredit);

    // Add new credit to array
    creditData.push(newObj);

    // Clear input fields after submit
    setDescription('');
    setCreditAmount('');
  }

  return (
    <div>
      <h1>Credits</h1>
      {creditsView()}

      <form onSubmit={handleSubmit} >
      <div>Description:
      <input type="description" name="description" value={description} onChange={(event) =>setDescription(event.target.value)} />
      </div>

      <div>Credit:
      <input type="credits" name="credits"
        value={creditAmount}     
        onChange={(e) => setCreditAmount(e.target.value)}
      />
      </div>

      <button>Add credit</button>
      </form>

    <div>      
    <Link to="/">Return to Home</Link>
    </div>

    <AccountBalance accountBalance={accountBalance}/>
    </div>
    
  )
}

export default Credits;