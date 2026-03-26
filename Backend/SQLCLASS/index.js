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

console.log(getRandomUser);

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
