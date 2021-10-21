const mongoose = require('mongoose')

// mongoose.connect(dbURI)
//     .then(() => {
//         console.log('db connected');
//     })
//     .catch((err) => {
//         console.log(err);
//     })

const connectDB = (url) => {
    return mongoose.connect(url)
}

module.exports = connectDB