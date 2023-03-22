import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function Details() {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        variant="success"
        as="li"
        className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Total money in wallet  : 
          </div>
        </div>
        <Badge bg="primary">
        Rs. 6000
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        variant="primary"
        as="li"
        className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Current Month Limit  :</div>
        </div>
        <Badge bg="primary" >
          Rs. 3000
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        variant="primary"
        as="li"
        className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Total used up till date  :
            </div>
        </div>
        <Badge style={{ backgroundColor: 'purple' }}>
          Rs. 1500
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        variant="danger"
        as="li"
        className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Balance for this month  :
            </div>
        </div>
        <Badge style={{ backgroundColor: 'purple' }}>
          Rs. 1500
        </Badge>
      </ListGroup.Item>
    </ListGroup>
    
    
  );
}
export default Details;