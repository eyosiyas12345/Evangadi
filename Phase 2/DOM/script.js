// console.log("DOM what we will cover\n 1, selecting elements w/c could be in three type: individual,multiple and between.");

// /******SELECTING HTML ELEMENTS USING DOM *******/
///////////////////////////////////////////////////////////////
// // // To Select inidividual elements (2 ways).
// // // 1,document.getElementById("id-name");
// // // _______ element.className; return class name;

// // var head = document.getElementById("red");
// // console.log(head);
// // console.log(head.className);
// // head.className = "blue";
// // console.log("between");
// // console.log(head.classList);

// // //2,document.querySelector("#write .css .slector")
// var title = document.querySelector(".green");
// // //console.log(title);
// title.className = "red";

// /****SELECTING MULTIPLE ELMENETS (3 ways) */
// // //1, document.getElementByClassName
// let classes = document.getElementsByClassName("test");
// console.log(classes);
// // //2,document.getElementbyTagName
// let tags =document.getElementsByTagName("li");
// console.log(tags);
// // //3,document.querySelectorAll("css like selector");
// let queries = document.querySelectorAll(".query");
// console.log(queries);

// //__METHODS SELECT SPECIFIC ELEMENT FROM THE MULTIPLE FETCH */
// // //1, RECOMMENDED TheFetched[0] -- treat like array.
// console.log(queries[0]);
// // //2, TheFetched.item(index);
// console.log(queries.item(1));

/************Live DOM  vs Static DOM ************************/
// //eg. document.getElementByClassName("class") -- is live dom.
// var test = document.getElementsByClassName("test");
// console.log(test);
// test[0].className = "red";
// console.log(test);
// test[0].className = "blue"
// console.log(test);
// console.log("\n by tag name")
// var test2 = document.getElementsByTagName("li");
// console.log(test2);
// test2[0].className = "pink";
// console.log(test2);

/****TRAVERSING BETWEEN ELEMENTS */
// //parentNode
// let lj = document.querySelector(".test-li");
// console.log(lj); //return the li as object
// console.log(lj.parentNode); //return ul as dom object.
// console.log(lj.previousElementSibling);
// console.log(lj.nextElementSibling);
// console.log(lj.firstElementChild);
// console.log(lj.lastElementChild);
/****************************************************/


// console.log(".");
// //*******ALTERING VALUES AND PROPERTIES IN JAVASCRTPT*****

// //+++++++++access and alter text nodes (writting,content)
// let orange = document.getElementById("five");
// console.log(orange);
// orange.textContent = "Altered"

// //++++++Working with html content.++++++
// //to add, remove and update entire html block.
// // //createElement()
// let someLetter = document.createElement("p");
// // //textContent;
// someLetter.textContent= "Abebe beso bela";
// console.log(someLetter);
// // //appendChild(); writting as last child of the selected element
// document.body.appendChild(someLetter);
// // //removeChild()
// console.log(document.body.childNodes);
// document.body.removeChild(someLetter);
// //innerHtml;

// // ++++++working with attributes.++++++++++++++
// // className, id, classList.add("newClassName")
// const first = document.getElementById("one");
// first.classList.add("bold");
// first.id = "first";
// console.log(first);
// first.className = "first-class";
// console.log(first);
// //++++++++++++++++++++++++++++++++++++++++++++=


