import axiosLib from 'axios'


const baseURL = process.env.REACT_APP_API_HOST_URL!

const axios = axiosLib.create({
    baseURL: `${baseURL}/api`,
})

export default axios