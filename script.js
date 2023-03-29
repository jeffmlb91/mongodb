const mongoose = require('mongoose');
//requiring the User from the userModel
const User = require('./User')
mongoose.connect("mongodb://localhost/testdb");

//create a new user
const user = new User({ name: "paul", age: 26 })

//save the user to the db
user.save().then(() => console.log("user saved"));