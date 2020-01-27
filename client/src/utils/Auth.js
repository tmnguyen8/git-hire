import axios from "axios";

export default {
    getFacebookAuth: function() {
        axios.get("/auth/facebook/callback").then((res)=>{
            return res
        })
    }
}