
import { useState } from 'react'
import './style.css'
import { Menu, Dropdown, Button, message, Space, Tooltip, Radio } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'

const style = {
    background: 'linear-gradient(261.65deg, #EFBB37 -3.95%, #CF9E1F 109.44%)',

}

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
                <Radio.Group name="radiogroup" defaultValue={1}>
                    <Radio value={100} autoFocus style={style}>100</Radio>
                    <Radio value={200}>200</Radio>
                    <Radio value={300}>300</Radio>
                </Radio.Group>
                <div className='footer'>
                    <div className='quantity'><input type={'number'} min={1}></input></div>
                    <div className='button'><button>Bubble</button></div>
                </div>
            </div>
        </div>

    )
}

export default ShamItem