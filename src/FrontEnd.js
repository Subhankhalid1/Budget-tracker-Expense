import React, { useContext, useState } from 'react';
import { TransactionContext } from './transContext';


function Child() {
    let { transactions, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState('');

    
    const handleAddition = (event) => {
        event.preventDefault();
        if (Number(newAmount) === 0) {
            alert("Please enter correct value");
            return false;
        }

        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });
        
        setDesc('');
        setAmount('')
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income = income + transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    

    return (
        <div>
                
        <div className="container">
  
            <h1 className="text-center">Expense Tracker</h1>

            <h2>Your Remaining Balance <hr/> <b className="bal">${getIncome() + getExpense()}</b></h2>

            <div className="expense-container">
                <h3 className="income">INCOME <br /> ${getIncome()}</h3>
                <h3>EXPENSE <br /> ${getExpense()}</h3>
            </div>

            <h3>History</h3>
            <hr />

            <ul className="trnsaction-list">
                {transactions.map((transObj, ind) => {
                    return (<li key={ind}>
                        <span>{transObj.desc}</span>
                        <span>${transObj.amount}</span>
                        {/* <button className="dltBtn" onClick={()=>deleteTransaction(transactions.id)}>×</button> */}
                    </li>
                    )
                })}

            </ul>

            <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Description <br />
                    <input type="text" value={newDesc} placeholder="Description" onChange={(ev) => setDesc(ev.target.value)} required />
                </label>

                <br />
                <label>
                    
                    Enter Amount 
                    <input type="number" value={newAmount} placeholder="(Negative -expense, Positive +income)" onChange={(ev) => setAmount(ev.target.value)} required />
                </label>
                <br />
                <input className="addBtn" type="submit" value="Add Transaction" />
            </form>
        </div>
        </div>
    );
}

export default Child;