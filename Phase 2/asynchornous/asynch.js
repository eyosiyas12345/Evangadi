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