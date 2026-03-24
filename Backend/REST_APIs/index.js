const express= require("express");
const app=express();
const path =require("path");
const { text } = require("stream/consumers");
let port=3000;

// For parsing the data using middlewares ......
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port,()=>{
    console.log(`Server is running on the port :${port} .`);
});



// setting ejs 
app.set("view engine","ejs");
// telling the path of view and public folder to server
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public/CSS")));
app.use(express.static(path.join(__dirname,"/public/JS")));


// creating routes..

app.get("/",(req,res)=>{
    res.send("Server working Well.........!");
})
