import React from 'react'
import './Reasons.css'
import image_1  from '../../assets/image1.png'
import image_2  from '../../assets/image2.png'
import image_3  from '../../assets/image3.png'
import image_4  from '../../assets/image4.png'
import tick  from '../../assets/tick.png'
import nike from '../../assets/nike.png'
import new_balance from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'

const Reasons = () => {
    const reasonsList = [
        'over 140+ expert coachs',
        'train smarter and faster than berfore',
        '1 free program for new member',
        'reliable partners'
    ]
  return (
    <div className="Reasons" id="Reasons">
        <div className="left-r">
            <img src={image_1} alt="" />
            <img src={image_2} alt="" />
            <img src={image_3} alt="" />
            <img src={image_4} alt="" />
        </div>
        <div className="right-r">
            <span>Some reasons</span>
            <div>
                <span className='stroke-text'>Why</span>
                <span> choose us?</span>
            </div>
            <div className='details-r'>
            {reasonsList.map ((reason, index) =>(
            <div key={index}>
                <img src={tick} alt=""/>
                <span>{reason}</span>
            </div>
            )
            )}
            </div>
            <span>Our partners</span>
            <div className='partners'>
                <img src={nike} alt="" />
                <img src={new_balance} alt="" />
                <img src={adidas} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Reasons