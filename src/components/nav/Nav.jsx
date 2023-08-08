import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {CgBriefcase} from 'react-icons/cg'
import {RiServiceLine} from 'react-icons/ri'
import {TiContacts} from 'react-icons/ti'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className= {activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className= {activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#techskills" onClick={() => setActiveNav('#techskills')} className= {activeNav === '#techskills' ? 'active' : ''}><BiBook /></a>
      <a href="#softskills" onClick={() => setActiveNav('#softskills')} className= {activeNav === '#softskills' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className= {activeNav === '#portfolio' ? 'active' : ''}><CgBriefcase /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''}><TiContacts /></a>
    </nav>
  )
}

export default Nav