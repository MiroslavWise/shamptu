
import { useState } from 'react'
import './style.css'
import { Menu, Dropdown, Button, message, Space, Tooltip, Radio } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'

function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }
  
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
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
                    <Radio value={100} autoFocus>100</Radio>
                    <Radio value={200}>200</Radio>
                    <Radio value={300}>300</Radio>
                </Radio.Group>
                <div className='footer'>
                    <div className='quantity'><button>-</button><input type={'number'} min={1}></input><button>+</button></div>
                    <div className='button'></div>
                </div>
            </div>
        </div>

    )
}

export default ShamItem