console.log("DOM what we will cover\n 1, selecting elements w/c could be in three type: individual,multiple and between.");
/******SELECTING HTML ELEMENTS USING DOM *******/
// To Select inidividual elements (2 ways).
// 1,document.getElementById("id-name");
// _______ element.className; return class name;

// var head = document.getElementById("red");
// console.log(head);
// console.log(head.className);
// head.className = "blue";
// console.log("between");
// console.log(head.classList);

// 2,document.querySelector("#write .css .slector")
var title = document.querySelector(".green");
// console.log(title);
title.className = "red";

/****SELECTING MULTIPLE ELMENETS (3 ways) */
// 1, document.getElementByClassName
let classes = document.getElementsByClassName("test");
console.log(classes);
// 2,document.getElementbyTagName
let tags =document.getElementsByTagName("li");
console.log(tags);
// 3,document.querySelectorAll("css like selector");
let queries = document.querySelectorAll(".query");
console.log(queries);

/*****METHODS SELECT SPECIFIC ELEMENT FROM THE MULTIPLE FETCH */
// 1, RECOMMENDED TheFetched[0] -- treat like array.
console.log(queries[0]);
// 2, TheFetched.item(index);
console.log(queries.item(1));


