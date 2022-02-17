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
                    <div className='colors'></div>
                    <div className='prise'>{prise}</div>
                </div>
                <div className='volume'></div>
                <div className='footer'>
                    <div className='quantity'></div>
                    <div className='button'></div>
                </div>
            </div>
        </div>

    )
}

export default ShamItem