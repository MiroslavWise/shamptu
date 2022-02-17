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
                                {option.map((item, i)=>{
                                    return(
                                        <div onClick={() => setSelected(item)} key={i} className="dropdown-item">
                                        {item}
                                        </div>
                                    )
                                })}
                        </din>)}

        </div>
    )
}

export default DropDown