
import { useState } from 'react'
import './style.css'
import DropDown from './DropDown'


const ShamItem = ({image}) => {
    const [selected, setSelected] = useState('Цвет')

    const [prise, setPrise] = useState(200)

    useEffect(() => {
      return () => {
        effect
      };
    }, [fieldset])
    return (
        <div className="container">
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
                                <input type="radio" id="contactChoice1"
                                    name="contact" value={100} checked/>
                                <label for="contactChoice1">100 мл</label>
                                <input type="radio" id="contactChoice2"
                                    name="contact" value={200}/>
                                <label for="contactChoice2">200 мл</label>
                                <input type="radio" id="contactChoice3"
                                    name="contact" value={300}/>
                                <label for="contactChoice3">300 мл</label>
                        </fieldset>
                </form>
                <div className='footer'>
                    <div className='quantity'></div>
                    <div className='button'><button className='button-pay' onClick={()=>alert('Спасибо за покупку!')}>Купить</button></div>
                </div>
            </div>
        </div>

    )
}

export default ShamItem