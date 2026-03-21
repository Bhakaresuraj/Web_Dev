


/*

-----------views directory in ejs----------------
const express=require("express");
const app=express();
const port=3000;
const path=require("path");
app.listen(port,()=>{
    console.log("App is listening .....");
});
app.set("view engine","ejs");


app.set("views",path.join(__dirname,"/views"));

app.get("/home",(req,res)=>{
    res.send("THis is home");
})
app.get("/",(req,res)=>{
    res.render("home.ejs");
})
*/

