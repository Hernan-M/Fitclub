import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import right_arrow from '../../assets/right_arrow.png'

const Programs = () => {
  return (
    <div className="Programs" id="Programs">
        <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>To Shape You</span>
        </div>

        <div className="programs-categories">
            {programsData.map ((program, index) =>(
                <div className="category" key={index}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={right_arrow} alt="seta para a direita" />
                    </div>
                </div>
            )   
            )}
        </div>

    </div>
  )
}

export default Programs