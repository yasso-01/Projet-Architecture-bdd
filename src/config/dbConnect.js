const mongoose = require('mongoose');


module.exports = function dbConnect() {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect('mongodb://localhost:27017/articles')
    } catch(err) {
        console.log(err);
        process.exit(1)
    }
}