import axios from "axios";

// URL to a random Todo List Item
const url = 'https://jsonplaceholder.typicode.com/todos/1';

// HTTP Request to fetch the data
axios.get(url).then(response => {
    console.log(response.data);
});