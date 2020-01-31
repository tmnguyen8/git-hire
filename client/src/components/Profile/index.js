import React from "react"
import "./style.css";
import Account from "../../Pages/Account/Account"
import Auth from "../../utils/Auth"

function ProfileCard(props) {
    return( 
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        <div className="userContent">
            <ul>
                <strong>Name:</strong> 
                    {/* {global.user.displayName} */}
            </ul>
            <ul>
                    <strong>Email:</strong> 
                    {/* {this.state.user.email} */}
            </ul>
            <ul>
                    <strong>Phone:</strong> 
                    {/* {props.phone} */}
            </ul>
        </div>
    </div>
    );
}

export default ProfileCard;