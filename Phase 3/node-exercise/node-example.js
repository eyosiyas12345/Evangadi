// const http = require('http');
// const fs = require('fs');

// console.log("node logged out");
// const server = http.createServer (
//   (req,res)=>{
//     console.log("Request Received");
//     fs.readFile('index.html', function(data, err){
//       if(err){
//         console.log("errors occured");
//         return;
//       }
//       res.writeHead(200, {"Content-Type": "text/html"});
//       res.write(data);
//       res.end();
//     })
//   }
// )
// server.listen(8080, console.log("Listening..."));

const express = require('express');
const app = express();
const mysql2 = require('mysql2');

//create connection object (reference)
const db = mysql2.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'test'
});

//create the connection
db.connect((err)=>{
   if(err) {
     console.log(`Error Occured ${err}`);
     return;
   }
     console.log("Database connected"); 
  });

  //Queries
  const createFirstTable = `CREATE TABLE IF NOT EXISTS FirstTableProduct (
  product_id INT AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  product_url VARCHAR(100) NOT NULL,
  PRIMARY KEY (product_id)
   )`;
  const createSecondTable = `CREATE TABLE IF NOT EXISTS SecondTableDescription (
  description_id INT auto_increment,
  product_id INT NOT NULL,
  product_description TEXT NOT NULL,
  product_image VARCHAR(100) NOT NULL,
  product_url VARCHAR(100) NOT NULL,
  PRIMARY KEY (description_id),
  FOREIGN KEY (product_id) REFERENCES FirstTableProduct(product_id)
  )`;
  const createThirdTable = `CREATE TABLE IF NOT EXISTS ThirdTablePrice (
  price_id INT AUTO_INCREMENT,
  product_id INT NOT NULL,
  product_price DECIMAL(6,2) NOT NULL,
  PRIMARY KEY (price_id),
  FOREIGN KEY (product_id) REFERENCES FirstTableProduct(product_id)
  )`;
  const insertFirstTable = `INSERT INTO FirstTableProduct(product_name, product_url) VALUES ('product1', 'https://www.product1.com')`;


  //create tables on the database by the mysql driver.
app.get("/install",(req,res)=>{
    db.query(createFirstTable, (err, result, fields)=>{ 
      if(err) {
      console.log("Table1 not craeted." + err);
      return;
    }
    console.log("First Table created");
    });
    db.query(createSecondTable, (err,result,fields)=>{
      if(err){
        console.log("Table2 not created." + err);
        return;
      }
      console.log("Second Table created");
    });
    db.query(createThirdTable, (err,result, fields)=>{
      if(err){
        console.log("Table3 not created." + err);
        return;
      }
      console.log("Third Table created");
    });
    db.query(insertFirstTable, (err,result,fields)=>{
      if(err){
      console.log("Data Table 1 not inserted" + err);
      return ;
      }
      console.log("Data inserted to Table 1");
      });

console.log("Request Received");
  res.end("Construction Completed");
});
//listen the the client
app.listen(8080,()=>console.log("Listening..."));
