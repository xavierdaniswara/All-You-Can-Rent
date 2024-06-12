const mongoose = require('mongoose');

const accSchema = new mongoose.Schema({
    id: {type: String, unique: true},
    firstname: {type: String, required: true, unique: true},
    lastname: {type: String, required: true, unique: true},
    phonum: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    pawd: {type: String, required: true},
});
const account = mongoose.model('acount', accSchema);

module.exports = {account};