import React from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import { useState } from 'react'
import left_arrow from '../../assets/leftArrow.png'
import right_arrow from '../../assets/right_arrow.png'
import {motion} from 'framer-motion'

const Testimonials = () => {

    const transition ={type:'spring', duration: 3}
    const [selected, setSelected] = useState(0);
    const testimonialsLenght = testimonialsData.length;

  return (
    <div className="Testimonials" id="Testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span>
                <span style={{color: 'var(--orange'}}>{testimonialsData[selected].name}</span>
                {' - '}{testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">

        <motion.div
            initial={{opactity: 0, x: -100}}
            whileInView={{opacity: 1, x:0}}
            transition={{...transition, duration: 2}}
        ></motion.div>
        <motion.div
            initial={{opactity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{...transition, duration: 2}}
        ></motion.div>

        <motion.img 
        initial={{opacity:0, x:100}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0 , x: -100}}
        transition={{...transition, duration: 2}}
        key={selected}
        src={testimonialsData[selected].image} 
        alt="" 
        />

        <div className="arrows">
            <img 
            onClick={() => {
                selected === 0 ? setSelected(testimonialsLenght - 1) : setSelected((prev) => prev-1);
            }}
            src={left_arrow} alt="" 
            />
            
            <img 
            onClick={() => {
                selected === testimonialsLenght - 1 ? setSelected(0) : setSelected((next) => next + 1);
            }}
            src={right_arrow} alt="" 
            />
        </div>
        </div>
    </div>
  )
}

export default Testimonials