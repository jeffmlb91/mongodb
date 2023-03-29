// const mongoose = require('mongoose');
// //requiring the User from the userModel
// const User = require('./User')
// mongoose.connect("mongodb://localhost/testdb");

// //create a new user
// const user = new User({ name: "paul", age: 26 })

// //save the user to the db
// user.save().then(() => console.log("user saved"));
//============================================================================
const mongoose = require('mongoose');
const User = require("./User")

mongoose.connect("mongodb://localhost/testdb")


async function run() {
    const user = new User({ name: "Fred", age: 26 })
    user.save()
    console.log(user)
}
run()