const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let filePath = '/public';
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, filePath)));

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/online', (req, res) => {
    res.sendFile(path.join(__dirname, filePath, '/online/index.html'));
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, filePath, '/index.html'));
})

app.get('/library', (req, res) => {
    res.sendFile(path.join(__dirname, filePath, '/apps/library.html'));
});

app.get('/homework', (req, res) => {
    res.sendFile(path.join(__dirname, filePath, '/apps/homework.html'));
});

app.get('/textformat', (req, res) => {
    res.sendFile(path.join(__dirname, filePath, '/apps/textformat.html'));
});

app.get('/todo', (req, res) => {
    res.sendFile(path.join(__dirname, filePath, '/apps/todo.html'));
});

app.get('/mathquiz', (req, res) => {
    res.sendFile(path.join(__dirname, filePath, '/quiz/math.html'));
});

app.get('/englishquiz', (req, res) => {
    res.sendFile(path.join(__dirname, filePath, '/quiz/english.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, filePath, '/about.html'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
