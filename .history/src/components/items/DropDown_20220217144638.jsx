import './style.css'
import {setState} from 'react'

const DropDown = () => {
    const [isActive, setIsaktive] = setState(false)

    return (
        <div className="dropdown">
            <div className="dropdown-btn">Выбор</div>
            <din className='dropdown-content'>
                <div className="dropdown-item">
                    React
                </div>
                <div className="dropdown-item">
                    React
                </div>
                <div className="dropdown-item">
                    React
                </div>
            </din>
        </div>
    )
}

export default DropDown