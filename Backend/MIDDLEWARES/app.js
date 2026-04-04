const express = require("express");
const app = express();
const port = 8080;


/*
// Simple middlewares.......
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

*/

/*
// utility middleware---------------
app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString()
    console.log(req.method, req.hostname, req.path, req.time);
    return next();
});


*/

// app.get("/random",(req, res, next)=> {
//     console.log("I am only for random.....");
//     next();
// });

app.use("/api", (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    throw new Error("Access Denied..............!");

});

app.get("/api", (req, res) => {
    res.send("data");
})





// Error handling --------

// app.get("/err", (req, res) => {
//     abcd = absd;

// });
// app.use((err, req, res, next) => {
//     console.log("--------ERROR-------------");
//     next(err);
//     // next();
// });


app.get("/", (req, res) => {
    console.log("Hello , this is route ");
    res.send("Server is working .......!");
});


app.listen(port, () => {
    console.log("Server is working.....!");
});


