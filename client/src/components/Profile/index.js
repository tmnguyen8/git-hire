import React, {Component} from "react"
import "./style.css";
import GlobalContext from "../../Context/globalContext";



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
        // console.log(userInfo.username)

        if(this.isEmpty(userInfo)) {
            return(
                <div className="card">
                    <p>Login to see profile</p>
                </div>
            )
        } else {
            return (
                <div className="card-container list-group">
                    <div className="card">
                        <p className="username-text">{userInfo.username}</p>
                        <img className="user-image" src={userInfo._json.avatar_url} />
                        <a href={userInfo.profileUrl}>Github</a>
                    </div>
                </div>
                
                
            )
        }
        
    }
}


export default Profile;


// function Profile() {
//     return (
//         <GlobalContext.Consumer>
//             {state => (
//                 <div className="card">
//                     <p>{state.user.username}</p>
//                     <img src={state.user._json.avatar_url} atl="github url"/>
//                     <a href={state.user.profileUrl}>Github</a>
//                 </div>
//             )
//             }
//         </GlobalContext.Consumer>
//     )
// }

// export default Profile;