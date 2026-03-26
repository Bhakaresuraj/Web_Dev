const express = require("express");
const app = express();
// unique id packare...
const { v4: uuidv4 } = require("uuid");

// path package 
const path = require("path");
let port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public/css")));

app.listen(port, () => {
    console.log("Server is running ...");
});

app.get("/", (req, res) => {
    res.send("Server is Working fine...");
});

let posts = [{ id: "1", name: "suraj", content: "hello" },
{ id: "2", name: "Yash", content: "Hi" }
];

// index page render .....
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(post);
    

    // res.send(post);
    res.render("show.ejs",{ post });

})

