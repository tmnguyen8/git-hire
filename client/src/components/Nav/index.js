import React, { Component } from "react";
import {Link, Redirect} from "react-router-dom";
import "./style.css";
import Auth from "../../utils/Auth";
import GlobalContext from "../../Context/globalContext";
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

    
    getGithubProfile = () => {
        Auth.getGithubAuth().then((res)=>{
            this.setState({user: res.data})
            console.log("response from server", this.state.user)
            console.log(global.user)
        }).then(() => {
            history.push('/')
            // return <Redirect to="/account"/>
        })  
    }

    render() {
        const global = this.context;
        
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
                            
                                <button className="btn btn-primary " onClick={this.getGithubProfile} type="submit">Account</button>
                            
                        </li>
                        <li class="list-inline-item">
                            <Link to="/login" className={window.location.pathname === "login"}>
                            <button className="btn btn-primary " onClick={this.handleGithubLogin} type="submit">Login</button>
                            </Link>
                        </li>
                        <li class="list-inline-item">
                            <Link to="/logout" className={window.location.pathname === "/logout"}>
                                <button className="btn btn-primary " href="/logout" type="submit">logout</button>
                            </Link>
                        </li>
                    </ul>
        
                </div>
            </nav>
        );
    }
    
}
Nav.contextType = GlobalContext;

export default Nav;
