import React from 'react'
import './Settings.css'
import dp from '../../images/ProfilePicture.svg'



function Settings() {
  const years = [
    "B.Tech - First",
    "B.Tech - Second",
    "B.Tech - Third",
    "B.Tech - Fourth",
    "IDD - Fifth",
    "M.Tech",
    "PhD",
  ];
  return (
    <div className='settings'>
      {/* <h3>Settings</h3> */}
      <div className='d-flex align-items-center mb-3'>
        <img src={dp} className="dp"/>
        <div>
          <p className='text-dark mb-0 ms-3'>srushti@3</p>
          <p className='mb-1 ms-3'>Change profile photo</p>
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
