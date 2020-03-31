import React, { Component } from 'react'
import User from "./User";

class Users extends Component {

    render() {

        const{users, deletePersonel}=this.props;
        return (
            <div>
                {
                    users.map(user=>{   
                        return (
                            <User 
                                key={user.id}
                                id={user.id}
                                name={user.name}
                                department={user.department}
                                salary={user.salary}
                                deletePersonel={deletePersonel}
                            />
                        );   
                    })
                }
            </div>
        );
    }
}
export default Users;
