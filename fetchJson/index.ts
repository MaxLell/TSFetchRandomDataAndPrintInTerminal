import axios from "axios";

// URL to a random Todo List Item
const url = 'https://jsonplaceholder.typicode.com/todos/1';

// HTTP Request to fetch the data
axios.get(url).then(response => {
    const todo = response.data;
    
    const id = todo.ID;
    const title = todo.Title;
    const finished = todo.finished;

    console.log(`
        The Todo with ID ${id}
        Has a title of: ${title}
        Is it finished? ${(finished) ? "Yep" : "No"}
    `)
});