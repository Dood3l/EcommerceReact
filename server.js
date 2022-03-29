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
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b09453fff7c96a',
    password: '43adde49',
    database: 'heroku_e1c0b0c780ef5e7'
});



db.connect(err => {
    if(err) {
        console.log('from db', err)
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
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, './build', 'index.html'))
})
const host = '0.0.0.0';
const port = process.env.PORT || 5000;
app.listen(port, host, function() {
    console.log(`Express is working on port ${port}`)
});

// const server = app.listen(process.env.PORT || 5000, () => {
//     const port = server.address().port
//     console.log(`Express is working on port ${port}`)
// });

// db = mysql.createConnection({
//     host: process.env.REACT_APP_DBHOST || 'localhost',
//     user: process.env.REACT_APP_DBUSER || 'root',
//     password: process.env.REACT_APP_DBPASSWORD ||'Dood3l',
//     database: process.env.REACT_APP_DB || 'ecomv2'
// });
