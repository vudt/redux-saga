export default function getUsers(page) {
    return fetch('https://reqres.in/api/users?page=' + page)
        .then((response) => response.json())
        .then((responseData) => {
            return responseData;
        })
        .catch((error) => { console.log(error) })
}