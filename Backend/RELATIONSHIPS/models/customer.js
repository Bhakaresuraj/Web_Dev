


//  Implementation of one to many |( Approach 2 ) of mongo relationships..........

const mongoose = require("mongoose");


// database connection
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

main().then(() => {
    console.log("Database connected successfully...........!");
}).catch((err) => {
    console.log("Error while connecting database .......:", err);
});



// Defining schema for Order and Customer
const orderSchema = new mongoose.Schema(
    {
        item: String,
        price: Number
    }
);

const customerSchema = new mongoose.Schema({
    name: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
})


// mongoose middleware ----

// pre middleware .......
// customerSchema.pre("findOneAndDelete", async () => {

//     console.log("This is mongoose pre middleware");

// });
// post mddleware .....
customerSchema.post("findOneAndDelete", async (customer) => {

    console.log("This is mongoose post middleware data ...");
    if (customer.orders.length) {
        let res = await Order.deleteMany({ _id: { $in: customer.orders} });
        
        console.log("Orders of customer deleted  :",res);
    }
    // console.log(data)
})


// creating models for Order and Customer 
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);




//  Functions 

// Add order function
const addOrder = async () => {
    let result = await Order.insertMany([
        {
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
    ]
    );
    console.log(result);

}
// addOrder();



// Add customer function
const addCustomer = async () => {
    let customer1 = new Customer({
        name: "Patil"
    });

    let order1 = new Order({
        item: "Panipuri",
        price: 326
    });

    customer1.orders.push(order1);

    await order1.save();
    let result = await customer1.save();
    console.log("Customer created successfully --");
    console.log(result);

}
// addCustomer();



//  function for finding customer----
const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
}
// findCustomer();



//  Function for delition customer .....
let delCustomer = async () => {
    // console.log("Inside delCustomer function");
    let data = await Customer.findByIdAndDelete('69d49cb09147c14e50e3c731');
    console.log("deleted Data :", data);
    // console.log("Leaving delCustomer function");
}
delCustomer();





