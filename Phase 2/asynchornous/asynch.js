//callback js

// console.log("task1");
// function bbb (){
//   setTimeout(
//     ()=>{
//       console.log("task2");
//       let b = "task3";
//       aaa(b);
//     }, 5000
//   )
// }
// function aaa(b){
//   console.log(`message: ${b}`);
// }
// bbb();

//promise js
// console.log("call back");

// console.log(fetch("https://randomuser.me/api").then((res)=>  res.json).then(data) => console.log(data));
document.body.style.backgroundColor = "black";
document.body.style.color = "grey";

// //asynch await
// async function thirdWay (){
//   try {
//   let response = await fetch("https://randomuser.me/api");
//   let data =  response.json;
//   let user = data.results[0];
//  } catch (error) {
//   console.log("tebelash"+error);
//  }
// }
// thirdWay();

// //  API Promise constructor
//   // let myPromise = new Promise(){
//   //    resolve, reject
//   // }

// +_++++++++++++++++++_RegEx+++++++++++++++_++++++++=




let str = "as a human 985 lorem ipsum I 8877 love Ehiopia , as 097 it is a country for 78-6 origin of human kind rem 98-5 6%6.";
console.log(str.search(/ehiopia/i));
console.log(str.replace(/ehiopia/i, "kenya"));
console.log(str.match(/hum/gi));
let count = 0;
for(let i=0; i<str.length; i++){
  if (str.match(/\d{3}/) !== null){
     count = str.match(/\d{3}/g).length;
  }
}
console.log("RegEx object methods");
var pattern1 = /\d{2}-\d/g;
var n = pattern1.exec(str);
console.log(n);


