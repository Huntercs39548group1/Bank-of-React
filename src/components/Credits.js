// src/components/Credits.js
import React from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';


// class addCredit extends Comment{
//   constructor(){
//     super()
//     this.state = {
//       user: {
//         creditBalance: ''
//       },
//       redirect: false
//     }
//   }
//   handleChange = (e) => {
//     const updateBalance = {...this.state.user}
//     const inputBalance = e.target.value
//     this.setState({user: updateBalance})
//   }

//   handleSubmit = (e) => {
//     e.preventDefault()
//     this.props.mockLogin(this.state.user)
//     this.setState({redirect: true})
//   }
//   render(){
//     return(
//       <div>
//       <h1>Credits</h1>

//       <from onSubmit={this.handleSubmit}>
//         <div>
//           <label htmlFor="creditBalance">Enter credit</label>
//           <input type="creditBalance" name ="creditBalance"/>
//         </div>
//         <button>Add credit</button>
//       </from>
//       </div>
//     )
//   }
// }

const Credits = (props) => {
	let creditsView = () => {
    // console.log(props.creditData);
    const credits = props.creditData;
    return credits.map((credit) => {
      let date = credit.date.slice(0,10);
      return <li key={credit.id}>{date} {credit.description} {credit.amount} </li>
    }) 
  }
  //show balance
  let showBalance = () =>{
    
   // console.log(props.creditData);
   const credits = props.creditData;
   let total = 0;
   return credits.map((credit) => {
    total = total + credit.amount;
    return <div > {total}</div>
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
    {/* <AccountBalance accountBalance={this.props.accountBalance}/> */}
    </div>
    
  )
}

export default Credits;