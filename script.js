// 1st
// const mongoose = require('mongoose');
// //requiring the User from the userModel
// const User = require('./User')
// mongoose.connect("mongodb://localhost/testdb");

// //create a new user
// const user = new User({ name: "paul", age: 26 })

// //save the user to the db
// user.save().then(() => console.log("user saved"));
//============================================================================
 //Second

// const mongoose = require('mongoose');
// const User = require("./User")

// mongoose.connect("mongodb://localhost/testdb")


// async function run() {
//     const user = new User({ name: "Fred", age: 26 })
//     await user.save()
//     console.log(user)
// }
// run()
//================================================================

const mongoose = require("mongoose");
const Car = require("./Car")

mongoose.connect("mongodb://localhost/testdb")

async function show() {
    const car = new Car({ make: "Audi", model: "S5", year: 2022, odometer: 2000})
    await car.save()
    console.log(car)
}

show()