// src/components/Credits.js
import React from 'react';
import {Link} from 'react-router-dom';



const Credits = (props) => {
	let creditsView = () => {
    // console.log(props.creditData);
    const credits = props.creditData;
    return credits.map((credit) => {
      let date = credit.date.slice(0,10);
      return <li key={credit.id}>{date} {credit.description} {credit.amount} </li>
    }) 
  }
  // let handleChange = (e) =>{
  //   const updateBalance = {...this.credit.amount}
  //   this.setState({user: updateBalance})
  // }
  // let handleSubmit = (e) =>{
  //   e.preventDefault()
  //   const newBalance = {...this.state.Credits}
  //   newBalance.credits = updateBalance
  // }

  return (
    <div>
    <h1>Credits</h1>
    {creditsView()}

    <div>Description:
    <input type="description" name="description" />
    </div>

    <div>Credit:
    <input type="credits" name="credits" />
    </div>

    <button>Add credit</button>

  <div>      
  <Link to="/">Return to Home</Link>
  </div>

  </div>
    
  )
}

export default Credits;