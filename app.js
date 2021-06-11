const express = require('express');
const bodyParser = require('body-parser');
const mailRoutes = require('./mailRoutes');

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

app.use('/', mailRoutes);

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
