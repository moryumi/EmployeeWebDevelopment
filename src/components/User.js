import React, { Component } from 'react'
import axios from 'axios';
import UserConsumer from '../context'
import { Link } from 'react-router-dom';

 class User extends Component {
    state={
        isVisible:false,
    }

    onClickEvent=(e)=>{
        this.setState(
            {
                isVisible: !this.state.isVisible
            }  
        )
    } 

    onDeletePersonel=async(dispatch,e)=>{
        const {id}= this.props;
        console.log(id);
        await axios.delete('http://localhost:3004/users/'+ id); 
        
        //dispatch
        dispatch({type:"DELETE_USER",payload:id});
       
    }

    componentWillUnmount() {
        console.log("delete");
    }
    
  
    render() {
        const{name,department,salary}=this.props;
        const {id}=this.props;
        return(
            <UserConsumer>
            {
                value=>{
                    const {dispatch}=value;
                    return (
                        <div className="container col-md-8 mb-4">
                           { 
                            <div className="card bg-light mb-3" >
                                <div className="card-header d-flex justify-content-between" style={this.state.isVisible? {backgroundColor:"#4c4f6a", color:"#f0f6f7"} : null}>
                                    <h4 className="d-inline" style={{cursor:"pointer"}} >  {this.props.name} <i className="fas fa-chevron-down" onClick={this.onClickEvent}></i></h4> 
                                   
                                    <i className="far fa-trash-alt" onClick={this.onDeletePersonel.bind(this,dispatch)} style={{cursor: "pointer"}}  ></i>
                                </div>
                               { 
                                   this.state.isVisible ? <div className="card-body">
                                    <p className="card-text"> Salary: {this.props.salary} TL</p> 
                                    <p className="card-text"> Department: {this.props.department}  </p> 
                                    <Link to={`/updateUser/${id}`} className="btn btn-secondary btn-lg btn-block">Update Employee</Link>
                                    
                                    </div> 
                                    : null  
                            }
                             
                            </div>
                            }
                        </div>
                    )
                }
            }
            </UserConsumer>
        )  
    }
}
export default User;

