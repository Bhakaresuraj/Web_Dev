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

// ...existing code...

// edit  form route -> edit form -> patch request 
app.get("/users/:id/edit", (req, res) => {
    let { id } = req.params;
    let selectQ = "SELECT * FROM user WHERE id = ?";
    try {
        connection.query(selectQ, [id], (err, result) => {
            if (err) throw err;
            let data = result[0];
            // console.log(result)
            res.render("edit.ejs", { data });
        });
    } catch (err) {
        res.send(`Error DB: ${err}`);
    }
})
/*
// update route
app.patch("/users/:id", (req, res) => {
    let { id } = req.params;
    // let q = `SELECT * FROM user WHERE id= `;
    console.log(id);

    let selectQ = "SELECT * FROM user WHERE id = ?";
    connection.query(selectQ, [id], (err, result) => {
         if (result.length === 0) {
            return res.status(404).send("User not found");
        }
        res.send(result);

    })
    // try {

    //     connection.query(q, (err, result) => {
    //         if (err) throw err;
    //         let data = result[0];
    //         console.log(result);
    //         res.send(data);

    //         // res.render("edit.ejs", { data });
    //     });
    // } catch (err) {
    //     res.send(`Error DB: ${err}`);
    // }
});
*/
// ...existing code...

// filepath: /home/bhakare/Desktop/Web_Dev/Backend/SQLCLASS/index.js
// ...existing code...
// GET edit form route
app.get("/users/:id/edit", (req, res) => {
    let { id } = req.params;
    let selectQ = "SELECT * FROM user WHERE id = ?";
    
    console.log("GET ID:", id);
    
    connection.query(selectQ, [id], (err, result) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).send(`Error DB: ${err}`);
        }
        
        if (result.length === 0) {
            return res.status(404).send("User not found");
        }
        
        let data = result[0];
        console.log("User found:", data);
        res.render("edit.ejs", { data });
    });
});

// // PATCH update user route
// app.patch("/users/:id", (req, res) => {
//     let { id } = req.params;
//     let updates = req.body;

//     console.log("PATCH ID:", id);
//     console.log("Updates received:", updates);

//     // Check if user exists
//     let selectQ = "SELECT * FROM user WHERE id = ?";
//     connection.query(selectQ, [id], (err, result) => {
//         if (err) {
//             console.error("Database error:", err);
//             return res.status(500).send(`Error DB: ${err}`);
//         }

//         if (result.length === 0) {
//             console.log("No user found with id:", id);
//             return res.status(404).send("User not found");
//         }

//         console.log("User found, proceeding with update");

//         // Build dynamic update query based on provided fields
//         let fields = [];
//         let values = [];

//         if (updates.username) {
//             fields.push("username = ?");
//             values.push(updates.username);
//         }
//         if (updates.email) {
//             fields.push("email = ?");
//             values.push(updates.email);
//         }
//         if (updates.password) {
//             fields.push("password = ?");
//             values.push(updates.password);
//         }

//         if (fields.length === 0) {
//             return res.status(400).send("No fields to update");
//         }

//         // Execute UPDATE query
//         let updateQ = `UPDATE user SET ${fields.join(", ")} WHERE id = ?`;
//         values.push(id);

//         connection.query(updateQ, values, (err, updateResult) => {
//             if (err) {
//                 console.error("Update error:", err);
//                 return res.status(500).send(`Error DB: ${err}`);
//             }
//             console.log("User updated successfully");
//             res.redirect("/users");
//         });
//     });
// });





















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
