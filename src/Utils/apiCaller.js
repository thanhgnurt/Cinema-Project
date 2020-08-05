import * as config from './../Redux/Constants/config.js'
import axios from 'axios'
export default function callApi(endpoint, method = 'GET', body) {
   return axios ({
        method,
        url: `${config.API_LIST_MOVIE}${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
        alert('you will recive a error')
    })
}