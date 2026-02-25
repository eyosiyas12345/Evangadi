const element = document.getElementById("change-btn")

let alerting =()=>{
  console.log(element);
  element.style.backgroundColor = "red";
  element.style.color = "white";
  element.style.border = "none";
  console.log("hey why")
}
element.addEventListener("click",alerting);
