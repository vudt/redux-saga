import axios from 'axios';

export const getPosts = (page) => {
    return axios.get(`http://myrth.vuphp.com/wp-json/wp/v2/product?page=${page}`)
         .then(res => {
            console.log(res);
            return res.data;
         }).catch((error) => { console.log(error) })
}