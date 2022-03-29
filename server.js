const path = require('path')
// require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
// var fs = require('fs');
const app = express();

let db;
console.log(process.env)
db = mysql.createConnection({
    host: 'eyw6324oty5fsovx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com' || 'localhost',
    user: 'op22h1cgrl9tnjn9' || 'root',
    password: 'n8e85kxddgubuvwv' ||'Dood3l',
    database: 'vvypvweu7i2k8kvn' || 'ecomv2'
});



db.connect(err => {
    if(err) {
        return err;
    } else {
        console.log("db connection successful!")
    }
});

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (err, result) => {
        if (err) {
            console.log(err)
        }else {
            // var resultData = JSON.stringify(result)
            // var data = 
            res.send(result);
            // fs.writeFile('src/wagawgwag.json', resultData, finished);
            // function finished(err) {
            //     console.log('ALL GOOOD BRUHHHH.');
            // }
        }
    })
});
app.use(express.static(path.join(__dirname, './build')));
app.listen(process.env.PORT || 4000, () => {
    console.log(`Console server listening on port 4000.`)
});

// db = mysql.createConnection({
//     host: process.env.REACT_APP_DBHOST || 'localhost',
//     user: process.env.REACT_APP_DBUSER || 'root',
//     password: process.env.REACT_APP_DBPASSWORD ||'Dood3l',
//     database: process.env.REACT_APP_DB || 'ecomv2'
// });
