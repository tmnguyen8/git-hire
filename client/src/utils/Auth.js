import axios from "axios";

export default {

    loginGithub: function() {
        return axios.get("/auth/github")
    },
    getGithubAccount: function() {
        return axios.get("/auth/github/profile")
    },
    logoutGithub: function () {
        return axios.get("/auth/logout")

    } 
}