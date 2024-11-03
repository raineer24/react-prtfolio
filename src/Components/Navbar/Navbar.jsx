import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav.svg'

const Navbar = () => {
    const [menu, setMenu] = useState("home")
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li><p>Home</p>{menu==="home"? <img src={underline} alt='' />:<></>}</li>
            <li><p></p>About Me</li>
            <li><p></p>Services</li>
            <li><p></p>Portfolio</li>
            <li><p></p>Contact</li>
        </ul>
        <div className="nav-connect">Connect with Me</div>
    </div>
  )
}

export default Navbar