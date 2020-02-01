import React, { Component } from "react"
import "./style.css";
import Account from "../../Pages/Account/Account"
import Auth from "../../utils/Auth"


class Profile extends Component {
    render() {

        const userInfo = JSON.parse(localStorage.getItem('user'))
        console.log(userInfo.username)
        
        return(
            <div>
                <h3>{userInfo.username}</h3>
                <img src={userInfo.photos[0].value}/>
                <a href={userInfo.profileUrl}>Github</a>
            </div>
        )
    }
}


export default Profile;