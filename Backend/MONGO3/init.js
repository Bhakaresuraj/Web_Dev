const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}
main().then(() => {
    console.log("Database Connection Successfull..!");
}).catch((err) => {
    console.log("Err :", err);
});

// Inserting data into chat collections...........

// let chat1 = new Chat({
//     from: "suraj", to: "sanskruti", message: "Hey...!", created_at: new Date()
// })

// chat1.save().then((res) => {
//     console.log(res);
// });

let chats = [
    {
        from: "suraj",
        to: "sanskruti",
        message: "Hey...!",
        created_at: new Date()
    },
    {
        from: "rahul",
        to: "priya",
        message: "How are you?",
        created_at: new Date()
    },
    {
        from: "amit",
        to: "neha",
        message: "Let's meet tomorrow.",
        created_at: new Date()
    },
    {
        from: "rohit",
        to: "pooja",
        message: "Did you complete the assignment?",
        created_at: new Date()
    },
    {
        from: "sneha",
        to: "akash",
        message: "Call me when you are free.",
        created_at: new Date()
    },
    {
        from: "vijay",
        to: "anita",
        message: "Good morning!",
        created_at: new Date()
    },
    {
        from: "karan",
        to: "meena",
        message: "I will reach in 10 minutes.",
        created_at: new Date()
    },
    {
        from: "deepak",
        to: "rutuja",
        message: "Can you send the notes?",
        created_at: new Date()
    },
    {
        from: "nikhil",
        to: "swati",
        message: "Let's start the project today.",
        created_at: new Date()
    },
    {
        from: "arjun",
        to: "kavya",
        message: "Happy Birthday!",
        created_at: new Date()
    }
];

Chat.insertMany(chats).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})