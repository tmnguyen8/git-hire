import React, { Component } from "react";
import { Link, Redirect, NavLink } from 'react-router-dom'
import "./style.css";
import Auth from "../../utils/Auth";
import GlobalContext from "../../Context/globalContext";
import {withRouter} from 'react-router-dom'
import history from "../../history";

class Nav extends Component {
    constructor(props) {
        super(props)
    
        /** @type BrowserRouter */
        this.router = undefined
      }

    state = {
        user: false
    };

    getAccount = () =>{
        Auth.getGithubAccount().then((res)=>{
            this.setState({user: res.data})
            console.log(this.state.user)
            console.log(this.isEmpty(res.data))
            if (!(this.isEmpty(res.data))) {
                localStorage.setItem('user', JSON.stringify(this.state.user))
            } else {
                console.log("You did not log in yet, please login")
            }
        }).then(()=>{
            if(localStorage.getItem('user')) {
                console.log("local storage has user")
                window.location.href="/account";
            } else {
                console.log("no local storage user")
                window.location.href="/login";
            }
        })
    }

    handleGithubLogout = () =>{
        Auth.logoutGithub().then(()=>{
            localStorage.removeItem('user')
        }).then(()=>{
            window.location.href="/";
        })
    }

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
        const global = this.context;
        
        // if (this.state.user === false) {
        //     return <Redirect to='/login' />
        // }

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src="https://raw.githubusercontent.com/tmnguyen8/git-hire/master/client/src/images/job.png" alt="banner" className="brand-logo"></img>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className={window.location.pathname === "/" || window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>Git-Hire
                            </Link>
                        </li>
                
                    </ul>
        
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <button className="btn btn-primary"  onClick={this.getAccount} type="submit">Account</button>
                        </li>
                        <li class="list-inline-item">
                            <Link to="/login" className={window.location.pathname === "login"}>
                            <button className="btn btn-primary " onClick={this.handleGithubLogin} type="submit">Login</button>
                            </Link>
                        </li>
                        <li class="list-inline-item">
                            <button className="btn btn-primary " onClick={this.handleGithubLogout} type="submit">logout</button>
                        </li>
                    </ul>
        
                </div>
            </nav>
        );
    }
    
}
Nav.contextType = GlobalContext;

export default withRouter(Nav);
