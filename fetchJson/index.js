"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
// URL to a random Todo List Item
var url = 'https://jsonplaceholder.typicode.com/todos/1';
// HTTP Request to fetch the data
axios_1.default.get(url).then(function (response) {
    console.log(response.data);
});
