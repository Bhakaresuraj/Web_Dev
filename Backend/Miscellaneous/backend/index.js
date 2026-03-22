const express = require("express");
const app = express();
let port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(port, () => {
    console.log(`Server is Running at port ${port}`);
})


app.get("/register", (req, res) => {
    let { user, pass } = req.query;
    res.send(`Standered get respoce . Welcome ${user}`)
})
app.post("/register", (req, res) => {
    let {user,password} = req.body;
    console.log(user);
    console.log(password);
    res.send(`Standered post respoce . Welcome ${user   }`);
})