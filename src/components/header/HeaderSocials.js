import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from "react-icons/fi"
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target="-black"><BsLinkedin /></a>
        <a href='https://github.com' target="-black"><FaGithub/></a>
        <a href='https://dribbel.com' target="-black"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials