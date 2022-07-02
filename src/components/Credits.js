// src/components/Credits.js
import React, { useState, useEffect }from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';




const Credits = (props) => {
  const [creditTotal, setCreditTotal] = useState(props.creditData);
  const [description, changeDescription] = useState('');
  const [creditAmount, changecreditAmount] = useState();

	let creditsView = () => {
    // console.log(props.creditData);
    const credits = props.creditData;
    return credits.map((credit) => {
      let date = credit.date.slice(0,10);
      return <li key={credit.id}> {credit.amount} {credit.description} {date} </li>
    }) 
  }
  //show balance

  let handleSubmit = (e) =>{
    e.preventDefault()

    const newSet = {
      id: new Date(),
      description: description,
      amount: creditAmount,
      date: new Date(),
    }

    setCreditTotal(creditTotal?.push(newSet))
    // console.log(creditAmount);

  } 
  

    useEffect(() => {
      props.setState({creditData: [...props.creditData, creditTotal] })
    },[ creditTotal, props ])


    console.log(props.creditData);
  return (
    <div>
      <h1>Credits</h1>
      {creditsView()}

      {/*Form setted up*/}
      <form onSubmit={handleSubmit} >
      <div>Description:
      <input type="description" name="description"  
      onChange={(e) => changeDescription(e.target.value)} value = {description}
      />
      </div>

      <div>Credit:
      <input type="credits" name="amount"         
      onChange={(e) => changecreditAmount(e.target.value)} value = {creditAmount}
      />
      </div>

      <button>Add credit</button>
      </form>

    <div>      
    <Link to="/">Return to Home</Link>
    </div>

    <AccountBalance accountBalance={props.accountBalance}/>
    </div>
    
  )
}

export default Credits;