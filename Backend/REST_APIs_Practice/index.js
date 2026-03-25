const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
let port = 3000;

app.listen(port, () => {
    console.log("Server is running ...");
});

app.get("/", (req, res) => {
    res.send("Server is Working fine...");
});

let posts = [{ id: uuidv4(), name: "suraj", content: "hello" },
{ id: uuidv4(), name: "Yash", content: "Hi" }
];

app.get("/posts", () => {
    app.render("index.ejs");
})