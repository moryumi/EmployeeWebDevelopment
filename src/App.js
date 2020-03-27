import React from 'react';
import User from "./components/User";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  
  return (
    <div className="container">
     
        
        <Navbar title="Sayfaya hosgeldiniz" />
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
          name="Yigit Er" 
          department="IT"
          salary="7000 TL"
       />
       <User
          name="Yigit Er" 
          department="IT"
          salary="7000 TL"
       />
       <User
          name="Yigit Er" 
          department="IT"
          salary="7000 TL"
       />
       <User
          name="Yigit Er" 
          department="IT"
          salary="7000 TL"
       />
       <User
          name="Yigit Er" 
          department="IT"
          salary="7000 TL"
       />
       <User
          name="Yigit Er" 
          department="IT"
          salary="7000 TL"
       />
     
     
    </div>
  );
}

export default App;
