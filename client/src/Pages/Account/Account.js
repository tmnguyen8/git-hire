import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import GlobalContext from "../../Context/globalContext";
// import { JobList, JobListItem } from "../../components/JobList";
import { Row, Col } from "../../components/Grid";
import Profile from "../../components/Profile";
import { FavListItem, FavList } from "../../components/FavList";
import JobStats from "../../components/JobStats";
import "./account.css";


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

        <div className="profile-div col-sm-12 col-md-2 col-lg-2">
          <Profile />
          <JobStats/>
        </div>
        
        <div className="fav-div col-sm-12 col-md-10 col-lg-10">

          <div className="container">
            {!state.favJobList.length ? (
              <h1 className="text-center">No Fav Jobs to Display</h1>
              ) : (
                <FavList>
                  {state.favJobList.map(job => {
                    return (
                      <FavListItem
                        key={job._id}
                        id={job._id}
                        title={job.title}
                        url={job.url}
                        company={job.company}
                        description={job.description}
                        thumbnail={job.company_logo}
                        location={job.location}
                        salary={job.salary}
                        provider={job.provider}
                        status={job.status}
                      />
                    );
                  })}
                </FavList>
              )
            }
          </div>
        </div>
      </Row>
    )
};

export default JobAccount;
