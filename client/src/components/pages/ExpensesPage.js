import React, { useState } from "react";
import "./ExpensesPage.css";
import { Navigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

function ExpensesPage() {
  const expense_options = [
    "Food",
    "Medical",
    "Educational",
    "Travel",
    "Shopping",
    "Other",
  ];
  const income_options = [
    "Home", 
    "Stipend", 
    "Scholarship", 
    "Award",
    "Other"
  ]
  const [amount, setAmount] = useState();
  const [to, setTo] = useState();
  const [category, setCategory] = useState(expense_options[0]);
  const [redirect, setRedirect] = useState(false);
  const [from, setFrom] = useState();
  const [selectedOption, setSelectedOption] = useState("Expense");
  const [date, setDate] = useState(new Date());

  async function submitExpense(ev) {
    ev.preventDefault();
    const resp = await fetch("http://localhost:4000/addExpense", {
      method: "POST",
      credentials:"include",
      body: JSON.stringify({ amount, to, date, category }),
      headers: { "Content-Type": "application/json" },
    });
    if (resp.ok) {
      setRedirect(true);
    }
  }

  async function submitIncome(ev) {
    ev.preventDefault();
    const resp = await fetch("http://localhost:4000/addIncome", {
      method: "POST",
      credentials:"include",
      body: JSON.stringify({ amount, from, date, category }),
      headers: { "Content-Type": "application/json" },
    });
    if (resp.ok) {
      setRedirect(true);
    }
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  if (redirect) {
    return <Navigate to={"/homepage"} />;
  }
  return (
    <div className="expenses">
      <div>
        <span className="square bg-primary rounded-9"></span>
          <h3><FontAwesomeIcon icon={faWallet} /> Money Manager</h3>
            <div className="option-selector">
              <label>Expense</label>
              <input type="radio" name="option" value="Expense" checked={selectedOption === "Expense"} onChange={handleOptionChange}/>
              <label>Income</label>
              <input type="radio" name="option" value="Income" checked={selectedOption === "Income"} onChange={handleOptionChange}/>
            </div>

            <div className="label-container">
              {selectedOption === "Expense" ? (
                <div className="label Expense">
                  <h2>Add Expense</h2>
                  <form onSubmit={submitExpense}>
                    <label htmlFor="Title">Paid to</label>
                    <input type="text" id="name" name="name" value = {to} onChange = {(e) => setTo(e.target.value)}/>

                    <label htmlFor="amount"> Amount </label>
                    <input type="number" id="amount" name="amount" value= {amount} onChange = {(e) => setAmount(e.target.value)}/>

                    <label htmlFor="date"> Date of Transaction </label>
                    <DatePicker selected={date} value={date} onChange={(e) => setDate(e.target.value)} showTimeSelect timeFormat="HH:mm" timeIntervals={15} dateFormat=" yyyy/MM/dd      hh:mm aa"/>
                    <div>
                      <div>
                        <label htmlFor="category" value={category} onChange={(e) => setCategory(e.target.value)}>Category</label>
                      </div>

                      <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        {expense_options.map((value) => (
                          <option value={value} key={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button type="submit">Add Expense</button>
                  </form>
                </div>
              ) : (
                <div className="label Income">
                  <h2> Add Income </h2>
                  <form onSubmit={submitIncome}>
                    <label  htmlFor="Title"> Received from </label>
                    <input type="text" id="name" name="name" value = {from} onChange = {(e) => setFrom(e.target.value)} />
                    <label htmlFor="amount">Amount:</label>
                    <input type="number" id="amount" name="amount" value = {amount} onChange = {(e)=> setAmount(e.target.value)}/>
                    <label htmlFor="date">Date of Transaction</label>
                    <DatePicker selected={date}  value ={date} onChange={(e) => setDate(e.target.value)} showTimeSelect timeFormat="HH:mm" timeIntervals={15} dateFormat=" yyyy/MM/dd      hh:mm aa"/>
                    <div>
                      <div>
                        <label htmlFor="category">Category</label>
                      </div>
                      <select
                        id="category"value = {category}onChange = {(e)=>setCategory(e.target.value)}>
                         {income_options.map((value) => (
                          <option value={value} key={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button type="submit"> Add Income </button>
                  </form>
                </div>
              )}
            </div>
      </div>
    </div>
  );
}

export default ExpensesPage;
