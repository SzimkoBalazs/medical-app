import React, {useState} from 'react';
import './BookingPage.css'; // Make sure to create this CSS file
import useTowns from '../../hooks/useTowns';
import useDoctors from '../../hooks/useDoctors';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes } from 'date-fns';
import useBookingsForADoctor from '../../hooks/useBookingsForADoctor';

const BookingPage = () => {

  const { data, isError, isLoading, refetch } = useTowns();
  const [selectedTown, setSelectedTown] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDateAndTime, setSelectedDateAndTime] = useState(new Date());

  console.log(selectedDateAndTime);
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
  console.log(doctorBookingsData);

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

  return (
    <div className='h-screen'>
    <Select options={options} onChange={handleTownChange} placeholder={"Select a town"}/>
   
    <Select options={doctorOptions} onChange={handleDoctorChange} isDisabled={!selectedTown || isLoadingDoctors} placeholder={"Select a doctor"}/>

      <DatePicker
      showTimeSelect
      selected={selectedDateAndTime}
      onChange={(date) => setSelectedDateAndTime(date)}
      timeClassName={handleColor}
      minTime={setHours(setMinutes(new Date(), 0), 7)} 
      maxTime={setHours(setMinutes(new Date(), 0), 14)} 
      dateFormat="MMMM d, yyyy h:mm aa"
      disabled={!selectedDoctor}
    /> 
    </div>
  );
};

export default BookingPage;