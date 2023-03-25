import React, {useState, useContext, useEffect} from 'react'
import './Settings.css'
import dp from '../../images/ProfilePicture.svg'
import { UserContext } from '../../contexts/UserContext';
const years = [
  "B.Tech - First",
  "B.Tech - Second",
  "B.Tech - Third",
  "B.Tech - Fourth",
  "IDD - Fifth",
  "M.Tech",
  "PhD",
];

function Settings() {
  const {userInfo, setUserInfo} = useContext(UserContext)
  const [name, setName] = useState('');
  const [college, setCollege ] = useState('');
  const [year, setYear] = useState(years[0]);
  const [limit, setLimit] = useState('');
  const [balance, setBalance] = useState('');

  useEffect(()=>{
    fetch("http://localhost:4000/getUserInfo", {
      credentials:"include",
    }).then((res)=>res.json()).then((userDoc)=>{
      setName(userDoc.name);
      setCollege(userDoc.college);
      setYear(userDoc.year);
      setLimit(userDoc.limit);
      setBalance(userDoc.balance);
    });   
  }, [])

  async function submit(ev){
    ev.preventDefault();
    const resp = await fetch("http://localhost:4000/updateInfo", {
      method: "PATCH",
      credentials:"include",
      body: JSON.stringify({ name, college, year, limit, balance}),
      headers: { "Content-Type": "application/json" },
    });
    if (resp.ok) {
      alert("Updated Successfully")
    }
  }
  return (
    <div className='settings'>
      {/* <h3>Settings</h3> */}
      <div className='d-flex align-items-center mb-3'>
        <img src={dp} className="dp"/>
        <div>
          <p className='text-dark mb-0 ms-3'>{userInfo?.username}</p>
        </div>
      </div>
      <form>
        <div>
          <label className='label2' htmlFor='name'>Name</label>
          <input type="text" name="name" id="name" className="form-control" value={"Srushti"}/>
        </div>
        <div>
          <label className='label2' htmlFor='un'>Username</label>
          <input type="text" name="un" id="un" className="form-control" value={"srushti@3"}/>
        </div>
        <div>
          <label className='label2' htmlFor='clg'>College</label>
          <input type="text" name="clg" id="clg" className="form-control" value={"IIT BHU"}/>
        </div>
        <div className="form-part">
            <label className='label2'>Choose an year of study </label>
            <select className="form-select" value={"B.Tech - Third"}>
              {years.map((value) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
        </div>
        <div>
          <label className='label2' htmlFor='limit'>Limit</label>
          <input type="number" name="limit" id="limit" className="form-control" value={"5000"}/>
        </div>
        <br /><br />

        <div className='buttons'>
          <button className='cancel-button'>Cancel</button>
          <button className='save-button'>Save changes</button>
        </div>
      </form>
    </div>
  )
}

export default Settings