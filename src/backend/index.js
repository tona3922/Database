import express, { response } from 'express';
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
try{
    const q = "INSERT INTO book (`book_name`,  `book_id`, `edition`, `quanity`, `bAuthor_id`, `bCat_id`, `price`,`bProvider_id`) VALUES (?)"
    const values = [
        req.body.book_name,
        req.body.book_id,
        req.body.edition,
        req.body.quanity,   
        req.body.bAuthor_id,
        req.body.bCat_id,
        req.body.price,
        req.body.bProvider_id
    ];
    db.query(q,[values], (err,data) =>{
        if(err) return res.json(err);
        res.json("Book has been inserted successfully");
    });

}catch(err){
    res.json(err);
}
})







app.post("/account", (req, res)=>{
    try{
    const q = "INSERT INTO account (`acc_name`,  `acc_id`, `lname`, `date_of_birth`, `address`, `sex`, `roles`, `passwords`) VALUES (?)"
    const infoValues = [
        req.body.username,
        req.body.id,
        req.body.fullname,
        req.body.bdate,   
        req.body.address,
        req.body.sex,
        req.body.role,
        req.body.password,
    ];
    db.query(q,[infoValues], (err,data) => {
        if(err) console.log(res.json(err));
        return res.json("Your account has been created successfully")
    })
}catch (error){
    res
    .status(400).json(error);
}
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM book JOIN AUTHOR ON bAuthor_id = author_id";
    db.query(q, (err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get("/login", (req, res) => {
    const q = "SELECT acc_name, passwords, roles, acc_id FROM ACCOUNT";
    db.query(q, (err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

//filter
app.get("/books/:value",(req, res) => {
    const value = req.params.value;
    let  q = "SELECT * FROM book JOIN AUTHOR ON bAuthor_id = author_id order by "
    q += value;
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data);
    })
})

app.get("/provide/:value",(req, res) => {
    const value = req.params.value;
    let  q = "SELECT * FROM book JOIN AUTHOR ON bAuthor_id = author_id  JOIN SUPPLIER ON bProvider_id = s_id JOIN account ON s_id = acc_id where acc_name = '"
    q += value;
    q += "'";
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data);
    })
})

//search

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

