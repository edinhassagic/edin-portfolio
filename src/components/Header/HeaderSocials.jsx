import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
const HeaderSocials = () => {
  return (
    <div className='header-socials'>
    <a href="https://www.linkedin.com/in/edin-hasagic-512729200/" target="_blank" rel="noreferrer" > <BsLinkedin/> </a>
    <a href="https://github.com/edinhassagic?tab=repositories" target="_blank" rel="noreferrer" > <FaGithub /> </a>
    
    </div>
  )
}

export default HeaderSocials