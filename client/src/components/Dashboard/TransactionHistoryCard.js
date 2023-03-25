import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';
import "./TransactionHistoryCard.css"


function DuesCard({history}) {

  return (
    <div>
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <p className='para3'>Due: Tomorrow</p>
            <p className='para5'>You owe to Srushti Parbat</p>
          </div>
          <p className='para4'>Rs. 500</p>
        </div>

        <div className='d-flex justify-content-between align-items-center'>
        <div>
            <p className='para3'>Due: 20-03-2023</p>
            <p className='para5'>You owe to Vishal Gupta</p>
          </div>
          <p className='para4'>Rs. 1000</p>
        </div>

        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <p className='para3'>Due: 24-03-2023</p>
            <p className='para5'>You owe to Shivangi Nayak</p>
          </div>
          <p className='para4'>Rs. 100</p>
        </div>

        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <p className='para3'>Due: 06-04-2023</p>
            <p className='para5'>You owe to Dada</p>
          </div>
          <p className='para4'>Rs. 1000</p>
        </div>
      {/* <ListGroup>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Due: Tomorrow</div>
            You owe to Srushti Parbat
          </div>
          <Badge bg="primary">Rs. 500</Badge>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Due: 20-03-2023</div>
            You owe to Vishal Gupta
          </div>
          <Badge bg="primary" >Rs. 1000</Badge>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Due: 24-03-2023</div>
            You owe to Shivangi Nayak
          </div>
          <Badge style={{ backgroundColor: 'purple' }}> Rs. 100 </Badge>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Due: 06-04-2023</div>
            You owe to Dada
          </div>
          <Badge style={{ backgroundColor: 'purple' }}> Rs. 1000 </Badge>
        </ListGroup.Item>
      </ListGroup> */}
    </div>
  );
}
export default DuesCard;