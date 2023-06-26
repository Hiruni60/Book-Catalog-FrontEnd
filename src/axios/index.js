import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost/8080/api/v1/books/all",
    headers: {},
});

export default instance;