import React from 'react';
import User from "./components/User";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  
  return (
    <div className="container">
     
        <Navbar title="Welcome to Personel System" />
        <hr></hr>
       <User 
           name="Irem Isik" 
           department="IT"
           salary="5000 TL"
       />
       <User
          name="Yigit Er" 
          department="IT"
          salary="7000 TL"
       />

      <User
          name="Cigdem Akbulut" 
          department="Finance"
          salary="10.000 TL"
       />

       <User
          name="Busra Karausta" 
          department="Product"
          salary="3.250 TL"
       />
       <User
          name="Berati Capaal" 
          department="IT"
          salary="15.000 TL"
       />
      
    </div>
  );
}

export default App;
