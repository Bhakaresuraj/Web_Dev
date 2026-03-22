




const express = require("express");
const app = express();
const port = 3000;



// -----------views directory in ejs----------------
const path = require("path");
app.listen(port, () => {
    console.log("App is listening .....");
});
app.set("view engine", "ejs");


app.set("views", path.join(__dirname, "/views"));

app.get("/home", (req, res) => {
    res.send("This is home");
})
app.get("/", (req, res) => {
    res.render("home.ejs");
})


// ---------------roll dice --------
// ----Passing data to ejs-----------
app.get("/rolldice", (req, res) => {
    let data = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { data });
})



// ------------instagram EJS template------------

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    // let followers=['suraj','yash','supriya','omkar'];
    const instadata = require("./data.json");
    let data = instadata[username];
    console.log(data);
    if (data) {
        res.render("suraj.ejs", { data });
    }
    else{
        res.render("error.ejs");
    }
})