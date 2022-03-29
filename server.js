const path = require('path')
// require('dotenv').config() -- Best practice for security 
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
// Above this line are the dependencies

let db;
console.log(process.env)
db = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b09453fff7c96a',
    password: '43adde49',
    database: 'heroku_e1c0b0c780ef5e7'
});
// Above this line is the connection between React and Heroku mySQL cloud.

db.connect(err => {
    if(err) {
        console.log('from db', err)
        return err;
    } else {
        console.log("db connection successful!")
    }
});
// Above this line is a function that checked if the connection between React and mySQL is successful.

app.use(cors());
app.use(express.json());
app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (err, result) => {
        if (err) {
            console.log(err)
        }else {
            res.send(result);
        }
    })
});
// Above this line is a function that queries data from mySQL.

app.use(express.static(path.join(__dirname, './build')));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, './build', 'index.html'))
})
// Above this line is a function that fixes the refresh issue.

app.listen(process.env.PORT || 5000, function(){
    console.log(`Express is working on port 5000`)
});
// Above this line is a function that pushes the server to either a port set dynamically by Heroku, or it defaults to port 5000.
