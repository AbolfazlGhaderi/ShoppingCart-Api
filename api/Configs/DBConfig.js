import mysql from 'mysql'

export const DB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shoppingcart-api"
});