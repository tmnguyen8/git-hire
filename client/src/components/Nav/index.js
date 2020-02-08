import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./style.css";
import Auth from "../../utils/Auth";
import GlobalContext from "../../Context/globalContext";
// import history from "../../history";

// class Nav extends Component {
//     constructor(props) {
//         super(props)
    
//         /** @type BrowserRouter */
//         this.router = undefined
//       }

//     state = {
//         user: false
//     };

//     getAccount = () =>{
//         Auth.getGithubAccount().then((res)=>{
//             this.setState({user: res.data})
//             console.log(this.state.user)
//             console.log(this.isEmpty(res.data))
//             if (!(this.isEmpty(res.data))) {
//                 localStorage.setItem('user', JSON.stringify(this.state.user))
//             } else {
//                 console.log("You did not log in yet, please login")
//             }
//         }).then(()=>{
//             if(localStorage.getItem('user')) {
//                 console.log("local storage has user")
//                 window.location.href="/account";
//             } else {
//                 console.log("no local storage user")
//                 window.location.href="/login";
//             }
//         })
//     }

//     handleGithubLogout = () =>{
//         Auth.logoutGithub().then(()=>{
//             localStorage.removeItem('user')
//         }).then(()=>{
//             window.location.href="/";
//         })
//     }

//     // Check if the object is empty
//     isEmpty = (obj) =>{
//         for(var prop in obj) {
//           if(obj.hasOwnProperty(prop)) {
//             return false;
//           }
//         }
//         return JSON.stringify(obj) === JSON.stringify({});
//     }

//     render() {
//         // const global = this.context;
        
//         // if (this.state.user === false) {
//         //     return <Redirect to='/login' />
//         // }
function NavContext() {
    return (
        <GlobalContext.Consumer>
            {state => (
                <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand" to="/">
                        <img src="https://raw.githubusercontent.com/tmnguyen8/git-hire/master/client/src/images/Git Hire Logo.png" alt="banner" className="brand-logo"></img>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/">Git-Hire</Link>
                            </li>
                    
                        </ul>
            
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <button className="btn-primary"  onClick={state.getAccount} type="submit">Account</button>
                            </li>
                            <li className="list-inline-item">
                                <Link className="btn-primary" to="/login">Login</Link>
                            </li>
                            <li className="list-inline-item">
                                <button className="btn-primary " onClick={state.handleGithubLogout} type="submit">Logout</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            )}
        </GlobalContext.Consumer>
    )
}

export default NavContext;
