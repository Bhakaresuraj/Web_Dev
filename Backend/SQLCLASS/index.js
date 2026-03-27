const express = require("express");
const app = express();
const path = require("path");
let port = 8080;
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Mydb',
    password: 'Bhakare@123'
});
app.set("views", path.join(__dirname, "/views"));
app.listen(port, () => {
    console.log("Server is running.");

});
app.get("/", (req, res) => {
    let q = "SELECT COUNT(*) FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let data = result[0]["COUNT(*)"];
            res.render("home.ejs", { data });
            // res.send(result);
        })
    } catch (err) {
        res.send(`Error : ${err}`);
    }
})

//  Route for show all users .->
app.get("/users", (req, res) => {
    let q = "SELECT * FROM user";
    connection.query(q, (err, result) => {
        if (err) {
            console.error("Error :", err);
            return res.status(400).send("Database error");
        }
        if (result.length === 0) {
            return res.send("No user's found.........!");
        }
        let data = result;
        res.render("show.ejs", { data });
    });
});


//  Route for getting edit form ....->
app.get("/users/:id/edit", (req, res) => {

    let { id } = req.params;
    let q = "SELECT * FROM user WHERE id = ?";
    connection.query(q, [id], (err, result) => {
        if (err) {
            console.error("Database Error :", err);
            return res.status(404).send("Database error");
        }
        let data = result[0];
        console.log("---------------------------------------");
        console.log(data);
        res.render("edit.ejs", { data });
    });
});


//  route for handiling edit request and update username in my database.....
app.patch("/users/:id", (req, res) => {
    let { id } = req.params;
    let { username, password } = req.body;
    console.log("new Data :", id, " -> ", username, " -> ", password);
    let q = "SELECT * FROM user WHERE id = ?";
    // let q = "UPDATE user SET username = ? WHERE id= ?";

    connection.query(q, [id], (err, result) => {
        if (err) {
            console.error("Error in updating username :", err);
            return res.status(500).send("Username not updated dut some error ");
        }
        let oldData = result[0];
        console.log("oldData :", oldData);
        if (oldData.password === password) {
            console.log("oldData & new data has same password ");
            let uquery = "UPDATE user SET username = ? WHERE id= ?";
            let newData = [username, id];
            connection.query(uquery, newData, (err, result) => {
                if (err) {
                    console.error("Error in updating username :", err);
                    return res.status(500).send("Username not updated dut some error ");
                }
                console.log("User updated successfully .......!");
            });
        }
        else {
            // alert("Data not updated : Enter correct password");
            console.log("Data not updates , Enter correct password : ");
        }
        res.redirect("/users");
    })
});


// Destroy route
app.delete("/users/:id", (req, res) => {
    let { id } = req.params;
    res.send("user deleted successfully");
});















































































// inserting fake data into database.......
/*
// faker package
const { faker } = require("@faker-js/faker");
let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ]
}
// console.log(getRandomUser);




// mysql package
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Mydb',
    password: 'Bhakare@123'
});
let q = "INSERT INTO user (id,username,email,password) VALUES ?";

let user = [];

for (let i = 0; i < 100; i++) {
    user.push(getRandomUser());
}

try {
    connection.query(q, [user], (err, result) => {
        if (err) throw err;
        console.log(result);
    })
}
catch (err) {
    console.log(err);
}
connection.end();
*/
