const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
app.use (bodyParser.urlencoded({extended: true}));


//Database Connecting
const databaseKey = mysql.createConnection({
  host: 'localhost',
  user: 'eyosiyas',
  password:'VY2/u2zro)p-Zqzk',
  database: 'evangadi'
});
databaseKey.connect((err)=>{
  if(err) throw err;
  console.log("DB connected");
});

//http request handling from html form.
app.get("/",(req,res)=>{
  console.log("request received");
}).listen('8080', (err)=>{console.log("Listening...")});

app.post("/addiphone", (req,res)=>{
  let iphoneName = req.body.iphone_name;
  let iphoneUrl = req.body.iphone_url;
  console.log("request received");


//CREATE TABLE
    const queryCreateTable = `CREATE TABLE IF NOT EXISTS iphone (
    iphone_id INT AUTO_INCREMENT, 
    iphone_name VARCHAR(50), 
    iphone_url VARCHAR(50),
    PRIMARY KEY(iphone_id)
    )`;
    databaseKey.query(queryCreateTable, (err,result)=>{
      if(err) throw err;
      console.log('table created');
    });
    
  //INSERT DATA
    const queryInsertData = `INSERT INTO iphone (iphone_name, iphone_url) VALUES ("${iphoneName}","${iphoneUrl}")`;
    databaseKey.query(queryInsertData, (err,result)=>{
      if(err) throw err;
      console.log('inserted form input');
    });
});


// //create connection object (reference)
// const db = mysql2.createConnection({
//   host : 'localhost',
//   user : 'root',
//   password : '',
//   database : 'test'
// });

// //create the connection
// db.connect((err)=>{
//    if(err) {
//      console.log(`Error Occured ${err}`);
//      return;
//    }
//      console.log("Database connected"); 
//   });

//   //Queries
//   const createFirstTable = `CREATE TABLE IF NOT EXISTS FirstTableProduct (
//   product_id INT AUTO_INCREMENT,
//   product_name VARCHAR(100) NOT NULL,
//   product_url VARCHAR(100) NOT NULL,
//   PRIMARY KEY (product_id)
//    )`;
//   const createSecondTable = `CREATE TABLE IF NOT EXISTS SecondTableDescription (
//   description_id INT auto_increment,
//   product_id INT NOT NULL,
//   product_description TEXT NOT NULL,
//   product_image VARCHAR(100) NOT NULL,
//   product_url VARCHAR(100) NOT NULL,
//   PRIMARY KEY (description_id),
//   FOREIGN KEY (product_id) REFERENCES FirstTableProduct(product_id)
//   )`;
//   const createThirdTable = `CREATE TABLE IF NOT EXISTS ThirdTablePrice (
//   price_id INT AUTO_INCREMENT,
//   product_id INT NOT NULL,
//   product_price DECIMAL(6,2) NOT NULL,
//   PRIMARY KEY (price_id),
//   FOREIGN KEY (product_id) REFERENCES FirstTableProduct(product_id)
//   )`;
//   const insertFirstTable = `INSERT INTO FirstTableProduct(product_name, product_url) VALUES ('product1', 'https://www.product1.com')`;


//   //create tables on the database by the mysql driver.
// app.get("/install",(req,res)=>{
//     db.query(createFirstTable, (err, result, fields)=>{ 
//       if(err) {
//       console.log("Table1 not craeted." + err);
//       return;
//     }
//     console.log("First Table created");
//     });
//     db.query(createSecondTable, (err,result,fields)=>{
//       if(err){
//         console.log("Table2 not created." + err);
//         return;
//       }
//       console.log("Second Table created");
//     });
//     db.query(createThirdTable, (err,result, fields)=>{
//       if(err){
//         console.log("Table3 not created." + err);
//         return;
//       }
//       console.log("Third Table created");
//     });
//     db.query(insertFirstTable, (err,result,fields)=>{
//       if(err){
//       console.log("Data Table 1 not inserted" + err);
//       return ;
//       }
//       console.log("Data inserted to Table 1");
//       });

// console.log("Request Received");
//   res.end("Construction Completed");
// });
// //listen the the client
// app.listen(8080,()=>console.log("Listening..."));
// //html form receiving

// app.post("/addiphone", (req,res)=>{
//   console.log("Eyesera nw");
// });
