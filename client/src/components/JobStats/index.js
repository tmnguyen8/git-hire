import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";



class JobStats extends Component {
    state = {
        favJobList: [],
        statusApplied: 0
    }

    isEmpty = (obj) => {
      for(var prop in obj) {
          if(obj.hasOwnProperty(prop)) {
              return false;
          }
      }
      return JSON.stringify(obj) === JSON.stringify({});
    }

    handleRefresh = () => {
      const localhostUser = JSON.parse(localStorage.getItem('user'))

      if (!this.isEmpty(localhostUser) && localhostUser!==null) {
        var username = localhostUser.username;
          API.getSavedJobByUser(username)
          .then((res)=>{
            this.setState({favJobList: res.data});
            console.log("this is from state", this.state.statusApplied)
          })
          .then(()=>{
                var count = 0;
                this.state.favJobList.map(favJob=>{
                    //   console.log(favJob.status)
                    if(favJob.status==="Applied"){
                        count += 1
                    }
                })
                this.setState({statusApplied: count})
                console.log(this.state.statusApplied)
          })
          .catch(err=>console.log(err))
      }
    }
    render () {
      return (
          <Container >
            <button onClick={this.handleRefresh}>Refresh</button>
            <h3>Job Statistics</h3>
            {
             this.state.statusApplied>0?
              <div>
                <p>Applied Jobs: {this.state.statusApplied}</p>
              </div>
              :
              <div>
              </div>
            }
            
          </Container>
      )
    }
    
};

export default JobStats;
