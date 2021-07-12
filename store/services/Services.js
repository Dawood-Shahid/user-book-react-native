import axios from 'axios';

// const fetchUsers = () => axios.get('https://randomuser.me/api/?page=1&results=5&seed=abc');
const fetchUsers = () => axios.get('https://randomuser.me/api/?results=10');
// const fetchUsers = () => axios.get('https://randomuser.me/api/');

export default fetchUsers;
