import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api'
})

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token")
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
    },
    (err) => Promise.reject(err)
)


export default axiosInstance