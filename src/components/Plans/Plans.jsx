import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import right_arrow from '../../assets/right_arrow.png'
import white_thick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="Plans" id="Plans">
        <div className="plans-container">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{gap: '2rem'}}>
                <span className='stroke-text'>Ready to Start</span>
                <span>Your Journey</span>
                <span className='stroke-text'>Now with us</span>
            </div>

            <div className="plans">
                {plansData.map((plan, index) => (

                    <div className="plan" key={index}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>R$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map ((feature, featureIndex) => (
                                <div className="feature" key={featureIndex}>
                                    <img src={white_thick} alt="feature icon" />
                                    <span key={featureIndex}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benefits</span>
                            <img src={right_arrow} alt="" />
                        </div>
                        <button className='btn'>Join Now</button>
                    </div>

                    )
                )}
            </div>

        </div>
    </div>
  )
}

export default Plans