import React, {useState, useEffect} from 'react';
import './BookingPageOld.css'; // Make sure to create this CSS file
import useTowns from '../../hooks/useTowns';
import useDoctors from '../../hooks/useDoctors';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes } from 'date-fns';
import useBookingsForADoctor from '../../hooks/useBookingsForADoctor';
import { useAuth0 } from '@auth0/auth0-react';
import { getUser, createBooking } from '../../utils/api';
import { toast } from 'react-toastify';

const BookingPageOld = () => {

  const { user } = useAuth0();
  const { data, isError, isLoading, refetch } = useTowns();
  const [selectedTown, setSelectedTown] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [userId, setUserId] = useState(null);

  

  

  useEffect(() => {
    const fetchUserId = async () => {
      if (user?.email) {
        try {
          const userData = await getUser(user.email);
          setUserId(userData.id); 
          
          console.log(userData)
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserId();
  }, [user?.email]); 

console.log(userId)
  
  const { data: doctorsData, isLoading: isLoadingDoctors } = useDoctors(selectedTown);
  const { data: doctorBookingsData, isLoading: isLoadingdoctorBookingsData } = useBookingsForADoctor(selectedDoctor);

  if (isLoading || !data) {
    return <div>Loading...</div>; 
  }
 
  const options = data.map(town => ({
    value: town.id,
    label: town.name
  }));

  const handleTownChange = (selectedTownOption) => {
    setSelectedTown(selectedTownOption.value);
    setSelectedDoctor("");
    
  }

  
  const handleDoctorChange = (selectedDoctorOption) => {
    setSelectedDoctor(selectedDoctorOption.value);
  };

  console.log(selectedTown);
  console.log(selectedDoctor);
  console.log(selectedDate);
  console.log(selectedTime);
  

  const doctorOptions = doctorsData?.map(doctor => ({
    value: doctor.id,
    label: doctor.name
  })) || [];

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  const customTimes = [];
  for (let i = 7; i <= 14; i++) { // Loop from 7am to 2pm
    customTimes.push(setHours(setMinutes(new Date(), 0), i)); 
    customTimes.push(setHours(setMinutes(new Date(), 30), i)); 
  }
  console.log(customTimes)

  const bookingDates = doctorBookingsData ? doctorBookingsData.map(booking => booking.date) : [];
  console.log(bookingDates[0]);
  const dates = bookingDates.map(date => new Date(date));
  console.log(dates);

  const getExcludedDates = () => {
    if (!doctorBookingsData) return [];
  
    // Calculate the total number of slots per day based on your scheduling
    const totalSlotsPerDay = 15;
  
    // Create a map to count bookings per day
    const bookingCountPerDay = {};
  
    doctorBookingsData.forEach(booking => {
      const bookingDate = new Date(booking.date);
      // Create a simple date string to aggregate bookings by day
      const dateString = bookingDate.toISOString().split('T')[0];
      
      if (!bookingCountPerDay[dateString]) {
        bookingCountPerDay[dateString] = 1;
      } else {
        bookingCountPerDay[dateString]++;
      }
    });

    console.log("Booking count per day:", bookingCountPerDay);
  
    // Identify days where the booking count equals or exceeds the total slots available
    const fullyBookedDates = Object.keys(bookingCountPerDay).filter(dateString => bookingCountPerDay[dateString] >= totalSlotsPerDay).map(dateString => new Date(dateString));
  
    console.log("Fully booked dates:", fullyBookedDates);

    return fullyBookedDates;
  };

  const getExcludedTimes = () => {
    if (!selectedDate || !doctorBookingsData) return [];
  
    // Filter bookings for the selected date
    const bookedTimesForSelectedDate = doctorBookingsData.filter(booking => {
      const bookingDate = new Date(booking.date);
      return (
        bookingDate.getDate() === selectedDate.getDate() &&
        bookingDate.getMonth() === selectedDate.getMonth() &&
        bookingDate.getFullYear() === selectedDate.getFullYear()
      );
    });
    // Convert the booked dates to Date objects representing the times
  const excludedTimes = bookedTimesForSelectedDate.map(booking => {
    const bookingDate = new Date(booking.date);
    return setHours(setMinutes(new Date(), bookingDate.getMinutes()), bookingDate.getHours());
  });

  return excludedTimes;
};

const combineDateTime = (selectedDate, selectedTime) => {
  if (!selectedDate || !selectedTime) return null; // Make sure both dates are valid

  // Create a new Date object from the selectedDate to avoid mutating the original date
  let date = new Date(selectedDate);

  // Set hours and minutes from selectedTime
  date.setHours(selectedTime.getHours());
  date.setMinutes(selectedTime.getMinutes());
  date.setSeconds(0); // Optionally reset seconds to 0
  date.setMilliseconds(0); // Optionally reset milliseconds to 0

  return date;
};

// Usage
const selectedDateAndTime = combineDateTime(selectedDate, selectedTime);
console.log(selectedDateAndTime);

const handleBookAppointment = async () => {
  if (!selectedDoctor || !userId || !selectedDateAndTime) {
    toast.error('Missing information for booking');
    return; // Optionally, add more detailed error handling here
  }

 
  try {
    const booking = await createBooking({
      doctorId: selectedDoctor,
      userId: userId,
      date: selectedDateAndTime, // Convert to ISO string if required by your backend
    });
    toast.success("You have successfully booked you visit!")
    // Handle post-booking logic here (e.g., show a success message, clear the form, etc.)
  } catch (error) {
    toast.error('Booking failed:', error);
    // Handle errors (e.g., show error message)
  }
};

const handleDisabledSelectClick = (fieldName) => {
  toast.error(`Please select a ${fieldName} first.`);
};

const handleDisabledDatePickerClick = (fieldName) => {
  toast.error(`Please select a ${fieldName} first.`);
};


  return (
    <div className='h-screen'>
      <Select options={options} onChange={handleTownChange} placeholder={"Select a town"}/>
     <div onClick={() => !selectedTown && handleDisabledSelectClick('town')}>
      <Select options={doctorOptions} onChange={handleDoctorChange}  placeholder={"Select a doctor"}/>
     </div>
     <div onClick={() => !selectedDoctor && handleDisabledDatePickerClick('doctor')}>
      <DatePicker
      selected={selectedDoctor ? selectedDate : ""}
      onChange={(date) => setSelectedDate(date)}
      timeClassName={handleColor}
      minDate={new Date()}
      dateFormat="dd/MM/yyy"
      
      excludeDates={getExcludedDates()}
      placeholderText='Select a date'
    /> 
    </div>
    <DatePicker
      showTimeSelect
      showTimeSelectOnly
      selected={selectedTime}
      onChange={(date) => setSelectedTime(date)}
      excludeTimes={getExcludedTimes()}
      minTime={setHours(setMinutes(new Date(), 0), 7)} 
      maxTime={setHours(setMinutes(new Date(), 0), 14)} 
      dateFormat="h:mm aa"
      
      placeholderText='Select an hour'
    /> 

    <button onClick={handleBookAppointment}>Book</button>
    </div>
  );
};

export default BookingPageOld;