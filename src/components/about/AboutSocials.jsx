import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'

const AboutSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/daniel-nakamoto/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/dazhlord" target="_blank"><BsGithub /></a>
        <a href="https://telegram.org/" target="_blank"><BsTelegram /></a>
    </div>
  )
}

export default AboutSocials