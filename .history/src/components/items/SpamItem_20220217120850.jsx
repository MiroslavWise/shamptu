import Button from 'HOC/Button'
import { useState } from 'react'
import './style.css'

const ShamItem = ({image}) => {
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
                    <div className='colors'>
                        <div className='tab-color'>
                            <div>жёлтый</div>
                            <div>красный</div>
                            <div>синий</div>
                        </div>
                      
                    </div>
                    <div className='prise'>{prise}</div>
                </div>
                <div className='volume'></div>
                <input id='one' type={'radio'} value={100}/>
                <label for='one'><span></span>100</label>
                <input id='two' type={'radio'} value={200}/>
                <label for='two'><span></span>100</label>
                <input id='three' type={'radio'} value={300}/>
                <label for='three'><span></span>100</label>
                <div className='footer'>
                    <div className='quantity'><button>-</button><input type={'number'} min={0}></input><button>+</button></div>
                    <div className='button'></div>
                </div>
            </div>
        </div>

    )
}

export default ShamItem