import axios from "axios";

export default {
    getGithubAccount: function() {
        return axios.get("/auth/github/profile")
    },
    logoutGithub: function () {
        return axios.get("/auth/logout")
    }

    
}