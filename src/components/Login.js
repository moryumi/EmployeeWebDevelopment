import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";

import {Link} from "react-router-dom";
import User from './User';

class Login extends Component {

    controlledInfo=(e)=>{
        console.log("login");
    }
    
    controlledUsername=async(e)=>{
        
    }
    controlledPassword=async(e)=>{
       
    }
    state={
        username:'',
        password:''
    }
    render() {
        const {username,password}=this.state;
        return (
            <div className="container h-100">
            <div className="d-flex justify-content-center h-100">
                <div className="user_card">
                <img className="logo" src={require("../images/logo.jpeg")} alt="logo"/>
                    
                    <div className="d-flex justify-content-center form_container">

                        <form onSubmit={this.controlledInfo.bind(this)}>

                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" name="username" className="form-control input_user" onChange={this.controlledUsername} value={username} placeholder="username"/>
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" name="password" className="form-control input_pass" onChange={this.controlledPassword} value={password} placeholder="password"/>
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customControlInline"/>
                                    <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                </div>
                            </div>
                                <div className="d-flex justify-content-center mt-3 login_container">
                         
                                <Link to ="/users" className="nav-link"><button type="submit" name="button" className="btn login_btn">Login </button></Link>
                        
                       </div>
                        </form>
                    </div>
            
                    <div className="mt-4">
                        <div className="d-flex justify-content-center links">
                            Don't have an account? <a href="#" className="ml-2">Sign Up</a>
                        </div>
                        <div className="d-flex justify-content-center links">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Login;
