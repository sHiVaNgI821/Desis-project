import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function TransactionHistoryCard({history}) {
  return (
    <ListGroup style={{ width: '21rem', height: '12rem'}}>
      <ListGroup.Item
        variant="primary"
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Due: Tomorrow</div>
            You owe to Srushti Parbat
        </div>
        <Badge bg="primary">
          Rs. 500
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        variant="success"
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Due: 20-03-2023</div>
          You owe to Vishal Gupta
        </div>
        <Badge bg="primary" >
          Rs. 1000
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        variant="primary"
        as="li"
        className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Due: 24-03-2023</div>
          You owe to Shivangi Nayak
        </div>
        <Badge style={{ backgroundColor: 'purple' }}>
          Rs. 100
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        variant="success"
        as="li"
        className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Due: 06-04-2023</div>
          You owe to Dada
        </div>
        <Badge style={{ backgroundColor: 'purple' }}>
          Rs. 1000
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
}
export default TransactionHistoryCard;