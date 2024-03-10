import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-e6iae7zh4pqxvgbq.us.auth0.com"
     clientId="JDglPh9YSkVy7iZ1uhCIgmbDJnt7MUFi"
     authorizationParams={{
       redirect_uri: "https://medivisit-app-new.vercel.app"
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
     <App />
    </Auth0Provider>
  </React.StrictMode>
)

//localhost:5173