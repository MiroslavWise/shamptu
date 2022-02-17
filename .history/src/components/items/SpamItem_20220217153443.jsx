
import { useState } from 'react'
import './style.css'
import DropDown from './DropDown'


const ShamItem = ({image}) => {
    const [selected, setSelected] = useState('Цвет')

    const [prise, setPrise] = useState(200)

    return (
        <div className="container">
            <div className='image-line'>
                <div className='image'>
                    <img src={image}/>
                </div>
            </div>
            <p className='text'>Шампунь</p>
            <p className='text_about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <div className='block-info'>
                <div className='col-pri'>
                    <DropDown selected={selected} setSelected={setSelected} />
                    <div className='prise'>{prise} р.</div>
                </div>
                <div className='volume'></div>
                <input type="radio" id="contactChoice1"
                    name="contact" value="number"/>
                <label for="contactChoice1">100</label>
                <input type="radio" id="contactChoice2"
                    name="contact" value="number"/>
                <label for="contactChoice2">200</label>
                <input type="radio" id="contactChoice3"
                    name="contact" value="number"/>
                <label for="contactChoice3">300</label>
                <div className='footer'>
                    <div className='quantity'></input></div>
                    <div className='button'><button onClick={()=>alert('Спасибо за покупку!')}>Купить</button></div>
                </div>
            </div>
        </div>

    )
}

export default ShamItem