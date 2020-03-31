
import User from "./components/User";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import './App.css';
import React, { Component } from 'react'

 class App extends Component {
state={
  users:[
   {
      id:1,
      name:"Irem Isik",
      department:"IT",
      salary:"5000 TL"
   },{
      id:2,
      name:"Yigit Er",
      department:"IT",
      salary:"7000 TL"
   },{
      id:3,
      name:"Cigdem Akbulut",
      department:"Finance",
      salary:"10000 TL"
   },{
      id:4,
      name:"Busra Karausta",
      department:"Product",
      salary:"3250 TL"
   },{
      id:5,
      name:"Berati Capaal",
      department:"IT",
      salary:"15000 TL"
   }
  ] 
}

deletePersonel=(id)=>{
   this.setState({
      users: this.state.users.filter( user => id!== user.id)
   })

}

   render() {
      return (
         <div className="container">
          
             <Navbar title="Welcome to Personel System" />
             <hr></hr>
            <Users deletePersonel={this.deletePersonel} users={this.state.users} />
           
         </div>
       );
   }
}
export default App;
