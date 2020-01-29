import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './home.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid'
import Col from "../../components/Grid"

class Home extends Component {
    state = {}
   
    render(){
        return(
            <div>
                <header>
                    <ButtonGroup variant="variant" color="primary">
                        <Button>Sign up</Button>
                        <Button>Login</Button>
                    </ButtonGroup>
                </header>

                <body>

                    

                    <div className="mainBG">
                        <Grid item xs = { 2 }>
                        <   Grid  item xs = {6 } className="mainContent">
                            
                                <p>Connect to your next<span className="text-holder"> </span></p>
                           
                            </Grid>
                        </Grid>
                    </div>
                   
                </body>

                    {/* <div className="mainBG">
                        <div className="mainContent">
                            <p>Your next developer</p>
                        </div>
                    </div> */}

                    <footer></footer>
                
       
            </div>
        )
    }
}

export default Home