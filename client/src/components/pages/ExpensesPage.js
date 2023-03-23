import React, {useState } from 'react';
import './ExpensesPage.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWallet} from '@fortawesome/free-solid-svg-icons';

function ExpensesPage() {
    
  const [selectedOption, setSelectedOption] = useState('Expense');
  const [date, setDate] = useState(new Date());

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="App">
      <Card style={{ width: '30rem', height: '43rem'}}>
        <span className="square bg-primary rounded-9"></span>
          <Card.Body>
          <Card.Title style={{ width: '25rem', height: '0.5rem', fontSize:'26px'}}><FontAwesomeIcon icon={faWallet} />  Money Manager</Card.Title>
          <Card.Text style={{padding:'100px', fontSize:'18px'}}>
          <div className="option-selector" style={{position:'relative', bottom:'60px'}}>
        
        <label >
          <input
            type="radio"
            name="option"
            value="Expense"
            checked={selectedOption === 'Expense'}
            onChange={handleOptionChange}
          />
          Expense
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="Income"
            checked={selectedOption === 'Income'}
            onChange={handleOptionChange}
          />
          Income
        </label>
      </div>
      <div className="label-container" style={{position:'relative', right:'135px', bottom:'70px'}}>
        {selectedOption === 'Expense' ? (
          <div className="label Expense" style={{fontFamily:'cursive', height:'40px'}}>
            <h2 style={{position:'relative', bottom:'15px', fontSize:'25px'}}> Add Expense</h2>
            <form>
              <label htmlFor="Title" style={{position:'relative', top:'15px'}}>Title:</label>
              <input
                 type="text"
                 id="name"
                 name='name'
                 style={{position:'relative', top:'15px'}}
               />
              <label htmlFor="amount" style={{position:'relative', top:'15px'}}>Amount:</label>
              <input type="number" id="amount" name="amount" style={{position:'relative', top:'15px'}}/>
              
              <label htmlFor="date" style={{position:'relative', top:'15px'}}>Date and Time</label>
              <DatePicker 
                selected={date}
                onChange={(date) => setDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat=" yyyy/MM/dd      hh:mm aa"
                
              />
              <div>
               <div><label htmlFor="category" style={{position:'relative', top:'15px'}}>Category</label></div>
               <select id="category" style={{position:'relative', top:'15px', borderRadius:'5px'}}>
                 <option value="food">Food</option>
                 <option value="shopping">Shopping</option>
                 <option value="travel">Travel</option>
                 <option value="medical">Medical</option>
                 <option value="others">Others</option>
               </select>
               </div>
              <button type="submit" style={{backgroundColor:'purple', fontWeight:'bold', color:'white', position:'relative', top:'60px', borderRadius:'5px'}}>Add Expense</button>
            </form>
          </div>
        ) : (
          <div className="label Income" style={{fontFamily:'cursive', height:'40px'}}>
            <h2 style={{position:'relative', bottom:'15px', fontSize:'25px'}}>Add Income</h2>
            <form>
              <label htmlFor="Title" style={{position:'relative', top:'15px'}}>Title:</label>
              <input
                 type="text"
                 id="name"
                 name='name'
                 style={{position:'relative', top:'15px'}}
               />
              <label htmlFor="amount" style={{position:'relative', top:'15px'}}>Amount:</label>
              <input type="number" id="amount" name="amount" style={{position:'relative', top:'15px'}}/>
              
              <label htmlFor="date" style={{position:'relative', top:'15px'}}>Date and Time</label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat=" yyyy/MM/dd      hh:mm aa"
                
              />
              <div>
               <div><label htmlFor="category" style={{position:'relative', top:'15px'}}>Category</label></div>
               <select id="category" style={{position:'relative', top:'15px', borderRadius:'5px'}}>
                 <option value="Home">Home</option>
                 <option value="Awards">Awards</option>
                 <option value="Salary">Salary</option>
                 <option value="Others">Others</option>
               </select>
               </div>
              <button type="submit" style={{backgroundColor:'purple', fontWeight:'bold', color:'white', position:'relative', top:'60px', borderRadius:'5px'}}>Add Income</button>
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