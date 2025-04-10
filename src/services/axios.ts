import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://stands-api.vercel.app/stands'
})