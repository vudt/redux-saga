import axios from 'axios';

export const getPosts = (page) => {
    return axios.get(`http://myrth.vuphp.com/wp-json/wp/v2/product?page=${page}`)
         .then(res => {
            return res.data;
         }).catch((error) => { console.log(error) })
}

export const getPostByUser = (id) => {
   return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${ id }`)
         .then(res => {
            return res.data;
         }).catch((error) => { console.log(error) })
}