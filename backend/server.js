const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const port = 8081;
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Gj@19122001",
    database: "signup"
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email`=? AND `password`=?";
 
    db.query(sql, [req.body.email,req.body.password], (err, data) => {
        if (err) {
            // console.log(err);
            return res.json("Error")
        }
        if (data.length>0) {
            
            return res.json("Success")
        }
        else{
            console.log("here");
            return res.json("Failed")
        }
    })
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES(?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
    ]
    
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error")
        }
        console.log(res.json(data));
        return res.json(data);
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))