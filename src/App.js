// src/App.js

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

// Import other components
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/Login";
import Credits from "./components/Credits";
import Debits from "./components/Debits";

class App extends Component {
    constructor() {
        // Create and initialize state
        super();
        this.state = {
            accountBalance: 1234567.89,
            currentUser: {
                userName: "Joe Smith",
                memberSince: "11/22/99",
            },
            creditData: [],
            debitData: [],
            creditAmount: 0,
            debitAmount: 0,
        };
    }

    // Update state's currentUser (userName) after "Log In" button is clicked
    mockLogIn = (logInInfo) => {
        const newUser = { ...this.state.currentUser };
        newUser.userName = logInInfo.userName;
        this.setState({ currentUser: newUser });
    };

    sendCredit = (newCredit) => {
        if (newCredit && newCredit.length > 0) {
            let item = newCredit[newCredit.length - 1];

            this.setState((prevState) => {
                // return {...prevState, accountBalance : Number(item.amount) + prevState.accountBalance}
                return {
                    prevState,
                    accountBalance: (
                        Number(prevState.accountBalance) + Number(item.amount)
                    ).toFixed(2),
                };
            });
        }
    };

    sendDebit = (newDebit) => {
        if (newDebit && newDebit.length > 0) {
            let item = newDebit[newDebit.length - 1];

            this.setState((prevState) => {
                // return {...prevState, accountBalance : Number(item.amount) + prevState.accountBalance}
                return {
                    prevState,
                    accountBalance: Number(
                        prevState.accountBalance - Number(item.amount)
                    ).toFixed(2),
                };
            });
        }
    };

    //Make API call to get credit data
    async componentDidMount() {
        let linkToCreditData = "https://moj-api.herokuapp.com/credits";
        let linkToDebitData = "https://moj-api.herokuapp.com/debits";

        try {
            let responseForCredit = await axios.get(linkToCreditData);
            let responseForDebit = await axios.get(linkToDebitData);
            console.log(responseForCredit);
            for (let i = 0; i < responseForCredit.data.length; i++) {
                this.state.creditData.push(responseForCredit.data[i]);
                this.state.creditAmount += responseForCredit.data[i].amount;
            }
            console.log(responseForDebit);
            for (let i = 0; i < responseForDebit.data.length; i++) {
                this.state.debitData.push(responseForDebit.data[i]);
                this.state.debitAmount += responseForDebit.data[i].amount;
            }
            this.setState({
                accountBalance: (
                    this.state.creditAmount - this.state.debitAmount
                ).toFixed(2),
            });
        } catch (error) {
            if (error.responseForCredit) {
                console.log(error.responseForCredit.data);
                console.log(error.responseForCredit.status);
            }
            if (error.responseForDebit) {
                console.log(error.responseForDebit.data);
                console.log(error.responseForDebit.status);
            }
        }
    }

    // Create Routes and React elements to be rendered using React components
    render() {
        // Create React elements
        const HomeComponent = () => (
            <Home accountBalance={this.state.accountBalance} />
        );
        const UserProfileComponent = () => (
            <UserProfile
                userName={this.state.currentUser.userName}
                memberSince={this.state.currentUser.memberSince}
            />
        );
        const LogInComponent = () => (
            <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />
        ); // Pass props to "LogIn" component

        const CreditsComponent = () => (
            <Credits
                creditData={this.state.creditData}
                accountBalance={this.state.accountBalance}
                setState={this.sendCredit}
            />
        );

        const DebitsComponent = () => (
            <Debits
                debitData={this.state.debitData}
                accountBalance={this.state.accountBalance}
                setState={this.sendDebit}
            />
        );
        // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
        return (
            <Router basename="/BANK-OF-REACT/">
                <div>
                    <Route exact path="/" render={HomeComponent} />
                    <Route
                        exact
                        path="/userProfile"
                        render={UserProfileComponent}
                    />
                    <Route exact path="/login" render={LogInComponent} />
                    <Route exact path="/credits" render={CreditsComponent} />
                    <Route exact path="/debits" render={DebitsComponent} />
                </div>
            </Router>
        );
    }
}

export default App;
