import axios from "axios";

export default {
    getGithubAuth: function() {
        console.log("testing calling profile github")
        return axios.get("/auth/profile")
    }
}