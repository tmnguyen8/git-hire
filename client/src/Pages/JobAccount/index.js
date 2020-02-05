import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import Context from "../../Context/globalContext";


const JobAccount = () => {
    let intialState = {
            job_list: []
        };
        
    const [state, setState] = useState(intialState);
    // const [favJobs] = useState([]);

    useEffect(() => {
        
        const userLocalStorage = JSON.parse(localStorage.getItem('user'))
        var username = userLocalStorage.username;

        API.getSavedJobByUser(username).then((res)=>{
            console.log("response from server",res.data)

            setState({job_list: res.data});

            console.log("this is from state", state.job_list)
          }).catch(err=>console.log(err))

    });
    
   
    return(
        <div>
            
        </div>
    )
};

export default JobAccount;
