import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.106:3333', /* Coloque o seu endereço IP */
})

export default api;