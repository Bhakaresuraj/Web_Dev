const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

main().then(() => {
    console.log("Database connected Successfully.......!");
}).catch((err) => {
    console.log(err);
});


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    price: {
        type: Number
    }
});


const Book = mongoose.model("Book", bookSchema);

Book.insertOne({
    title: "Psychology Of Money",
    author: "Margan Hawjel",
    price: 250

}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

Book.insertOne({
    title: "Psychology Of Money",
    author: "Margan Hawjel",
    price: 250

}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
Book.insertOne({
    title: "Psychology Of Money",
    author: "Margan Hawjel"

}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});