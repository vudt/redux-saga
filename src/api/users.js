export default function getUsers() {
    return fetch('https://reqres.in/api/users?page=1')
        .then((response) => response.json())
        .then((responseData) => {
            return responseData;
        })
        .catch((error) => { console.log(error) })
}