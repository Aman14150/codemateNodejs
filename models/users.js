const mongoose =  require('mongoose');

const { Schema, model} = mongoose;

const userDataSchema = new mongoose.Schema({
    first_name: {type: String, required: true },
    last_name: {type: String, required: true },
    email: { type: String, required: true},
    gender: { type: String, required: true},
    phone: { type: String, required: true},
})

const UserDataModel= model('UsersData', userDataSchema);
module.exports = UserDataModel;