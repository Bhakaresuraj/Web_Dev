const express = require("express");
const app = express();
const port = 8080;



app.listen(port, () => {
    console.log("Server is working.....!");
});



app.use((req, res, next) => {
    console.log("Hi, I am  2nd middleware.");
    // res.send("Middleware finished...");
    next();
});
app.use((req, res, next) => {
    console.log("Hi, I am 1st middleware.");
    // res.send("Middleware finished...");
    next();
});


app.get("/", (req, res) => {
    console.log("Hello , this is route ");
    res.send("Server is working .......!");
});





