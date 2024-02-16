import React from 'react'
import "./MyBookings.css"
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard'
import useBookingsForAUser from '../../hooks/useBookingsForAUser'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HelpCard from '../../components/HelpCard/HelpCard';

const MyBookings = () => {

 const { data: bookings, isLoading, isError, refetch } = useBookingsForAUser();

  // Optional: handle loading and error states
  if (isLoading) return <div>Loading bookings...</div>;
  if (isError) return <div>Error fetching bookings.</div>;

  console.log(bookings)

  // Convert ISO date string to a more human-readable format, e.g., '11:00 AM'
  const formatDateAndTime = (isoDateString) => {
    const date = new Date(isoDateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'numeric', day: 'numeric' }) + ', ' + 
           date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

   // Slider settings
   const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="mybookings-wrapper">
    <div className='my-bookings-container pt-[13rem]'>
        <div className='bookings-header'>
        <h1 className='bookings-title'>My Appointments</h1>
        <p className='bookings-description'>Here you can find all your upcoming appointments. Manage your schedule by keeping track of your bookings.</p>
      </div>
      {bookings && bookings.length > 0 ? (
        <Slider {...sliderSettings}>
          {bookings.map((booking) => (
            <div key={booking.id} className=''>
              <AppointmentCard
                name={booking.doctor.name}
                date={formatDateAndTime(booking.date)}
                profilePic='/doctor.png'
                town={booking.doctor.town.name}
                id={booking.id}
                refetch={refetch}
              />
            </div>
          ))}
        </Slider>
        
      ) : (
        <div>
             <p style={{ margin: '20px', padding: '5rem', fontSize: '18px', textAlign: 'center', color: '#555', background: '#f0f0f0', borderRadius: '8px' }} >You don't have any bookings yet..</p>
        </div>
      )}
      <HelpCard /> 
    </div>
</div>
  );
}

export default MyBookings