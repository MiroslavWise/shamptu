import './style.css'
import { useState } from 'react'

const DropDown = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onMouseMove={()=> setIsActive(!isActive)}>Выбор</div>
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