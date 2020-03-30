import React, { Component } from 'react'

 class User extends Component {
    state={
        isVisible:false,
        isDeleted:false
    }

 /*    onClickEvent=(e)=>{
        this.setState(
            {
               // isVisible: !this.state.isVisible,
               // isDeleted: true
            }
                
          )
    } */

    deleteComponent(){
 
        this.setState(
            {
               isDeleted:true
            }    
        )
        console.log("delete")
    }

    openComponent(){
        this.setState(
            {
                isVisible: !this.state.isVisible
               
            }    
          )
        
    }
  
    render() {
        return (
            <div className="col-md-8 mb-4">
               { this.state.isDeleted  ? null :
                 <div className="card bg-light mb-3" >
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline" style={{cursor:"pointer"}} >  {this.props.name} <i className="fas fa-chevron-down" onClick={this.openComponent.bind(this)}></i></h4> 
                       
                        <i className="far fa-trash-alt"  style={{cursor: "pointer"}} onClick={this.deleteComponent.bind(this)}   ></i>
                    </div>
                   { 
                        this.state.isVisible ? <div className="card-body">
                        <p className="card-text"> Salary: {this.props.salary} </p> 
                        <p className="card-text"> Department: {this.props.department}  </p>              
                    </div> : null
                }
                 </div>
                }
               
            </div>
        )
    }
}
export default User;

