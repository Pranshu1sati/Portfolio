import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Pranshu Sati</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/pranshu-sati-167ba7238/">LinkedIn</a>
        <a href="https://github.com/Pranshu1sati">Github</a>
        <a href="codepenn">Codepenn</a>
      </div>
      <div className="footer_copyright">
        <small>&copy;Pranshu Sati</small>
      </div>
    </footer>
  )
}

export default Footer