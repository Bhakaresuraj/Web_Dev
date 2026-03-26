const express = require("express");
const app = express();
const { faker }=require("@faker-js/faker");
let port = 3000;
app.listen(port, () => {
    console.log("Server is running fine");
})

let getRandomUser=()=>{
    return {
        userId : faker.string.uuid(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        password : faker.internet.password()
    }
}

console.log(getRandomUser);