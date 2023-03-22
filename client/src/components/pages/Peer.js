import React, {useState } from 'react';
import './Peer.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons';

function Peer() {
    
  const [selectedOption, setSelectedOption] = useState('lend');
  const [date, setDate] = useState(new Date());

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="App">
      <Card style={{ width: '30rem', height: '43rem'}}>
        <span className="square bg-primary rounded-9"></span>
          <Card.Body>
          <Card.Title style={{ width: '25rem', height: '0.5rem', fontSize:'26px', margin:'5px'}}><FontAwesomeIcon icon={faHandHoldingUsd} />  Peer Lending</Card.Title>
          <Card.Text style={{padding:'100px', fontSize:'18px'}}>
          <div className="option-selector" style={{position:'relative', bottom:'60px'}}>
        
        <label>
          <input
            type="radio"
            name="option"
            value="lend"
            checked={selectedOption === 'lend'}
            onChange={handleOptionChange}
          />
          Lend
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="borrow"
            checked={selectedOption === 'borrow'}
            onChange={handleOptionChange}
          />
          Borrow
        </label>
      </div>
      <div className="label-container" style={{position:'relative', right:'135px', bottom:'70px'}}>
        {selectedOption === 'lend' ? (
          <div className="label lend" style={{fontFamily:'cursive', height:'40px'}}>
            {/* <h2 style={{position:'relative', bottom:'15px', fontSize:'25px'}}>Lend Money</h2> */}
            <form>
              <label htmlFor="To" style={{position:'relative', bottom:'18px'}}>To:</label>
              <input
                 type="text"
                 id="name"
                 name='name'
                 style={{position:'relative', bottom:'18px'}}
               />
              <label htmlFor="amount" style={{position:'relative', bottom:'18px'}}>Amount:</label>
              <input type="number" id="amount" name="amount" style={{position:'relative', bottom:'18px'}}/>
              <label htmlFor="interest" style={{position:'relative', bottom:'18px'}}>Interest Rate:</label>
              <input type="number" id="interest" name="interest" style={{position:'relative', bottom:'18px'}}/>
              <div class="two-col" style={{position:'relative', bottom:'18px'}}>
                <div class="col1">
                <label htmlFor="date">Lent Time:</label>
                    <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat=" yyyy/MM/dd hh:mm aa"
                        
                    />
                </div>

                <div class="col2">
                <label htmlFor="date" >Due Date:</label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat=" yyyy/MM/dd hh:mm aa"
              />
                </div>
            </div>
              
              
              <label htmlFor="total" style={{position:'relative', bottom:'18px'}}>Total:</label>
              <input type="number" id="Total" name="Total" style={{position:'relative', bottom:'18px'}}/>
              <button type="submit" style={{backgroundColor:'purple', fontWeight:'bold', color:'white', position:'relative',  borderRadius:'5px'}}>Lend Money</button>
            </form>
          </div>
        ) : (
          <div className="label borrow" style={{fontFamily:'cursive', height:'40px'}}>
            {/* <h2 style={{position:'relative', bottom:'15px', fontSize:'25px'}}>Borrow Money</h2> */}
            <form>
                <label htmlFor="From" style={{position:'relative', bottom:'18px'}}>From:</label>
                <input
                 type="text"
                 id="name"
                 name='name'
                 style={{position:'relative', bottom:'18px'}}
               />
              <label htmlFor="amount" style={{position:'relative', bottom:'18px'}}>Amount:</label>
              <input type="number" id="amount" name="amount" style={{position:'relative', bottom:'18px'}}/>
              <label htmlFor="interest" style={{position:'relative', bottom:'18px'}}>Interest Rate:</label>
              <input type="number" id="interest" name="interest" style={{position:'relative', bottom:'18px'}}/>
              <div class="two-col" style={{position:'relative', bottom:'18px'}}>
                <div class="col1">
                <label htmlFor="date" >Borrowed on:</label>
                    <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat=" yyyy/MM/dd hh:mm aa"
                    />
                </div>

                <div class="col2">
                <label htmlFor="date" >Due Date:</label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat=" yyyy/MM/dd hh:mm aa"
              />
                </div>
            </div>
              
              <label htmlFor="total" style={{position:'relative', bottom:'18px'}}>Total:</label>
              <input type="number" id="Total" name="Total" style={{position:'relative', bottom:'18px'}}/>
              <button type="submit" style={{backgroundColor:'purple', fontWeight:'bold', color:'white', position:'relative',  borderRadius:'5px'}}>Borrow Money</button>
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

export default Peer;
