import axios from 'axios'
// import { url } from "./utils/url.js"

const url = 'http://localhost:5000'

export const  authUser = async (email, password) => {
    try {
        
        const config = { headers: { 'Content-Type': 'application/json' } }
        const { data } = await axios.post(`${url}/api/login`, { email, password }, config)   
        return data
    } catch(e) {
        console.log('An error occured: ',e)
    }
}