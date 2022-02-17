import './style.css'
import {setState} from 'react'

const DropDown = () => {
    const [isActive, setIsActive] = setState(false)

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={setIsActive(!isActive)}>Выбор</div>
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