import './style.css'
import React from 'react'

const DropDown = () => {
    const [isActive, setIsActive] = React.setState(false)

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>Выбор</div>
           {
           isActive 
           && 
           ( <din className='dropdown-content'>
           <div className="dropdown-item">
               React
           </div>
           <div className="dropdown-item">
               React
           </div>
           <div className="dropdown-item">
               React
           </div>
       </din>)}

        </div>
    )
}

export default DropDown