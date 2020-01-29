import axios from "axios";

export default {
    getGithubAuth: function() {
        console.log("testing github")
        return axios.get("/auth/profile")
    }
}