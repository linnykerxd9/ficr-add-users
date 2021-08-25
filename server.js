const express = require('express');

const app = express();

const port = process.env.PORT || 3003;


app.get('/', (req, res) => {
    res.send("API DE CADASTROS DE USUARIOS");
});

app.listen(port);