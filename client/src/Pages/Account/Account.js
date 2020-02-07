import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import GlobalContext from "../../Context/globalContext";
import { JobList, JobListItem } from "../../components/JobList";
import { Container, Row, Col } from "../../components/Grid";
import Profile from "../../components/Profile";


const JobAccount = () => {
  let initialContext = {
    favJobList: []
  }
  
    const [state, setState] = useState(initialContext);
    const [favJobList] = useState([])

    useEffect(() => {
        const userLocalStorage = JSON.parse(localStorage.getItem('user'))
        if(userLocalStorage) {
          var username = userLocalStorage.username;
          API.getSavedJobByUser(username)
          .then((res)=>{
            setState({favJobList: res.data});
            // console.log("this is from state", state.favJobList)
          })
          .catch(err=>console.log(err))
        }
    });
    
    return(
      <Row>
        <div className="col-2">
          <h3>Account Info</h3>
          <Profile />
        </div>

        <div className="col-8">
          <h3>Saved Jobs</h3>
          <div className="container">
            {!state.favJobList.length ? (
              <h1 className="text-center">No Fav Jobs to Display</h1>
              ) : (
                <JobList>
                  {state.favJobList.map(job => {
                    return (
                      <JobListItem
                        key={job.id}
                        id={job.id}
                        title={job.title}
                        href={job.url}
                        company={job.company}
                        description={job.description}
                        thumbnail={job.company_logo}
                        location={job.location}
                        salary={job.salary}
                        provider={job.provider}
                      />
                    );
                  })}
                </JobList>
              )
            }
          </div>
        </div>

        <div className="col-2">
          <h3>Link to Github</h3>
        </div>
        
      </Row>
      
  
    )
};

export default JobAccount;
