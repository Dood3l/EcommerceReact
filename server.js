const path = require('path')
// require('dotenv').config() -- Best practice for security 
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
// Above this line are the dependencies



var db_config = {
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b09453fff7c96a',
    password: '43adde49',
    database: 'heroku_e1c0b0c780ef5e7'
};
// Above this line is the connection between React and Heroku mySQL cloud.

app.use(cors());
app.use(express.json());
app.get('/api/products', (req, res) => {
    connection.query('SELECT * FROM products', (err, result) => {
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

function handleDisconnect() {
    connection = mysql.createConnection(db_config); 
  
    connection.connect(function(err) {              
      if(err) {                                    
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000); 
      }                                     
    });                                     
                                            
    connection.on('error', function(err) {
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
        handleDisconnect();                         
      } else {                                      
        throw err;                                  
      }
    });
  }
handleDisconnect();
// Above this line is a function that takes cycles through the server to make sure it reconnects before the app gets launched.