const mongoose = require('mongoose')

const dbURI = "mongodb+srv://pepe:dev-2021@taskmanager.odia8.mongodb.net/taskmanager?retryWrites=true&w=majority"

mongoose.connect(dbURI)
    .then(() => {
        console.log('db connected');
    })
    .catch((err) => {
        console.log(err);
    })

