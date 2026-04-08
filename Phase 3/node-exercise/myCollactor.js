//3
const fs = require('fs');
const os = require('os');
const first = require('./myFirst');
const second = require('./mySecond');
//3
console.log(first.multiplier(5));
console.log(second.multiplier(5));
//4,a
const content = `The duplication of 9 is : ${first.multiplier(9)}`;
fs.writeFile('results.txt', content , err => {
 if(err){
  console.log("The error is: "+err);
  return;
 }
 console.log("successfull.");
});  
//4,b
const textToappend = "This is the triple of 10 : "+second.multiplier(10);
fs.appendFile('results.txt', textToappend, err =>{
  if(err){
  console.log("error occured:"+err);
  return;
}
console.log("succesfully appended");
})
const textOnNewLine = os.EOL + "This is on a new line.";
fs.appendFile('results.txt', textOnNewLine, (err)=>{
  if(err) {
    console.log("error: " + err);
    return;
  }
  console.log("3rd success.");
})