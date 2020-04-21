const faker = require('faker');
const mysql = require('mysql');

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password: 'password',
    database : 'join_us'
  });

// let q = 'SELECT CURDATE() AS answer';

// let q = 'SELECT COUNT(*) AS TOTAL FROM users'

let q = 'INSERT INTO users (email) VALUES ("anna@gmail.com")';

connection.connect();

// connection.query(q, (error, results, fields) => {
//     if(error) throw error;
//     console.log(results);
// });

let person = {email: faker.internet.email(), created_at: faker.date.past()};

connection.query('INSERT INTO users SET ?', person, (error, result) => {
  if(error) throw error;
  console.log(result);
});

connection.end();

// generateAddress = () => {
// console.log(faker.internet.email());
// console.log(faker.date.past());
// }

// generateAddress();