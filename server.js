const path = require('path')

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
// var fs = require('fs');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dood3l',
    database: 'ecomv2'
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

