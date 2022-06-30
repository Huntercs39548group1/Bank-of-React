// src/components/Credits.js
import React from 'react';
import {Link} from 'react-router-dom';

const Credits = (props) => {
	let creditsView = () => {
    // console.log(props.creditData);
    const credits = props.creditData;
    return credits.map((credit) => {
      let date = credit.date.slice(0,10);
      return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
    }) 
  }

  return (
    <div>
      <h1>Credits</h1>

      {creditsView()}
      
      <Link to="/">Return to Home</Link>
    </div>
  )
}

export default Credits;