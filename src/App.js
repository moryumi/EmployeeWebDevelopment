import React from 'react';
import User from "./components/User";
import './App.css';

function App() {
  const ad="Hello ! Welcome to my page.";
  return (
    <div className="App">
      <h2>
        { 
      
           ad.toUpperCase()
           
        }
       <User/>
      </h2>
    </div>
  );
}

export default App;
