import React, { Component } from 'react'
import UserConsumer from '../context';
import axios from 'axios';


class AddUser extends Component {

    updateUser=async(dispatch,e)=>{
        //update
        e.preventDefault();
        const{id}=this.props.match.params;
        const{name,department,salary}=this.state;
        const updatedUser={
            name,
            department,
            salary
        }
     
        const response= await axios.put(`http://localhost:3004/users/${id}`,updatedUser)
       
        dispatch({type:"UPDATE_USER", payload: response.data});
        this.props.history.push("/users");
        
    }

    changeInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value  //burdaki name input degeri olan name:"password"
        })
    }


    state={
        name:"",
        department:"",
        salary:""
    }

    componentDidMount=async()=> {
        const{id}=this.props.match.params;
        const response= await axios.get(`http://localhost:3004/users/${id}`);
       // const{name,department,salary}=response.data;
        this.setState({
            name:response.data.name,
            department:response.data.department,
            salary:response.data.salary
        })
      
    }
    
    render() {
        const{name,department,salary}=this.state;
        return (
             <UserConsumer>
                { 
                    value=>{ 
                        const {dispatch}=value;
                        return(
                            <div className="container col-md-8 mb-4">
                                    <div className="card"  >
                                        <div className="card-header" > 
                                                <h4>Update User </h4>
                                        </div>

                                        <div className="card-body" > 

                                            <form onSubmit={this.updateUser.bind(this,dispatch)} >
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
                                                    
                                                <button type="submit" className="btn btn-primary btn-lg btn-block">Update User</button>
                                            </form>
                                            
                                        </div>
                                    </div>
                            </div>
                        )
                        
                }}
                       
                
            </UserConsumer> 
            
           
        )
    }
}

export default AddUser;
