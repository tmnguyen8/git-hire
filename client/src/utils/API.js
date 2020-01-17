import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getGithubJobs: function(title, location) {
    return axios.get("/api/github", { params: { 
      title: title,
      location: location 
    } });
  }
};
