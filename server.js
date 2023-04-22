const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const mysql = require("mysql");
const router = express.Router();
const express = require("express")
const app = express()

const db = mysql.createPool({
    host: process.env.REACT_APP_HOST_AWS_SQL,
    user: process.env.REACT_APP_USER_AWS_SQL,
    password: process.env.REACT_APP_PASSWORD_AWS_SQL,
    database: process.env.REACT_APP_DATABASE_AWS_SQL,
    PORT: 3306
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
    res.send("it worked" + process.env.REACT_APP_HOST_AWS_SQL)
    const sqlSelect = "Select * From users;"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        console.log("ddd = " + result)
        console.log("err = " + err)
    });
})

app.listen(process.env.PORT || 5000)
module.exports = app 