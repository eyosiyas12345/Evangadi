let form1 = document.getElementById("my-form1");
let username = document.querySelector("#username");
let pass = document.querySelector("#pass");
let errorMsgHolder = document.getElementById("error-msg-holder") ;
let theme = document.querySelector(".theme");
let question1sample1 = document.querySelector("#sample1");
let techCompanies = document.querySelector("#techCompanies");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.querySelector(".no");
let adderForm = document.querySelector(".adder-form");
let firstNumInput = document.querySelector(".first-num");
let secondNumInput = document.querySelector(".second-num");

// functions;
function submit (event) {
  
  if(username.value.trim() === "" && pass.value.trim()===""){
    errorMsgHolder.style.display = "block";
    errorMsgHolder.textContent = "missing both username & password";
    errorMsgHolder.className= "display-error"
    event.preventDefault();
    }
  else if(username.value.trim() === ""){
    errorMsgHolder.textContent = "missing username";
    errorMsgHolder.className = "display-error";
    event.preventDefault();
  }
  else if(pass.value.trim()===""){
    errorMsgHolder.textContent = "missing password";
    errorMsgHolder.className = "display-error";
    event.preventDefault();
  }
  else{
    errorMsgHolder.textContent = "Successfully completed";
    errorMsgHolder.className = "display-success";
    event.preventDefault();
  }
}
let changeTheme =()=>{
  let body = document.body;
  body.classList.toggle("black");
}
function blueBody (event) {
  console.log("blueBody");
  document.body.style.backgroundColor = "blue";
}
function noBody (){
  document.body.style.backgroundColor = "";
}
function adder (){
  event.preventDefault();
  console.log("two");
 let firstNumInputValue = firstNumInput.value;
 let secondNumInputValue = secondNumInput.value;
 console.log(firstNumInputValue + " and "+ secondNumInputValue);
}
form1.addEventListener("submit", submit);
theme.addEventListener("click",changeTheme);
yesBtn.addEventListener("click",blueBody);
noBtn.addEventListener("click",noBody);
adderForm.addEventListener("submit",adder);
console.log("one")
// // question 1
// console.log(question1sample1);
// console.log(question1sample1.textContent);
// question 2
// console.log(techCompanies);
// let newLi = document.createElement("li");
// newLi.textContent = "Amazon";
// techCompanies.insertBefore(newLi, techCompanies.children[0]);
// console.log(techCompanies);
// newLi.classList.add("blue");
// const blueCampaniesContainer = document.querySelector(".blueCampaniesContainer");
// const blueCampanies = document.querySelectorAll("#techCompanies .blue");
// console.log(blueCampanies);
// lists = blueCampanies;
// console.log(blueCampanies.length)
// // console.log(blueCampanies[0]);
// for(let i=0; i<blueCampanies.length;i++){
//   blueCampaniesContainer.append(blueCampanies[i]);
//   console.log("added");
// }

