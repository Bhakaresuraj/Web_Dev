// require modules ------------
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js")
let port = 8080;

// setting ejs ,views, public -----------------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public/CSS")));
app.use(express.static(path.join(__dirname, "/public/JS")));

// connnecting Database .....
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main().then(() => {
    console.log("Database Connection Successfull..!");
}).catch((err) => {
    console.log("Err :", err);
})



// listening Request--------
app.listen(port, () => {
    console.log("app is listening. .....!");
})
app.get("/", (req, res) => {
    res.send("Server is working fine...........!");
})

