// const express = require("express");
// // console.log(express());
// const app = express();
// // console.dir(app);
// const port = 3000;
// app.listen(port, () => {
//     console.log(`App is listining on port ${port}`);
// })
// app.use((req, res) => {
//     console.log("request recived");
//     res.send("<h1>This is h1</h1>");
// });

// ---------get in express............
/* const express=require("express");
let app=express();

let port=3000;
app.listen(port,()=>{console.log("Listing...")})

app.get("/home",(req,res)=>{
    res.send("Hi");

})

app.get("/search",(req,res)=>{
    res.send("search");

})
app.get("/help",(req,res)=>{
    res.send("help");

})
app.get("/about",(req,res)=>{
    res.send("about");

})
// app.get('/*' , (req,res)=>{
//     res.send("Incorrect path.....!");

// });

app.use((req,res)=>{
    res.status(404).send("Incorrect path......!");
})
// app.use((req,res)=>{

//     // it sends same response for different routess ....
//     console.log("Resquest recived");
//     res.send("Hello");
// })
*/



/*
// ---------path parameters and handling query strings--------- 
const express = require("express");
let port = 3000;
const app = express();

app.listen(port, () => {
    console.log("app is listining");
});

app.get("/:username/:id", (req, res) => {
    // Path pra
    console.log(req.params);
    let greet = `<h1>Hello ${req.params.username} Good Morning .....! </h1>`;
    res.send(greet);

})
app.get("/search", (req, res) => {

    // if we search for query in url like http://localhost:3000/search?q=apple
    console.log(req.query);
    let {q}=req.query;
    if(!q){
        res.send(`<h1>Nothing Searched......!</h1>`);
    }
    res.send(`<h1> The search results for query : ${q} </h1>`);

})

 */



