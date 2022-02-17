import './style.css'
import { useState } from 'react'

const DropDown = ({selected, setSelected}) => {
    const [isActive, setIsActive] = useState(false)
    const option = ['Красный', "Синий", "Зелёный"]
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onMouseEnter={()=> setIsActive(true)} onMouseOut={()=> setIsActive(false)} >{selected}</div>
                            {
                            isActive 
                            && 
                            ( <din className='dropdown-content'>
                                {option.map((item, i)=>{
                                    return(
                                        <div onClick={() => {
                                            setSelected(item)
                                            setIsActive(false)
                                        }
                                        } key={i} className="dropdown-item" >
                                        {item}
                                        </div>
                                    )
                                })}
                        </din>)}

        </div>
    )
}

export default DropDown
//onMouseLeave={()=> setIsActive(false)}