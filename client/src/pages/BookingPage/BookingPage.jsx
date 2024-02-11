import React, {useState} from 'react';
import './BookingPage.css'; // Make sure to create this CSS file
import useTowns from '../../hooks/useTowns';
import useDoctors from '../../hooks/useDoctors';
import Select from 'react-select';

const BookingPage = () => {

  const { data, isError, isLoading, refetch } = useTowns();
  const [selectedTown, setSelectedTown] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const { data: doctorsData, isLoading: isLoadingDoctors } = useDoctors(selectedTown);

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

  console.log(selectedDoctor);

  const doctorOptions = doctorsData?.map(doctor => ({
    value: doctor.id,
    label: doctor.name
  })) || [];

  return (
    <div className='h-screen'>
    <Select options={options} onChange={handleTownChange}/>
    {selectedTown && !isLoadingDoctors && (
        <Select options={doctorOptions} onChange={handleDoctorChange} />
      )}
    </div>
  );
};

export default BookingPage;