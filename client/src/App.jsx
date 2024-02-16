import { Suspense, useState } from 'react';
import './index.css';
import Website from './pages/Website';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BookingPage from './pages/BookingPage/BookingPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import UserDetailContext from './context/UserDetailContext';
import MyBookings from './pages/MyBookings/MyBookings';
import BookingPageOld from './pages/BookingPageOld/BookingPageOld';




function App() {

  const [userDetails, setUserDetails] = useState({
    bookings: [],
    token: null,
  });

  const queryClient = new QueryClient();
  
 return (
  <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
  
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Website/>}/>
        <Route path='/booking' element={<BookingPage/>}/>
        <Route path='/myBookings' element={<MyBookings/>}/>
        <Route path='/trial' element={<BookingPageOld/>}/>
       </Route>
    </Routes>
    </Suspense>
  </BrowserRouter>
  <ToastContainer/>
  </QueryClientProvider>
  
  </UserDetailContext.Provider>
  
  )
}

export default App
