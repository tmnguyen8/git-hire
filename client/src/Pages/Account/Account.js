import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import GlobalContext from "../../Context/globalContext";
import { JobList, JobListItem } from "../../components/JobList";
import { Container, Row, Col } from "../../components/Grid";


const JobAccount = () => {
  let initialContext = {
    favJobList: []
  }
  
    const [state, setState] = useState(initialContext);
    const [favJobList] = useState([])

    useEffect(() => {
        
        const userLocalStorage = JSON.parse(localStorage.getItem('user'))
        var username = userLocalStorage.username;

        API.getSavedJobByUser(username)
        .then((res)=>{
            setState({favJobList: res.data});
            console.log("this is from state", state.favJobList)
        })
        .then(()=>{
            
        })
        .catch(err=>console.log(err))

    });
    
   
    return(
      <div>
      </div>
  
    )
};

export default JobAccount;
