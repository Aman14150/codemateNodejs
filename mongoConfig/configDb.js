const mongoose = require('mongoose');

const connectDb = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/nemtask')
        console.log('Connection Sucessfull 1')
    } catch (err) {
        console.log(err)
    }
}
module.exports = {connectDb};