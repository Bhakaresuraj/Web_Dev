// require modules ------------
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js")
let port = 8080;
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// express error

const ExpressError = require("./ExpressError.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// setting ejs ,views, public -----------------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public/CSS")));
app.use(express.static(path.join(__dirname, "/public/JS")));

// connnecting Database .....
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}
main().then(() => {
    console.log("Database Connection Successfull..!");
}).catch((err) => {
    console.log("Err :", err);
})

// listening Request--------
app.listen(port, () => {
    console.log("app is listening. .....!");
})

// index route
app.get("/", (req, res) => {
    res.send("Server is working fine...........!");
});

// Route for displaying all the chats....
app.get("/chats", async (req, res) => {
    let data = await Chat.find();
    // console.log(data);
    res.render("index.ejs", { data });
});

// Route for create new  chat....

app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404, "Page not found");
    res.render("new.ejs");
});

app.post("/chats", async (req, res, next) => {
    // console.log("Body :", req.body);
    try {
        let { from, to, message } = req.body;
        let chat = {
            from: from,
            to: to,
            message: message
        }
        await Chat.insertOne(chat);
        // .then((res) => {
        //     console.log("New Chat added :", res);
        // }).catch((err) => {
        //     console.log("New chat error :", err);
        // })
        // res.redirect("/chats");
    } catch (err) {
        next(err);
    }
});


// Route for update the chat .........

app.get("/chats/:id/edit", async (req, res) => {
    try {
        let { id } = req.params;
        console.log(id);
        let data = await Chat.findById(id);
        // console.log(data[0]);
        res.render("edit.ejs", { data });
    } catch (err) {
        next(err);
    }
});

app.patch("/chats/:id", async (req, res) => {
    try {

        let { id } = req.params;
        let { message } = req.body
        await Chat.updateOne({ _id: id }, { message: message }, { runValidators: false });
        res.redirect("/chats");

    } catch (err) {
        next(err);
    }
});



//  Destroy route............

app.delete("/chats/:id", async (req, res) => {
    try {
        let { id } = req.params;
        await Chat.deleteOne({ _id: id })

        //  rather than this thenandcatch we can use try and catch for creating our own error ...... 
        // .then((res) => {
        //     console.log(res);
        // }).catch((err) => {
        //     console.log("Error while deleting chat :", err);
        // });
        res.redirect("/chats");
    } catch (err) {
        next(err);
    }
})

// new show route for learning error handling in asynchronuos routes

function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => { next(err); })
    }
}

app.get("/chats/:id", asyncWrap(async (req, res, next) => {

    // try {
    let { id } = req.params;
    // console.log(id);
    let data = await Chat.findById(id);
    // console.log(data);
    if (!data) {
        next(new ExpressError(404, "Chat not found..."));
    }
    res.render("edit.ejs", { data });
    // } catch (err) {
    //     next(err);
    // }
}));

app.use((err, req, res, next) => {
    let { status = 500, message = "Error occured" } = err;
    res.status(status).send(message);
})