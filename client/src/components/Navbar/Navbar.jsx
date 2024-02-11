import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import './Navbar.css'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileMenu from '../ProfileMenu/ProfileMenu';

const Navbar = () => {

  const {loginWithRedirect, isAuthenticated, user, logout} = useAuth0();
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if(latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  })

  return (
    <div className={`n-wrapper ${navStyle}`}>

        {/* Desktop Version */}
        <div className="container">
            <div className="n-container">
                {/* Left side */}
                <div className="n-logo">
                  <NavLink to='/'>
                    <span>MEDIVISIT</span>
                    </NavLink>
                </div>

                {/* Right side */}
                <div className="n-right">
                    <div className="n-menu">
                       <Link to='wwd-wrapper' spy={true} smooth={true}>
                       <span>What we do</span>
                       </Link>
                       <Link to='hiw-wrapper' spy={true} smooth={true} offset={100}>
                       <span>How it works</span>
                       </Link>
                       <Link to='og-wrapper' spy={true} smooth={true}>
                       <span>Our Goal</span>
                       </Link>
                       <Link to='t-wrapper' spy={true} smooth={true} offset={100}>
                       <span>Testimonials</span>
                       </Link>
                    </div>
                    {
                      !isAuthenticated ?
                    <div className="fund-button cursor-pointer" onClick={loginWithRedirect}>
                        Login
                    </div> : <ProfileMenu user={user} logout={logout}/>
                    }
                </div>
            </div>
        </div>

         {/* Mobile/Tablet version */}
         <div className="nm-container">
            {/* Logo */}
            <NavLink to="/">
            <span>MEDIVISIT</span>
            </NavLink>

            {/* menu icon */}
             {
                !mobileMenuOpened ?
             <BiMenuAltRight size={30} 
               onClick={() => setMobileMenuOpened(true)}
             /> : 
             <RxCross2 size={30}
                onClick={() => setMobileMenuOpened(false)}
             />
            }
            {/* Mobile Menu */} 
            <div className="nm-menu"
              style={{transform: mobileMenuOpened && "translateX(0%)"}}
            >
              <Link onClick={() => setMobileMenuOpened(false)} to='wwd-wrapper' spy={true} smooth={true}>
                <span>What we do</span>
              </Link>
              <Link onClick={() => setMobileMenuOpened(false)} to='hiw-wrapper' spy={true} smooth={true} offset={100}>
                <span>How it works</span>
                </Link>
                <Link onClick={() => setMobileMenuOpened(false)} to='og-wrapper' spy={true} smooth={true}>
                <span>Our Goal</span>
                </Link>
                <Link onClick={() => setMobileMenuOpened(false)} to='t-wrapper' spy={true} smooth={true} offset={100}>
                <span>Testimonials</span>
                </Link>
                {
                      !isAuthenticated ?
                    <div className="m-funded-button" onClick={loginWithRedirect}>
                        Login
                    </div> : <div onClick={logout}>{user?.email}</div>
                    }
            </div>

         </div>

    </div>
  )
}

export default Navbar