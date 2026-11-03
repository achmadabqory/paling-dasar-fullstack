const express = require ("express");
const mysql = require("mysql")
const app = express();
const cors = require("cors");

app.use(cors());

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "belajar_fullstack",
});

database.connect((err) =>{
    if(err) throw err;
    console.log("Database connected");
})

//? ambil semua data users
app.get("/api/v1/users", (req, res) => {
    console.log("GET API USER DI REQUEST")
    database.query("select * from users", (err,rows) => {
        if (err) throw err;
        res.json({
            success: true,
            Message: "getting users data",
            data: rows,
        });
    });
});

//? jalanin server nya di port 3001
app.listen(3001, () => {
    console.log("server is running on port 3001");
    
});