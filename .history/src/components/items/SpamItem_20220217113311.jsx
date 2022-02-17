import Button from 'HOC/Button'
import './style.css'

const ShamItem = ({image}) => {
    return (
        <div className="container">
           
            <div className='image-line'>
                <div className='image'>
                    <img src={image}/>
                </div>
            </div>
            <p className='text'>Шампунь</p>
            <p className='text_about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>

    )
}

export default ShamItem