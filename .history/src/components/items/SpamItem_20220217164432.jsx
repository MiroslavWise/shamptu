
import { useState, useEffect } from 'react'
import './style.css'
import DropDown from './DropDown'


const ShamItem = ({image}) => {
    const [selected, setSelected] = useState('Цвет')

    const [prise, setPrise] = useState(200)
    const [total, setTotal] = useState(1)
    const [volume, setVolume] = useState(100)
    console.log(volume)
    return (
        <div className="container">
            <div></div>
            <div className='image-line'>
                <div className='image'>
                    <img src={image} alt='qwer'/>
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
                <form>
                        <fieldset>
                                <input className='radio' type="radio" id="contactChoice1"
                                    name="contact" value={volume} checked onClick={()=> setVolume(100)}/>
                                <label for="contactChoice1">100 мл</label>
                                <input className='radio' type="radio" id="contactChoice2"
                                    name="contact" value={200} onClick={()=> setVolume(200)}/>
                                <label for="contactChoice2">200 мл</label>
                                <input className='radio' type="radio" id="contactChoice3"
                                    name="contact" value={300} onClick={()=> setVolume(300)}/>
                                <label for="contactChoice3">300 мл</label>
                        </fieldset>
                </form>
                <div className='footer'>
                    <div className='quantity'>
                    <div class="input-group quantity_goods">
                        <input type="button" value="-" id="button_minus" onClick={()=> setTotal(total--)}/>
                        <input type="number" min={1} max={1000} id="num_count" name="quantity" value={total} title="Qty" disabled/>
                        <input type="button" value="+" id="button_plus" onClick={()=> setTotal(total++)}/>
                    </div>
                    </div>
                    <div className='button'><button className='button-pay' onClick={()=>alert('Спасибо за покупку!')}>Купить</button></div>
                </div>
            </div>
        </div>

    )
}

export default ShamItem