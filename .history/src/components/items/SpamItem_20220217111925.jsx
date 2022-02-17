import Button from 'HOC/Button'
import './style.css'

const ShamItem = ({image}) => {
    return (
        <div className="container">
            <Button />
            <div className='image-line'>
                <div className='image'>
                    <img src={image}/>
                </div>
            </div>
        </div>

    )
}

export default ShamItem