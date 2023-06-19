import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "mysql1234",
  // password: process.env.DB_KEY,

  database:"blogsamr"
})