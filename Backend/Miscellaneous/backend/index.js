const express = require("express");
const app = express();
let port = 3000;

app.listen(port, () => {
    console.log(`Server is Running at port ${port}`);
})


app.get("/register", (req, res) => {
    let {user,pass}=req.query;
    res.send(`Standered get respoce . Welcome ${user}`)
})
app.post("/register", (req, res) => {
    res.send("Standered POST respoce")
})