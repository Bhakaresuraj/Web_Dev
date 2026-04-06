
const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

main().then(() => {
    console.log("Database connected successfully...........!");
}).catch((err) => {
    console.log("Error while connecting database .......:", err);
});

let orderSchema = new mongoose.Schema(
    {
        items: String,
        price: Number
    }
);

const Order = mongoose.model("Order", orderSchema);

const addOrder = async () => {
    let result = await Order.insertmany({
        item: "Paneer",
        price: 120
    },
        {
            item: "Kheer",
            price: 100
        },
        {
            item: "Biscuit",
            price: 20
        }
    );
    console.log(result);

}
