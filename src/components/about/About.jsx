import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'
import AboutSocials from './AboutSocials'
import CTA from './CTA'

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know </h5>
      <h2>About Me</h2>

      <AboutSocials />
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src= {ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <h2>Blockchain Engineer <h1 className = "name">Daniel Nakamoto </h1></h2>
          <br></br>
        {/* <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>5 Years</small>
          </article>

          <article className='about__card'>
          <FiUsers className='about__icon'/>            
          <h5>  Companies  </h5>
            <small>5 world wide</small>
          </article>

          <article className='about__card'>
            <BsFolderCheck className='about__icon'/>
            <h5>Projects</h5>
            <small>4 Completed</small>
          </article>
          </div> */}
          <p>
          An Enthusiastic Blockchain Developer, who develops and builds smart contracts, Dapps, NFTs and crytocurrency over 5 years. 
          Contributed to several DeFi and NFT projects, deployed the smart contract and created a minimized minting Dapp for the projects.
          I am a verocious consumer of knowledge in relation to what interests me. I have a perculiar cycle of learning and teaching.
          I want the world to feel my impact through blockchain development by contributing meaningfully to the world’s transition into Web3.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          <CTA/>
      </div>

      </div>
    </section>
  )
}

export default About