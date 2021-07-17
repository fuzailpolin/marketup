import axios from 'axios'


const axiosPut = (url, body, headers) => {
    return new Promise((resolve, reject) => {
        axios.put(url, body, {
            headers: headers
        })
            .then(res => resolve(res.data))
            .catch(err => reject(err.response.data))
    })
}

export default axiosPut
