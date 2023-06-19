import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Books = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8181/books")
        setBooks(res.data)

      }
      catch (err) {
        console.log(err)
      }
    }
    fetchAllBooks()
  }, [])
  return (
    <div className="">
      <div>
        <h1>Book Shop</h1>
        {
          books.map((book, i) => (
            <div className="books" key={book.id}>
              {book.cover && <img src={book.cover} alt='' />}
              <h2>{book.title}</h2>
              <p>{book.desc} </p>
              <span>{book.price}</span>
            </div>
          ))}
      </div>
      <button><Link to='/add'>Add Book</Link>  </button>
    </div>

  )
}

export default Books