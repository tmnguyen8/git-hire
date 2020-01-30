import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./style.css";
import Auth from "../../utils/Auth";
import GlobalContext from "../../Context/globalContext";

class Nav extends Component {
    state = {
        user: false
    };

    render() {
        const global = this.context;
        
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src="https://raw.githubusercontent.com/tmnguyen8/git-hire/master/client/src/images/job.png" alt="banner" className="brand-logo"></img>
                </Link>
                <p>{global.user.id}</p>
                <p>{this.state.user.id}</p>
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
                            <Link to="/account" className={window.location.pathname === "account"}>
                                <button className="btn btn-primary " onClick={global.getAccount} type="submit">Account</button>
                            </Link>
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
