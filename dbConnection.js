const mongoose = require('mongoose');
const url = 'mongodb://localhost/learning'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const con = mongoose.connection;

module.exports = con;