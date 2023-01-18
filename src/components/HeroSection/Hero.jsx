import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image  from '../../assets/hero_image.png'
import hero_image_back  from '../../assets/hero_image_back.png'
import heart  from '../../assets/heart.png'
import calories  from '../../assets/calories.png'
import {motion} from 'framer-motion'

const Hero = () => {

  const transition ={type:'spring', duration: 3};
  const mobile = window.innerWidth <= 800 ? true : false;

  return (
    <div className="Hero" id="Hero">

        <div className="blur hero-blur"></div>

        <div className="left-h">

            <Header />

            {/* The best ad only */}
            <div className="the-best-ad">
                <motion.div
                    initial={{left: mobile ? '150px' : '190px'}}
                    whileInView={{left:'10px'}}
                    transition={{...transition, type: 'tween'}}
                ></motion.div>
                <span>Best than you can imagine</span>
            </div>
            {/* Hero heading */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>shape </span>
                    <span>your</span>
                </div>
                <div>
                    <span>ideal body</span>
                </div>
                <div>
                    <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>

            {/*figures*/}

            <div className="figures">
                <div>
                    <span>+ 140</span>
                    <span>personal trainers</span>
                </div>
                <div>
                    <span>+ 940</span>
                    <span>alunos inscritos</span>
                </div>
                <div>
                    <span>+ 50</span>
                    <span>programas fitness</span>
                </div>
            </div>

            <div className="hero-buttons">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>
        </div>
        <div className="right-h">

            <button className="btn">Join Now</button>

            <motion.div 
                className="heart-rate"
                transition={transition}
                initial={{right: '-1rem'}}
                whileInView={{right: '4rem'}}
            >
                <img src={heart} alt="coração" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>

        <img src={hero_image} alt="" className="hero-image"/>
        <motion.img 
            transition={transition} 
            initial={{right: '15rem'}} 
            whileInView={{right: '23rem'}}
            src={hero_image_back}
            className="hero-image-back"
        />

        <motion.div 
            transition={transition} 
            initial={{right: '11rem'}} 
            whileInView={{right: '30rem'}}            
            className="calories"
        >
            <img src={calories} alt="" />
            <div>
                <span>Calories Burned</span>
                <span>220 kcal</span>
            </div>
        </motion.div>

        </div>
    </div>
  )
}

export default Hero