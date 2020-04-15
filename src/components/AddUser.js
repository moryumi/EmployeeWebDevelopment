import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../context';
import axios from 'axios';


const Box=posed.div({
    visible: {
        opacity:1,
        applyAtStart:{display:"block"}},
    hidden: {
        opacity:0,
        applyAtEnd:{display:"none"}
    }
});

//var uniqid=require('uniqid');

class AddUser extends Component {

    ChangeFormVisibility=(e)=>{
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    changeInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    addUser=async(dispatch,e)=>{
       
        e.preventDefault();
        console.log("basti");
        const {name,department,salary}=this.state;
        const newUser={
            name:name,
            department:department,
            salary:salary,
            //id:uniqid()
        }
        const response= await axios.post("http://localhost:3004/users",newUser);
       dispatch({type:"ADD_USER",payload:response.data});
    }

    state={
        isVisible:false,
        name:"",
        department:"",
        salary:""
    }

    render() {
        const{isVisible,name,department,salary}=this.state;
        return (
             <UserConsumer>
                { 
                    value=>{ 
                        const {dispatch}=value;
                        return(
                            <div className="col-md-8 mb-4">
                            <button onClick={this.ChangeFormVisibility} type="submit" className="btn btn-dark btn-lg btn-block mb-2" >{isVisible? "Hide Form": "Show Form"}</button>
                                <Box className="box" pose={this.state.isVisible ? "visible": "hidden"}>
                                    <div className="card"  >
                                        <div className="card-header" > 
                                                <h4> Add User </h4>
                                        </div>

                                        <div className="card-body" > 

                                            <form onSubmit={this.addUser.bind(this,dispatch)} >
                                                <div className="form-group" > 
                                                        <label htmlFor="name"> Name: </label>
                                                        <input type="text" name="name" id="name" placeholder="Enter name" className="form-control" value={name} onChange={this.changeInput}/>
                                                    </div>

                                                <div className="form-group">    
                                                        <label > Department: </label> 
                                                            <select name="department" className="custom-select" id="inputGroupSelect01" value={department} onChange={this.changeInput}>
                                                                <option value="DEFAULT">Choose...</option>
                                                                <option value="IT">IT</option>
                                                                <option value="Product">Product</option>
                                                                <option value="Finance">Finance</option>
                                                                <option value="Human Resources">Human Resources</option>
                                                            </select>
                                                    </div>

                                                <div className="form-group"> 
                                                    <label htmlFor="salary"> Salary: </label>
                                                        <div className="input-group">
                                                            <input name="salary" type="text" placeholder="Enter Salary" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" value={salary} onChange={this.changeInput} />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text">TL</span>
                                                                <span className="input-group-text">0.00</span>
                                                            </div>
                                                        </div>           
                                                    </div>
                                                    
                                                <button type="submit" className="btn btn-primary btn-lg btn-block">Add User</button>
                                            </form>
                                            
                                        </div>
                                    </div>
                                </Box>  
                            </div>
                        )
                        
                }}
                       
                
            </UserConsumer> 
            
           
        )
    }
}

export default AddUser;
