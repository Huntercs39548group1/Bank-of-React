// src/components/Debits.js
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";
import { v1 as uuidv1 } from "uuid";
import { isArray } from "lodash";
import moment from "moment";

const Debits = ({ debitData, accountBalance, setState }) => {
    // Create the list of Debit items
    const [totalDebit, setTotalDebit] = useState([...debitData]);
    const [description, setDescription] = useState("");
    const [debitAmount, setDebitAmount] = useState("");

    let debitsView = () => {
        if (isArray(totalDebit)) {
            return totalDebit.map((debit) => {
                return (
                    <li key={debit.id}>
                        {" "}
                        {debit.amount} {debit.description}{" "}
                        {moment(debit.date).format("YYYY-MM-DD")}
                    </li>
                );
            });
        }
    };

    //Once Add Debit clicked send description and debitAmount to
    //Array.
    let handleSubmit = (e) => {
        e.preventDefault();
        const newObj = {
            id: uuidv1(),
            description: description,
            amount:
                Math.round((Number(debitAmount) + Number.EPSILON) * 100) / 100,
            date: moment(new Date()).format("YYYY-MM-DD"),
        };
        setTotalDebit([...totalDebit, newObj]);

        debitData.push(newObj);

        setDescription("");
        setDebitAmount("");
    };

    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        setState(totalDebit);
    }, [totalDebit, setState]);

    // Render the list of Debit items and a form to input new Debit item
    return (
        <div>
            <h1>Debits</h1>
            <div id="balance">
                <AccountBalance accountBalance={accountBalance} />
            </div>

            <div id="home">
                <Link to="/">Return to Home</Link>
            </div>

            <div id="content">{debitsView()}</div>

            <div id="value">
                <form onSubmit={handleSubmit}>
                    <div>
                        Description:
                        <input
                            type="description"
                            name="description"
                            required="required"
                            placeholder="Enter a description"
                            value={description}
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                        />
                    </div>

                    <div>
                        Debit:
                        <input
                            required="required"
                            type="number"
                            name="debits"
                            value={debitAmount}
                            onChange={(e) => setDebitAmount(e.target.value)}
                        />
                    </div>

                    <button>Add debit</button>
                </form>
            </div>
        </div>
    );
};

export default Debits;
