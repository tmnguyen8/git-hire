import React, { Component } from "react";
import API from "../../utils/API";
// import { Container, Row, Col } from "../../components/Grid";
import "./style.css";
import Button from "../Button";


class JobStats extends Component {
    state = {
        favJobList: [],
        statusNotApplied: 0,
        statusApplied: 0,
        statusInterviewed: 0,
        statusOffered: 0,
        statusRejected: 0
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
          })
          .then(()=>{
                var countApplied = 0;
                var countInterviewed = 0;
                var countOffered = 0;
                var countRejected = 0;
                var countNotApplied = 0;

                this.state.favJobList.map(favJob=>{
                    //   console.log(favJob.status)
                    if(favJob.status==="Applied"){
                      countApplied += 1
                    } else if (favJob.status==="Interviewed") {
                      countInterviewed += 1
                    } else if (favJob.status==="Offered") {
                      countOffered += 1
                    } else if (favJob.status==="Rejected") {
                      countRejected += 1
                    } else if (favJob.status==="Saved Not Applied") {
                      countNotApplied += 1
                    }
                })
                this.setState({
                  statusApplied: countApplied,
                  statusInterviewed: countInterviewed,
                  statusOffered: countOffered,
                  statusRejected: countRejected,
                  statusNotApplied: countNotApplied
                })
          })
          .catch(err=>console.log(err))
      }
    }
    render () {
      return (
          <div className="job-stat-container container-fluid list-group">
            <Button className="refresh-btn" onClick={this.handleRefresh}>Refresh</Button>
            <h6 className="job-status-text">Job Statistics</h6>
            {
             this.state.favJobList.length>0?
              <div classname="container">
                <p className="job-status list-group-item napl">Not Applied: {this.state.statusNotApplied}</p>
                <p className="job-status list-group-item apl">Applied: {this.state.statusApplied}</p>
                <p className="job-status list-group-item itv">Interviewed: {this.state.statusInterviewed}</p>
                <p className="job-status list-group-item ofr">Offered: {this.state.statusOffered}</p>
                <p className="job-status list-group-item rjc">Rejected: {this.state.statusRejected}</p>
              </div>
              :
              <div>
              </div>
            }
            
          </div>
      )
    }
    
};

export default JobStats;
