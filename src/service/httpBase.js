import axios from 'axios'

const httpBase = axios.create({
    baseURL: 'https://api.github.com/',
});

export default httpBase