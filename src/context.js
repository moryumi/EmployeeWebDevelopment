import React, { Component } from 'react'

const UserContext=React.createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user=> action.payload !== user.id)
            }
         case "ADD_USER":
            return{
                ...state,
                users: [...state.users,action.payload]
            } 
    }
}

export class UserProvider extends Component {
    state={
        users:[
         {
            id:"id1",
            name:"Irem",
            department:"IT",
            salary:"5000"
         },{
            id:"id2",
            name:"Yigit",
            department:"IT",
            salary:"7000"
         },{
            id:"id3",
            name:"Cigdem",
            department:"Finance",
            salary:"10000"
         },{
            id:"id4",
            name:"Busra",
            department:"Product",
            salary:"3250"
         },{
            id:"id5",
            name:"Berati",
            department:"IT",
            salary:"15000"
         }
        ] ,
        dispatch: action=>{
            this.setState(state=> reducer(state,action))
        }
    }
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children }  
            </UserContext.Provider>
        )
    }
}

const UserConsumer=UserContext.Consumer;  //value'yu kullanmak icin consumer olusturduk
export default UserConsumer; // diger dosyalarda kullanmak icin export ediyosun