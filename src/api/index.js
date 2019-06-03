import axios from "axios"

export default {

    // Returns homecards array
    fetchHomeCards () {
        return axios.get("http://localhost:3000/homecards")
            .then(response => response.data)
    }
    
}