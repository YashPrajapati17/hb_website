import React from 'react'
import './newnav.css';

const Newnav = () => {
  return (
    <div className='new_nav'>
      <div className="nav_data">
        <div className="data">
            <p className="selectprovince">Select Your Province</p>
            <p className="province">Ontario</p>
            <p className="province">Alberta</p>
            <p className="province">Sasketchwan</p>
            <p className="province">British Columbia</p>
            <p className="province">Manitoba</p>
            <p className="province">Quebec</p>
        </div>
      </div>
    </div>
  )
}

export default Newnav
