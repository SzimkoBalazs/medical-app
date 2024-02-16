import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ProfileMenu.css';


const ProfileMenu = ({ user, logout, setProfileMenuVisible }) => {
  
  const navigate = useNavigate();
  
  const handleMenuClick = (path) => {
    navigate(path);
    setProfileMenuVisible(false);

  };

  return (
    <div className="profile-menu">
      
      <div className="user-info">
        <h3>{`Hello ${user.email}`}</h3>
        
      </div>
      <ul className="menu-items">
        <li onClick={() => handleMenuClick('/myBookings')}>My Bookings</li>
        </ul>
      <div className="m-logout-button" onClick={logout}>Logout</div>
    </div>
  );
};

export default ProfileMenu