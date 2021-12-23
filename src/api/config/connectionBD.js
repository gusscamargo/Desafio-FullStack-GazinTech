const mysql = require("mysql2")

const connection = await mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "root",
    database: "desafio"
});

module.export = {connection}