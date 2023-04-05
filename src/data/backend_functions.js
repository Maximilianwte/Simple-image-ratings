import axios from "axios";
let URL_PREFIX = process.env.VUE_APP_URL_PREFIX + "/.netlify/functions";

let logic_functions = {
  async get_open_image(inFile) {
    return await axios.post(URL_PREFIX + "/data/get_open_image", inFile).then(response => {
      return response
    })
  },
  async send_answer(inFile) {
    return await axios.post(URL_PREFIX + "/data/send_answer", inFile).then(response => {
      return response
    })
  },
}



export default logic_functions