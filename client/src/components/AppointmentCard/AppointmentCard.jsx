import React, { useState } from 'react'
import './AppointmentCard.css'
import { useAuth0 } from '@auth0/auth0-react';
import { softDeleteCar } from '../../utils/api';
import { toast } from 'react-toastify';

const AppointmentCard = ({ name, date, profilePic, town, id, refetch}) => {

   const { user } = useAuth0();
  const [bookingId, setBookingId] = useState(null);

  const handleClick = async (id) => {
    if (user){
      await softDeleteCar(id);
      try {
        await softDeleteCar(id);
        toast.success("Deleted Successfully", { position: "bottom-right" });
        refetch()
      } catch (error) {
        toast.error("Failed to delete the car", { position: "bottom-right" });
      }
    }
        
        
      }

  return (
    <div className="appointment-card">
         <div className="profile-pic">
        <img src={profilePic} alt='Doctor' />
      </div>
      <div className="appointment-info">
        <h3 className="doctor-name">{name}</h3>
        <p className="appointment-town">{town}</p>
        <p className="appointment-time">{date}</p>
      </div>
       <div className="trash-icon" onClick={() => handleClick(id)}>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z"/>
          <path fill="currentColor" d="M3 6h18v2H3V6zm2 3h14v13H5V9zm2 2v9h10v-9H7zm8-7v2H9V4h6z"/>
        </svg>
     </div>
    
  </div>
  )
}

export default AppointmentCard