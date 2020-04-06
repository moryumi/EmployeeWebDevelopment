

import Navbar from "./components/Navbar";
import Users from "./components/Users";
import './App.css';
import React, { Component } from 'react'
import AddUser from "./components/AddUser";

class App extends Component {



   render() {
      return (
         <div className="container">
          
             <Navbar title="Welcome to Personel System" />
             <hr></hr>
             <AddUser />
             <Users/>
            
         </div>
       );
   }
}
export default App;
