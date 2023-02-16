const express = require("express");
const app = express();
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Hello Poeple! This is the initial API setup');
});

app.listen(4000);