const mongoose = require('mongoose');

const url = "mongodb+srv://nasimkhan75709:fiit1234@cluster0.iykte6y.mongodb-qa.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
    .then((result) => {
        console.log('database connected');
    }).catch((err) => {
        console.log(err);
    });

module.exports = mongoose;