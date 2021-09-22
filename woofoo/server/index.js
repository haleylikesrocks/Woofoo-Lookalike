const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const port = 3000;

let password = 'kake1211'
mongoose.connect(`mongodb+srv://patroclus:${password}>@woofoo-practice-app.jntfp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
let db = mongoose.connection;
db.on('error', () => console.error.bind(console, 'error connecting to mongodb'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../build')));

app.use('*', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'build')});
});

app.listen(3000, () => console.log("Server running on port " + port + "."));