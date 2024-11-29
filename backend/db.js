const mongoose = require('mongoose');

//MongoDB Connection

const url= "mongodb+srv://madhavofficial23:hOItdgyZ0qclx9sc@cluster0.rpa74.mongodb.net/campusquerydbX";


module.exports.connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB connected successfully")
    }).catch((error) => console.log("Error: ",error))
}