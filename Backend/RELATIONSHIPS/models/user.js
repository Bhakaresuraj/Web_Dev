
const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

main().then(() => {
    console.log("Database connected successfully...........!");
}).catch((err) => {
    console.log("Error while connecting database .......:", err);
});

let userSchema = new mongoose.Schema(
    {
        username: String,
        addresses: [
            {
                _id: false,
                location: String,
                city: String
            },
        ],

    }
);

const User = mongoose.model("User", userSchema);

const saveUser = async () => {
    let user1 = new User({
        username: "sherlockholmes",
        addresses: [{ location: "malwadi", city: "Shirur" }],
    })
    user1.addresses.push({ location: "Akurdi", city: "pune" });

    let result = await user1.save();
    console.log(result);
}

saveUser();

// User.deleteMany();





