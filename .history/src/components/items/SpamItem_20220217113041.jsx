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
        </div>

    )
}

export default ShamItem