import React, { Component } from 'react'

 class User extends Component {
    render() {
        return (
            <div className="col-md-8 mb-4">
                <div className="card bg-light mb-3" >
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline">{this.props.name}</h4> 
                        <i className="far fa-trash-alt" style={{cursor: "pointer"}}></i>
                    </div>
                    <div className="card-body">
                        <p className="card-text"> Salary: {this.props.salary} </p> 
                        <p className="card-text"> Department: {this.props.department}  </p>              
                    </div>
                </div>
            </div>
        )
    }
}
export default User;

