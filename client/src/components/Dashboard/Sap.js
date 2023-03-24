// import React, { useEffect, useState, useContext } from "react";
// //import Button from 'react-bootstrap/Button';
// import Card from "react-bootstrap/Card";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMoneyBill,
//   faCreditCard,
//   faMoneyBillTransfer,
// } from "@fortawesome/free-solid-svg-icons";
// import "./Sap.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import BarGraph from "./BarGraph";
// import Pipi from "./Pipi";
// import TransactionHistoryCard from "./TransactionHistoryCard";
// import Details from "./Details";

// function Sap() {

//   return (
//     <div classname="container">
//       <Container>
//         <div classname>
//           <Row>
//             <Col>
//               {console.log(pieData)}
//               <Card style={{ width: "18rem", height: "5rem" }}>
//                 <span className="square bg-primary rounded-9"></span>
//                 <Card.Body>
//                   <Card.Title style={{ width: "15rem", height: "0.5rem" }}>
//                     Balance: <FontAwesomeIcon icon={faMoneyBill} />{" "}
//                     {balanceData?.balance}
//                   </Card.Title>
//                   <Card.Text></Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col>
//               <Card style={{ width: "18rem", height: "5rem" }}>
//                 <Card.Body>
//                   <Card.Title
//                     style={{
//                       width: "15rem",
//                       height: "0.5rem",
//                       fontSize: "20px",
//                     }}
//                   >
//                     Credit: <FontAwesomeIcon icon={faCreditCard} />{" "}
//                     {balanceData?.totalCred}
//                   </Card.Title>
//                   <Card.Text></Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col>
//               <Card style={{ width: "18rem", height: "5rem" }}>
//                 <Card.Body>
//                   <Card.Title style={{ width: "15rem", height: "0.5rem" }}>
//                     Debit: <FontAwesomeIcon icon={faMoneyBillTransfer} />{" "}
//                     {balanceData?.totalDebit}{" "}
//                   </Card.Title>
//                   <Card.Text></Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </div>
//         <div classname>
//           <Row>
//             <Col>
//               <Card
//                 style={{ width: "41rem", position: "absolute", top: "95px" }}
//               >
//                 <Card.Body>
//                   <Card.Title>Monthly Expenditure</Card.Title>
//                   <label>Choose a category for past analysis </label>
//                   <select
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                   >
//                     {bar_options.map((value) => (
//                       <option value={value} key={value}>
//                         {value}
//                       </option>
//                     ))}
//                   </select>
//                   <BarGraph data={previousData} />
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col>
//               <Card
//                 style={{ width: "25rem", position: "absolute", top: "95px" }}
//               >
//                 <Card.Body>
//                   <Card.Title>Account Details</Card.Title>
//                   {/* <Card.Subtitle classname="mb-2 text-muted">
//                                  <p>Total money in wallet: Rs. 6000</p>
//                                 </Card.Subtitle> 
//                                 <Card.Text>
//                                     <p>Current Month Limit: Rs. 3000</p>
//                                     <p>Total used up till date: Rs. 1500</p>
//                                     <p>Balance for this month: Rs. 1500</p>

//                                 </Card.Text>    */}
//                   <Details balance={balanceData} />
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//           <Row>
//             <Col>
//               <Card
//                 style={{
//                   width: "41rem",
//                   height: "18rem",
//                   position: "relative",
//                   top: "400px",
//                 }}
//               >
//                 <Card.Body>
//                   <Card.Title>Sectors</Card.Title>
//                   <Pipi pieData={pieData} />
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col>
//               <Card
//                 style={{
//                   width: "25rem",
//                   height: "18rem",
//                   position: "relative",
//                   top: "400px",
//                 }}
//               >
//                 <Card.Body>
//                   <Card.Title>Upcoming Transactions</Card.Title>
//                   {/* <ListGroup variant="flush">
//                                 {transactions.map((transaction, index) => (
//                                 <ListGroup.Item key={index}>
//                                     {transaction.date}: {transaction.description} - ${transaction.amount}
//                                 </ListGroup.Item>
//                             ))}
//                             </ListGroup> */}
//                   <TransactionHistoryCard dues={dues} />
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default Sap;


import React, {useState, useEffect} from 'react';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoneyBill, faCreditCard, faMoneyBillTransfer} from '@fortawesome/free-solid-svg-icons';
import "./Sap.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BarGraph from './BarGraph';
import Pipi from './Pipi';
import TransactionHistoryCard from './TransactionHistoryCard';
import Details from './Details';

function Sap(){
    const bar_options = [
        "Food",
        "Travel",
        "Shopping",
        "Medical",
        "Educational",
        "Peer Lending",
        "Miscellaneous",
        "Total",
      ];
      const [category, setCategory] = useState("Food");
      const [balanceData, setBalanceData] = useState();
      const [pieData, setPieData] = useState();
      const [history, setHistory] = useState();
      const [previousData, setPreviousData] = useState();
      const [dues, setDues] = useState();
      useEffect(() => {
        Promise.all([
          fetch("http://localhost:4000/getBalance", {
            credentials: "include",
          }),
          fetch("http://localhost:4000/getCurrentExpense", {
            credentials: "include",
          }),
    
          fetch("http://localhost:4000/getHistory", {
            credentials: "include",
          }),
          fetch("http://localhost:4000/getDues", {
            credentials: "include",
          }),
        ])
          .then(([resBalance, resPieData, resHistory, resDues]) =>
            Promise.all([
              resBalance.json(),
              resPieData.json(),
              resHistory.json(),
              resDues.json(),
            ])
          )
          .then(([dataBalance, dataPie, dataHistory, dataDues]) => {
            setBalanceData(dataBalance);
            setPieData(dataPie);
            setHistory(dataHistory);
            setDues(dataDues);
          });
      }, []);
    
      useEffect(() => {
        fetch(`http://localhost:4000/getMonthly/${category}`, {
          credentials: "include",
        })
          .then((resPreviousData) => resPreviousData.json())
          .then((dataPrevious) => setPreviousData(dataPrevious));
      }, [category]);
    
    return(
        <div className='sap'>
            <div className='part1'>
                <div className='card-type-1'> 
                    <h3 className='card1-heading'><FontAwesomeIcon icon={faMoneyBill}/>Balance : Rs.{balanceData?.balance}</h3>
                </div>
                <div className='card-type-1'> 
                    <h3 className='card1-heading'><FontAwesomeIcon icon={faCreditCard} /> Credit: Rs.{balanceData?.totalCred}</h3>
                </div>
                <div className='card-type-1'>
                    <h3 className='card1-heading'><FontAwesomeIcon icon={faMoneyBillTransfer} /> Debit: Rs.{balanceData?.totalDebit}</h3>
                </div>
            </div>
            <div className='d-flex'>
                <div className='card-type-2'>
                 
                  
                    <h3>Monthly Expenditure</h3>
                    <label>Choose a category for past analysis </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {bar_options.map((value) => (
                      <option value={value} key={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                    <BarGraph data={previousData} />
                </div>
                <div className='card-type-2'>
                    <h3>Account Details</h3>
                    <Details balance={balanceData} />
                </div>
            </div>
            <div className='d-flex'>
                <div className='card-type-3'>
                    <h3>Sectors</h3>
                    <Pipi pieData={pieData} />
                </div>
                <div className='card-type-3'>
                    <h3>Upcoming Payments</h3>
                    <TransactionHistoryCard dues={dues} />
                </div>
            </div>
          </div>
    )
}


export default Sap