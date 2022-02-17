import jpg from 'picture/1.jpg'
import png2 from 'picture/2.png'
import png3 from 'picture/3.png'

import './style.css'
import SpamItem from './items/SpamItem'
const Items = () => {
    return (
        <div className="big__container">
            <SpamItem image={jpg}/>
            <SpamItem image={png2}/>
            <SpamItem image={png3}/>
        </div>
    )
}

export default Items