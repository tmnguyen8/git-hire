import axios from "axios";

export default {
    getFacebookAuth: function() {
        return axios.get("/auth/profile")
    }
}