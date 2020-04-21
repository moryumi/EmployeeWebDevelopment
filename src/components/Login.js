import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";

import {Link} from "react-router-dom";
import User from './User';

class Login extends Component {

    controlledInfo=(e)=>{
        e.preventDefault();
        const {isLogin,username,password}=this.state;
        if(username=="user1" && password==1234){
           this.setState({
               isLogin:true
           },this.props.history.push("/users"))
        }
        else{
            this.setState({
                isLogin:false
            },console.log("wroooong"))
        }
    }
    
    controlledUsername=async(e)=>{
        this.setState({
            [e.target.name]:e.target.value  //burdaki name input degeri olan name:"name"
        })
        console.log(e.target.value);
    }
    controlledPassword=async(e)=>{
        this.setState({
            [e.target.name]:e.target.value //burdaki name input degeri olan name:"password"
        })
        console.log(e.target.value);
    }
    state={
        username:'',
        password:'',
        isLogin:true
    }
    render() {
        const {isLogin,username,password}=this.state;
        return (
            <div className="container h-100">
            <div className="d-flex justify-content-center h-100">
                <div className="user_card">
                <img className="logo mb-4" src={require("../images/logo.jpeg")} alt="logo"/>
                    
                    <div className="d-flex justify-content-center form_container">

                        <form onSubmit={this.controlledInfo.bind(this)}>

                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" name="username" className="form-control input_user" onChange={this.controlledUsername} value={username} placeholder="username"/>
                            </div>
                            <div className="input-group mb-4">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" name="password" className="form-control input_pass" onChange={this.controlledPassword} value={password} placeholder="password"/>
                            </div>
                           {/*  <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customControlInline"/>
                                    <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                </div>
                            </div> */}
                            
                            {isLogin ? null :<div class="alert alert-danger mb-4" role="alert">Wrong info. Please check it!</div> }
                            <div className="d-flex justify-content-center  login_container mb-3">
                                <button type="submit" name="button" className="btn login_btn btn btn-success"> Login</button>
                            </div>
                        </form>
                    </div>
            
                    <div >
                        <div className="d-flex justify-content-center links">
                            Don't have an account? <Link to="/signUp" className="ml-2"> Sign Up</Link>
                        </div>
                        {/* <div className="d-flex justify-content-center links">
                            <a href="#">Forgot your password?</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Login;
