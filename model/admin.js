const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstname: String,
    lastname: String,
    isAdmin: { type: Boolean, default: false }
})

const Admin = mongoose.model("Admin", schema)

module.exports = Admin;