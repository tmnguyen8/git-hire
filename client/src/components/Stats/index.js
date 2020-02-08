import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";

const AccountStat = () => {
    let initialContext = {
        favJobList: [],
        statusApplied: 0
    }
  
    const [state, setState] = useState(initialContext);
    const [favJobList] = useState([])
    const [statusApplied] = useState(0)

    useEffect(() => {
        const userLocalStorage = JSON.parse(localStorage.getItem('user'))
        if(userLocalStorage) {
          var username = userLocalStorage.username;
          API.getSavedJobByUser(username)
          .then((res)=>{
            setState({favJobList: res.data});
            console.log("this is from state", state.statusApplied)
          })
          .then(()=>{
                var count = 0;
                state.favJobList.map(favJob=>{
                    //   console.log(favJob.status)
                    if(favJob.status==="Applied"){
                        count += 1
                    }
                })
                setState({statusApplied: count})
                console.log(state.statusApplied)
          })
          .catch(err=>console.log(err))
        }
    });
    
    return (
      <Row>
        <div >
          <h3>Job Statistics</h3>
          <p>Applied Jobs: {state.appliedStatus}</p>
        </div>
      </Row>
    )
};

export default AccountStat;
