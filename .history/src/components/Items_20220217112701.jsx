import jpg from 'picture/1.jpg'

import './style.css'
import SpamItem from './items/SpamItem'
const Items = () => {
    return (
        <div className="big__container">
            <SpamItem image={jpg}/>
            <SpamItem image={jpg}/>
            <SpamItem image={jpg}/>
        </div>
    )
}

export default Items