import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getGithubJobs: function(title, location) {
    return axios.get("/api/github", { params: { 
      title: title,
      location: location 
    } });
  },
  getIndeedJobs: function(title, location) {
    return axios.get("/api/indeed", { params: { 
      title: title,
      location: location 
    } });
  },
  getSimplyhiredJobs: function(title, location) {
    return axios.get("/api/simplyhired", { params: { 
      title: title,
      location: location 
    } });
  },
  getMonsterJobs: function(title, location) {
    return axios.get("/api/monster", { params: { 
      title: title,
      location: location 
    } });
  },
  getUSAJobs: function(title, location) {
    return axios.get("/api/usajobs", { params: { 
      title: title,
      location: location 
    } });
  },
  getGlassdoorJobs: function(title, location) {
    return axios.get("/api/glassdoor", { params: { 
      title: title
    } });
  },
  postSavedJob: function(svdJobData){
    return axios.post("/api/savedJob", svdJobData)
  },
  getSavedJobByUser: function (username){
    return axios.get("/api/savedJobByUser", {params:{
      username: username
    }})
  }


};
