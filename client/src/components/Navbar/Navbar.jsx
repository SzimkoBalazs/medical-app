import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import './Navbar.css'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-scroll';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {loginWithRedirect, isAuthenticated, user, logout} = useAuth0();
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();


  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if(latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  })

    const toggleProfileMenu = () => {
    setProfileMenuVisible(!profileMenuVisible); // Toggle the profile menu visibility
  };

  const handleLogout = () => {
    setProfileMenuVisible(false); // Hide the profile menu on logout
    logout();
  };

  const handleMenuClick = (path) => {
    navigate(path);
    setMobileMenuOpened(false);
  };

  const handleLinkClick = (to) => {
    
    setMobileMenuOpened(false);
    
    
      navigate('/', { state: { scrollTo: to } });
    
  };

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
                       <span onClick={() => handleLinkClick('wwd-wrapper')}>What we do</span>
                       <span onClick={() => handleLinkClick('hiw-wrapper')}>How it works</span>
                       <span onClick={() => handleLinkClick('og-wrapper')}>Our Goal</span>
                       <span onClick={() => handleLinkClick('t-wrapper')}>Testimonials</span>
                    </div>
                    {
                      !isAuthenticated ?
                    <div className="fund-button cursor-pointer" onClick={loginWithRedirect}>
                        Login
                    </div> : <div className="avatar-container" >
                      <img src={user.picture} alt='Profile Avatar' className="avatar" onClick={toggleProfileMenu}/>
                      {profileMenuVisible && <ProfileMenu user={user} logout={handleLogout} setProfileMenuVisible={setProfileMenuVisible}/>}
                      <NavLink to='/booking'>
                      <div className="fund-button cursor-pointer">
                        Book
                    </div>
                    </NavLink>
                    </div>
                    }
                </div>
            </div>
        </div>

         {/* Mobile/Tablet version */}
         <div className="nm-container">
            {/* Logo */}
            
            <span onClick={() => handleMenuClick('/')}>MEDIVISIT</span>
            

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
                       <span onClick={() => handleLinkClick('wwd-wrapper')}>What we do</span>
                       <span onClick={() => handleLinkClick('hiw-wrapper')}>How it works</span>
                       <span onClick={() => handleLinkClick('og-wrapper')}>Our Goal</span>
                       <span onClick={() => handleLinkClick('t-wrapper')}>Testimonials</span>
                 {/* Conditional rendering based on authentication */}
          {isAuthenticated ? (
            <>
              {/* User info */}
              <div className="mobile-user-info">
                <img src={user.picture} alt="Profile" className="mobile-avatar" />
                
              </div>
              
              <div onClick={() => handleMenuClick('/myBookings')} className="mobile-menu-item">
                My Bookings
              </div>
             
             
              <div className="m-logout-button" onClick={handleLogout}>Logout</div>
              
            </>
          ) : (
            <div className="m-funded-button" onClick={loginWithRedirect}>
              Login
            </div>
          )}
            </div>

         </div>

    </div>
  )
}

export default Navbar