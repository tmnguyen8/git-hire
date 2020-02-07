import React, { Component } from "react"
import "./style.css";
import Account from "../../Pages/Account/Account"
import Auth from "../../utils/Auth"


class Profile extends Component {

    // Check if the object is empty
    isEmpty = (obj) =>{
        for(var prop in obj) {
        if(obj.hasOwnProperty(prop)) {
            return false;
        }
        }
        return JSON.stringify(obj) === JSON.stringify({});
    }
    render() {

        const userInfo = JSON.parse(localStorage.getItem('user'))
        console.log(userInfo.username)

        if(this.isEmpty(userInfo)) {
            return(
                <div className="card">
                    <p>Login to see profile</p>
                </div>
            )
        } else {
            return (
                <div className="card">
                    <p>{userInfo.username}</p>
                    <img src={userInfo.photos[0].value} />
                    <a href={userInfo.profileUrl}>Github</a>
                </div>
                
            )
        }
        
    }
}


export default Profile;