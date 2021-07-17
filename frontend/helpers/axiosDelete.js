import axios from 'axios'


const axiosDelete = (url, body, headers) => {
    return new Promise((resolve, reject) => {
        axios.delete(url, {
            headers: headers
        })
            .then(res => resolve(res.data))
            .catch(err => reject(err.response.data))
    })
}

export default axiosDelete
