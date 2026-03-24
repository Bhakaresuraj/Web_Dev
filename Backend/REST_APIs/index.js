const express = require("express");
const app = express();
const path = require("path");
const { text } = require("stream/consumers");
let port = 3000;
var methodOverride = require('method-override')
const { v4: uuidv4 } = require('uuid');
// For parsing the data using middlewares ......
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'))

app.listen(port, () => {
    console.log(`Server is running on the port :${port} .`);
});

// setting ejs 
app.set("view engine", "ejs");
// telling the path of view and public folder to server
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public/CSS")));
app.use(express.static(path.join(__dirname, "/public/JS")));


// creating routes..
app.get("/", (req, res) => {
    res.send("Server working Well.........!");
})

let posts = [{
    id: uuidv4(),
    username: "suraj",
    content: "Learning REST "
},
{
    id: uuidv4(),
    username: "Rahul",
    content: "Learning dsa "
},
{
    id: uuidv4(),
    username: "Yash",
    content: "Learning Aptitude "
}

];
// 1 Index Route.......
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// route for creating new post form 
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// route for  taking data from new post and view all posts
app.post("/posts", (req, res) => {
    console.log(req.body);
    let { username, content } = req.body;
    posts.push({
        id: uuidv4(),
        username,
        content
    });
    res.redirect("http://localhost:3000/posts");
});


app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.render("show.ejs", { post });
});



// route for creating update form 
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.render("edit.ejs", { post });
});

// route for updating content of the post....
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    console.log(post);
    res.redirect("/posts");
});

// Delete rroute

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})


