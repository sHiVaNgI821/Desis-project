import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import React, {useContext} from 'react';
import "./TransactionHistoryCard.css"
import { UserContext } from '../../contexts/UserContext';
import {format, differenceInCalendarDays} from 'date-fns';

function getAmount(amount, interest, date, dueDate) {
  const diff = differenceInCalendarDays(new Date(dueDate), new Date(date));
  const num_months = diff / 30.0;
  const amt = amount * Math.pow(1 + interest / 100.0, num_months);
  return amt;
}


function DuesCardElement(props) {
  const { date, from, amount, dueDate, interest} = props;
  const {userInfo, setUserInfo} = useContext(UserContext)
  const date_format = format(new Date(dueDate), 'dd/MM/yyyy');
  const amt = getAmount(amount, interest, date, dueDate);

  return (
    <div className='d-flex justify-content-between align-items-center'>
    <div>
      <p className='para3'>Due on: {date_format} </p>
      <p className='para5'>You owe {from} </p>
    </div>
    <p className='para4'>{amt}</p>
  </div>
    
  );
}

function DuesCard({dues}) {

  return (
    <div>
    
         {dues?.length > 0 ? (dues?.map((transaction) => (
        <DuesCardElement
          key={transaction._id}
          date={transaction.date}
          from ={(transaction.from_username)[0].username}
          amount={transaction.amount}
          dueDate = {transaction.dueDate}
          interest = {transaction.interest}
        />))):"No upcoming payments at the moment"
      }
        </div>

  );
}

    //   {/* <ListGroup>
    //     <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
    //       <div className="ms-2 me-auto">
    //         <div className="fw-bold">Due: Tomorrow</div>
    //         You owe to Srushti Parbat
    //       </div>
    //       <Badge bg="primary">Rs. 500</Badge>
    //     </ListGroup.Item>
    //     <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
    //       <div className="ms-2 me-auto">
    //         <div className="fw-bold">Due: 20-03-2023</div>
    //         You owe to Vishal Gupta
    //       </div>
    //       <Badge bg="primary" >Rs. 1000</Badge>
    //     </ListGroup.Item>
    //     <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
    //       <div className="ms-2 me-auto">
    //         <div className="fw-bold">Due: 24-03-2023</div>
    //         You owe to Shivangi Nayak
    //       </div>
    //       <Badge style={{ backgroundColor: 'purple' }}> Rs. 100 </Badge>
    //     </ListGroup.Item>
    //     <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
    //       <div className="ms-2 me-auto">
    //         <div className="fw-bold">Due: 06-04-2023</div>
    //         You owe to Dada
    //       </div>
    //       <Badge style={{ backgroundColor: 'purple' }}> Rs. 1000 </Badge>
    //     </ListGroup.Item>
    //   </ListGroup>
    // </div> */}
export default DuesCard;