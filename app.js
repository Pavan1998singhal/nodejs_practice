const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json())

const db = require('../encrpt-decrpt-password-using-bycrpt/dbConnection')
db.on('open', ()=>{
    console.warn('successfully connected with db!!');
});

app.use('/auth', userRoutes)

const port = 8000;
app.listen(port, ()=>{
    console.warn(`server started with port ${port}`);
});
