import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>DazhLord</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#techskills'>TechSkills</a></li>
        <li><a href='#softskills'>SoftSkills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      {/* <div className="footer__socials">
        <a href='https://facebook.com'><FaFacebookF /></a>
        <a href='https://instagram.com'><RiInstagramFill /></a>
        <a href='https://twitter.com'><AiOutlineTwitter /></a>
      </div> */}
      
      <div className="footer__copyright">
        <small>&copy; Daniel Nakamoto. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer