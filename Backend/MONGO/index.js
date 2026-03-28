const mongoose = require("mongoose");


main().then((res) => {
    console.log("Database connected......!");
})
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// creating document schema using mongoose library

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

// creating model class for constructing document .....

const User = mongoose.model("User", userSchema);
// const Employee=mongoose.model("Employee",userSchema);

// let user1 = new User({ name: "adam", email: "adam123@gmail.com", age: 21 });
// let user2 = new User({ name: "suraj", email: "suraj@gmail.com", age: 20 });
// user1.save();
// user2.save().then((res) => {
//     console.log(res);
// })
//     .catch((err) => {
//         console.log(err);
//     })

// User.insertMany([{ name: "sudarshan", age: 21, marks: 100 }, { name: "Sahil", age: 22, marks: 80 }, { name: "Yash", age: 20, marks: 98 }]).then((res) => {
//     console.log(res);
// })


// for finding all the documents 
// User.find().then((res) => {
//     console.log(res);
// })
//     .catch((err) => {
//         console.log(err);
//     });

// User.find({ name: "Yash" }).then((res) => {
//     console.log("Filtered data");
//     console.log(res);
// })
//     .catch((err) => {
//         console.log(err);
//     })
// User.find({ age: { $gt: 20 } }).then((res) => { console.log(res); })
//     .catch((err) => { console.log(err); })


//  Update in mongoose 

// User.updateOne({ name: "adam" }, { name: "lala" }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// User.updateMany({ age: { $lt: 30 } }, { age: 21 }).then((res) => {
//     console.log(res);
// })
//     .catch((err) => {
//         console.log(err);
//     })

// User.findOneAndUpdate({ name: "suraj" }, { name: "Bhakare" }, { new: true }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })


// Delete in mongoose
User.deleteOne({ name: "lala" }).then((res) => {
    console.log(res);
})
    .catch((err) => {
        console.log(err);
    });

User.deleteMany({ name: "suraj" }).then((res) => {
    console.log(res);
})
    .catch((err) => {
        console.log(err);
    })