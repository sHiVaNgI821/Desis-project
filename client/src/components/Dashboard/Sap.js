import React from 'react';
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
    return(
        <div classname="container">
            <Container>
                <div classname>
                <Row>
                    <Col > 
                        <Card style={{ width: '18rem', height: '5rem'}}>
                        <span className="square bg-primary rounded-9"></span>
                            <Card.Body>
                            <Card.Title style={{ width: '15rem', height: '0.5rem'}}>Balance: <FontAwesomeIcon icon={faMoneyBill} />  Rs. 5000</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col > 
                        <Card style={{ width: '18rem', height: '5rem' }}>
                            <Card.Body>
                            <Card.Title style={{ width: '15rem', height: '0.5rem', fontSize:'20px'}}>Credit: <FontAwesomeIcon icon={faCreditCard} />  9</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card style={{ width: '18rem', height: '5rem' }}>
                            <Card.Body>
                            <Card.Title style={{ width: '15rem', height: '0.5rem'}}>Debit: <FontAwesomeIcon icon={faMoneyBillTransfer} />  8</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
                </div>
                <div classname>
                <Row>
                <Col >
                        <Card style={{ width: '41rem', position:'absolute', top:'95px' }}>
                        
                            <Card.Body>
                            <Card.Title>Monthly Expenditure</Card.Title>
                            <BarGraph/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card style={{ width: '25rem', position:'absolute', top:'95px'}}>
                            <Card.Body>
                            <Card.Title>Account Details</Card.Title>
                              {/* <Card.Subtitle classname="mb-2 text-muted">
                                 <p>Total money in wallet: Rs. 6000</p>
                                </Card.Subtitle> 
                                <Card.Text>
                                    <p>Current Month Limit: Rs. 3000</p>
                                    <p>Total used up till date: Rs. 1500</p>
                                    <p>Balance for this month: Rs. 1500</p>

                                </Card.Text>    */}
                                <Details/>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                
                    <Col >
                        <Card style={{ width: '41rem', height: '18rem', position:'relative', top:'400px'}}>
                            <Card.Body>
                            <Card.Title>Sectors</Card.Title>
                            <Pipi/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card style={{ width: '25rem', height: '18rem', position:'relative', top:'400px' }}>
                            <Card.Body>
                            <Card.Title>Upcoming Transactions</Card.Title>
                            {/* <ListGroup variant="flush">
                                {transactions.map((transaction, index) => (
                                <ListGroup.Item key={index}>
                                    {transaction.date}: {transaction.description} - ${transaction.amount}
                                </ListGroup.Item>
                            ))}
                            </ListGroup> */}
                            <TransactionHistoryCard/>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>
                </div>
            </Container>
          </div>  
        
        
    )
}


export default Sap