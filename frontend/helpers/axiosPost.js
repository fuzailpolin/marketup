import axios from 'axios'


const axiosPost = (url, body, headers) => {
    return new Promise((resolve, reject) => {
        axios.post(url, body, {
            headers: headers
        })
            .then(res => resolve(res.data))
            .catch(err => reject(err.response.data))
    })
}

export default axiosPost
