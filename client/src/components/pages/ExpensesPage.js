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
    <div className="App">
      <Card style={{ width: "30rem", height: "43rem" }}>
        <span className="square bg-primary rounded-9"></span>
        <Card.Body>
          <Card.Title
            style={{ width: "25rem", height: "0.5rem", fontSize: "26px" }}
          >
            <FontAwesomeIcon icon={faWallet} /> Money Manager
          </Card.Title>
          <Card.Text style={{ padding: "100px", fontSize: "18px" }}>
            <div
              className="option-selector"
              style={{ position: "relative", bottom: "60px" }}
            >
              <label>
                <input
                  type="radio"
                  name="option"
                  value="Expense"
                  checked={selectedOption === "Expense"}
                  onChange={handleOptionChange}
                />
                Expense
              </label>
              <label>
                <input
                  type="radio"
                  name="option"
                  value="Income"
                  checked={selectedOption === "Income"}
                  onChange={handleOptionChange}
                />
                Income
              </label>
            </div>
            <div
              className="label-container"
              style={{ position: "relative", right: "135px", bottom: "70px" }}
            >
              {selectedOption === "Expense" ? (
                <div
                  className="label Expense"
                  style={{ fontFamily: "cursive", height: "40px" }}
                >
                  <h2
                    style={{
                      position: "relative",
                      bottom: "15px",
                      fontSize: "25px",
                    }}
                  >
                    {" "}
                    Add Expense
                  </h2>
                  <form onSubmit={submitExpense}>
                    <label
                      htmlFor="Title"
                      style={{ position: "relative", top: "15px" }}
                    >
                      Paid to
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value = {to}
                      onChange = {(e) => setTo(e.target.value)}
                      style={{ position: "relative", top: "15px" }}
                    />
                    <label
                      htmlFor="amount"
                      style={{ position: "relative", top: "15px" }}
                    >
                      Amount
                    </label>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      style={{ position: "relative", top: "15px" }}
                      value= {amount}
                      onChange = {(e) => setAmount(e.target.value)}
                    />

                    <label
                      htmlFor="date"
                      style={{ position: "relative", top: "15px" }}
                    >
                      Date of Transaction
                    </label>
                    <DatePicker
                      selected={date}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      dateFormat=" yyyy/MM/dd      hh:mm aa"
                    />
                    <div>
                      <div>
                        <label
                          htmlFor="category"
                          style={{ position: "relative", top: "15px" }}
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          Category
                        </label>
                      </div>

                      <select
                        id="category"
                        style={{
                          position: "relative",
                          top: "15px",
                          borderRadius: "5px",
                        }}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        {expense_options.map((value) => (
                          <option value={value} key={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                      {/* <select id="category" style={{position:'relative', top:'15px', borderRadius:'5px'}}>
                 <option value="food">Food</option>
                 <option value="shopping">Shopping</option>
                 <option value="travel">Travel</option>
                 <option value="medical">Medical</option>
                 <option value="others">Others</option>
               </select> */}
                    </div>
                    <button
                      type="submit"
                      style={{
                        backgroundColor: "purple",
                        fontWeight: "bold",
                        color: "white",
                        position: "relative",
                        top: "60px",
                        borderRadius: "5px",
                      }}
                    >
                      Add Expense
                    </button>
                  </form>
                </div>
              ) : (
                <div
                  className="label Income"
                  style={{ fontFamily: "cursive", height: "40px" }}
                >
                  <h2
                    style={{
                      position: "relative",
                      bottom: "15px",
                      fontSize: "25px",
                    }}
                  >
                    Add Income
                  </h2>
                  <form onSubmit={submitIncome}>
                    <label
                      htmlFor="Title"
                      style={{ position: "relative", top: "15px" }}
                    >
                      Received from
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value = {from}
                      onChange = {(e) => setFrom(e.target.value)}
                      style={{ position: "relative", top: "15px" }}
                    />
                    <label
                      htmlFor="amount"
                      style={{ position: "relative", top: "15px" }}
                    >
                      Amount:
                    </label>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      style={{ position: "relative", top: "15px" }}
                      value = {amount}
                      onChange = {(e)=> setAmount(e.target.value)}
                    />

                    <label
                      htmlFor="date"
                      style={{ position: "relative", top: "15px" }}
                    >
                      Date of Transaction
                    </label>
                    <DatePicker
                      selected={date}
                      value ={date}
                      onChange={(e) => setDate(e.target.value)}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      dateFormat=" yyyy/MM/dd      hh:mm aa"
                    />
                    <div>
                      <div>
                        <label
                          htmlFor="category"
                          style={{ position: "relative", top: "15px" }}
                        >
                          Category
                        </label>
                      </div>
                      <select
                        id="category"
                        style={{
                          position: "relative",
                          top: "15px",
                          borderRadius: "5px",
                        }}
                        value = {category}
                        onChange = {(e)=>setCategory(e.target.value)}
                      >
                         {income_options.map((value) => (
                          <option value={value} key={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="submit"
                      style={{
                        backgroundColor: "purple",
                        fontWeight: "bold",
                        color: "white",
                        position: "relative",
                        top: "60px",
                        borderRadius: "5px",
                      }}
                    >
                      Add Income
                    </button>
                  </form>
                </div>
              )}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ExpensesPage;
