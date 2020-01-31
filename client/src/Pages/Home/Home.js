// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './home.css';
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Grid from '@material-ui/core/Grid'
// import Col from "../../components/Grid"

// class Home extends Component {
//     state = {}
   
//     render(){
//         return(
//             <div>
//                 <header>
//                     <ButtonGroup variant="variant" color="primary">
//                         <Button>Sign up</Button>
//                         <Button>Login</Button>
//                     </ButtonGroup>
//                 </header>

//                 <body>

                    

//                     <div className="mainBG">
//                         <Grid item xs = { 2 }>
//                         <   Grid  item xs = {6 } className="mainContent">
                            
//                                 <p>Connect to your next<span className="text-holder"> </span></p>
                           
//                             </Grid>
//                         </Grid>
//                     </div>
                   
//                 </body>

//                     {/* <div className="mainBG">
//                         <div className="mainContent">
//                             <p>Your next developer</p>
//                         </div>
//                     </div> */}

//                     <footer></footer>
                
       
//             </div>
//         )
//     }
// }

// export default Home

import React from "react";
import { Link, Redirect, NavLink } from 'react-router-dom'
import GlobalContext from "../../Context/globalContext";
import Auth from "../../utils/Auth";
import Nav from "../../components/Nav";

class Home extends React.Component {
  state = {
    user: {},
    photo: {}
  };



  render() {
    const {user, login} = this.context;

    return (
      <>
        <Nav/>
        <h1>Home Page: {user && user}</h1>

    
        <p>{this.state.user.id}</p>
        <p>{this.state.user.displayName}</p>
        <img src={this.state.photo.value}/>
      
      </>
    );
  }
}
Home.contextType = GlobalContext;

export default Home;
