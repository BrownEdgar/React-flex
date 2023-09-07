import axios from "axios";

const instanse = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
	timeout: 1000,
})

export default instanse;