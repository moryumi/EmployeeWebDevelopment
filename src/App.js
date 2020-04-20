import Navbar from "./components/Navbar";
import Users from "./components/Users";
import './App.css';
import React, { Component } from 'react'
import AddUser from "./components/AddUser";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import UpdateUser from "./components/UpdateUser";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import User from "./components/User";

class App extends Component {

   render() {
      return (
         <Router>
            
             <Navbar />
            <div className="container">
               <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/contact" component={Contact}/>
                  <Route exact path="/updateUser/:id" component={UpdateUser}/>

                  <Route exact path="/addUser" component={AddUser}/>
                  <Route exact path="/users" component={Users}/>
                  
                  <Route component={NotFound}/>
               </Switch>
               
            
            </div>
         </Router>
       );
   }
}
export default App;
