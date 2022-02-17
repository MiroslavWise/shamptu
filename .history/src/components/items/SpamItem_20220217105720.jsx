import './style.css'
import jpg from '../../picture/1.jpg'
const ShamItem = ({}) => {
    return (
        <div className="container">
            <div className='image-line'>
                <div className='image'>
                    <img src={jpg}/>
                </div>
            </div>
        </div>

    )
}

export default ShamItem