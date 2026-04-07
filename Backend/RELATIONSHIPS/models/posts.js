const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

main().then(() => {
    console.log("Database connected successfully...........!");
}).catch((err) => {
    console.log("Error while connecting database .......:", err);
});



const userSchema = new mongoose.Schema(
    {
        username: String,
        email: String
    }
);

const postSchema = new mongoose.Schema({
    content: String,
    likes: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});


const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);


const addUser = async () => {
    // await User.deleteMany({});
    let result = await User.insertMany([
        {
            username: "Dipak",
            email: "dipak@gmail.com"
        },
        {
            username: "yash",
            email: "yash@gmail.com"
        }
    ]);
    console.log(result);

}
// addUser();


const addPost = async () => {
    let post1 = new Post({
        content: "Hello",
        likes: 10
    });
    let user1 = await User.findOne({ username: "Dipak" });
    post1.user = user1;
    let result = await post1.save();
    console.log(result);
}
// addPost();


const showPost = async () => {
    let result = await Post.find({}).populate("user");
    console.log(result);


}

showPost();


