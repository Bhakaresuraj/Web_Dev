const express = require("express");
const app = express();
// unique id packare...
const { v4: uuidv4 } = require("uuid");

// path package 
const path=require("path"); 
let port = 3000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express .static(path.join(__dirname,"/public/css")));

app.listen(port, () => {
    console.log("Server is running ...");
});

app.get("/", (req, res) => {
    res.send("Server is Working fine...");
});

let posts = [{ id: uuidv4(), name: "suraj", content: "hello" },
{ id: uuidv4(), name: "Yash", content: "Hi" }
];

// index page render .....
app.get("/posts", (req,res) => {
    res.render("index.ejs",{posts});
})

