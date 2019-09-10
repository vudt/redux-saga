import axios from 'axios';

export const getUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
         .then(res => {
            return res.data;
         }).catch((error) => { console.log(error) })
}

export const getUser = (id) => {
    return fetch('https://reqres.in/api/users/' + id)
        .then((response) => response.json())
        .then((responseData) => {
            return responseData;
        })
        .catch((error) => { console.log(error) })
}