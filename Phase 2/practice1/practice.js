let form1 = document.getElementById("my-form1");
let username = document.querySelector("#username");
let pass = document.querySelector("#pass");
let errorMsgHolder = document.getElementById("error-msg-holder") ;
let theme = document.querySelector(".theme");

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
    errorMsgHolder.className = "display-success"
    event.preventDefault();
  }
}
let changeTheme =()=>{
  let body = document.body;
  body.classList.toggle("black");
}
form1.addEventListener("submit", setTimeout( submit,1000));
theme.addEventListener("click",changeTheme);
