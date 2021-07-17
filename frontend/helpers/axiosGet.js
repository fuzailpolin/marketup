import axios from 'axios'


const axiosGet = (url, headers) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            headers: headers
        })
            .then(res => resolve(res.data))
            .catch(err => reject(err.response.data))
    })
}

export default axiosGet
