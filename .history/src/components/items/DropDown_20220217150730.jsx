import './style.css'
import { useState } from 'react'

const DropDown = ({selected, setSelected}) => {
    const [isActive, setIsActive] = useState(false)
    const option = ['Красный', "Синий", "Зелёный"]
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onMouseOver={()=> setIsActive(!isActive)}>Выбор</div>
                            {
                            isActive 
                            && 
                            ( <din className='dropdown-content'>
                            <div onClick={() => setSelected(option)} className="dropdown-item">
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