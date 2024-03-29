import React, {useContext, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { useAuth0 } from '@auth0/auth0-react'
import UserDetailContext from '../../context/UserDetailContext'
import { useMutation } from 'react-query'
import { createUser } from '../../utils/api'
import { scroller } from 'react-scroll'
import { useNavigate } from 'react-router-dom'

const Layout = () => {

    const { isAuthenticated, user, getAccessTokenWithPopup} = useAuth0();
    const { setUserDetails } = useContext(UserDetailContext);
    const location = useLocation();
    const navigate = useNavigate();
  
    const { mutate } = useMutation({
      mutationKey: [user?.email],
      mutationFn: (token) => createUser(user?.email, token),
    });

    useEffect(() => {
      // If navigated from another page and there's a scrollTo state
      if (location.state?.scrollTo) {
        // Use react-scroll to scroll to the element
        scroller.scrollTo(location.state.scrollTo, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
        navigate(location.pathname, { replace: true }); 
      }
    }, [location]);
  
    useEffect(() => {
     
      const getTokenAndRegister = async () => {
        try {
          console.log("I have run");
    
          const res = await getAccessTokenWithPopup({
            authorizationParams: {
              audience: "http://localhost:8000",
              scope: "openid profile email",
            },
          });
    
          console.log("I have run too");
          console.log("Access Token:", res);
    
          localStorage.setItem("access_token", res);
          setUserDetails((prev) => ({ ...prev, token: res }));
          
          mutate(res)
        } catch (error) {
          console.error("Error while getting access token:", error);
          // Handle the error, you might want to show a message to the user or redirect them to a login page.
        }
      };
      
  
      isAuthenticated && getTokenAndRegister();
    }, [isAuthenticated]);


  return (
    <>
    <div>
        <Navbar/>
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout