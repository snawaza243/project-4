import express, { json } from 'express'
const app = express();
app.use(express.json());
import mysql from 'mysql'
import cors from 'cors'
app.use(cors());




const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql1234",
  database: "bookshop"
})



app.get("/", (req, res) => {
  res.json("Hello backend is here")
})

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books"
  db.query(q, (data, err) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  })
})


app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?) "
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,

  ]
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err)
    return res.json("Book has been added successfully")
  })
})


app.listen(8181, () => {
  console.log("Backend connected")
})