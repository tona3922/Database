import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "D@ngthinh1402",
    database: "ass2",
    multipleStatements: true
})

app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    res.json("hello this is backend");
})

app.post("/books", (req, res) => {
    const q = "INSERT INTO book (`book_name`,  `book_id`, `edition`, `quanity`, `bAuthor_id`, `bCat_id`, `price`) VALUES (?)"
    const values = [
        req.body.book_name,
        req.body.book_id,
        req.body.edition,
        req.body.quanity,   
        req.body.bAuthor_id,
        req.body.bCat_id,
        req.body.price,
    ];
    db.query(q,[values], (err,data) => {
        if(err) return res.json(err);
        return res.json("Book has been inserted Successfully")
    })
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM book JOIN AUTHOR ON bAuthor_id = author_id";
    db.query(q, (err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get("/books/:value",(req, res) => {
    const value = req.params.value;
    let  q = "SELECT * FROM book JOIN AUTHOR ON bAuthor_id = author_id order by ";
    q += value; 
    db.query(q, [value],(err,data) => {
        if(err) return res.json(err)
        return res.json(data);
    })
})

app.delete("/books/:book_id", (req, res) => {
    const bookId = req.params.book_id;
    const q = "DELETE FROM book WHERE book_id = ?"

    db.query(q, [bookId],(err,data) => {
        if(err) return res.json(err);
        return res.json("The book has been deleted successfully");
    })
})

app.put("/books/:book_id",(req,res) =>{
    const bookId = req.params.book_id;
    const q = "UPDATE book SET `book_name`= ?, `edition`=?, `quanity`=?,`bAuthor_id`=?,`bCat_id`=?, `price`=?  WHERE book_id = ?"

    const values = [
        req.body.book_name,
        req.body.edition,
        req.body.quanity,   
        req.body.bAuthor_id,
        req.body.bCat_id,
        req.body.price,
      ];

    db.query(q, [...values, bookId],(err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8800, ()=>{
    console.log('Connected to backend!!')
})

