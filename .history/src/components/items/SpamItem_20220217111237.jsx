import './style.css'


const ShamItem = ({image}) => {
    return (
        <div className="container">
            <div className='image-line'>
                <div className='image'>
                    <img src={image}/>
                </div>
            </div>
        </div>

    )
}

export default ShamItem