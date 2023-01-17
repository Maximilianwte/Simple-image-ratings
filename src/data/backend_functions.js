import axios from "axios";
let URL_PREFIX = process.env.VUE_APP_URL_PREFIX + "/.netlify/functions";

let logic_functions = {
  async send_request(data) {
    return await axios.post(URL_PREFIX + "/data/get_analysis", data).then(response => {
      return response
    })
  }
}



export default logic_functions