// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create an array of comments
const comments = [{
    username: 'Alice',
    comment: 'I love your blog!',
}, {
    username: 'Bob',
    comment: 'Good job',
}];