import React, { Component } from 'react'
import posed from 'react-pose';

const Box=posed.div({
    visible: {
        opacity:1,
        applyAtStart:{display:"block"}},
    hidden: {
        opacity:0,
        applyAtEnd:{display:"none"}
    }
});

class AddUser extends Component {

    ChangeFormVisibility=(e)=>{
        console.log("clickkkk");
        this.setState({
            isVisible: !this.state.isVisible
        })
        
    }

    state={
        isVisible:false
    }

    render() {
        const{isVisible}=this.state;
        return (
           
        <div className="col-md-8 mb-4">
            <button onClick={this.ChangeFormVisibility} type="submit" className="btn btn-dark btn-lg btn-block mb-2" >{isVisible? "Hide Form": "Show Form"}</button>
                <Box className="box" pose={this.state.isVisible ? "visible": "hidden"}>
                    <div className="card"  >
                    <div className="card-header" > 
                            <h4> Add User </h4>
                    </div>
                    <div className="card-body" > 

                    <form>
                    <div className="form-group" > 
                            <label htmlFor="name"> Name: </label>
                            <input type="text" name="name" id="name" placeholder="Enter name" className="form-control" />
                        </div>

                        <div className="form-group">    
                            <label htmlFor="department"> Department: </label> 
                                <select className="custom-select" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="1">IT</option>
                                    <option value="2">Product</option>
                                    <option value="3">Finance</option>
                                    <option value="4">Human Resources</option>
                                </select>
                        </div>

                        <div className="form-group"> 
                        <label htmlFor="salary"> Salary: </label>
                            <div className="input-group">
                                <input type="text" placeholder="Enter Salary" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
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
    }
}

export default AddUser;
