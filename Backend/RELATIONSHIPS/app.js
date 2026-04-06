const express = require("express");
const app = express();
const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

main().then(() => {
    console.log("Database connected successfully...........!");
}).catch((err) => {
    console.log("Error while connecting database .......:", err);
});
