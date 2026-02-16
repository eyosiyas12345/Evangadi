// // +++++++++My Problem+++++++++++++++++++++++++++++

// function Student (name,mark){
//   //how do I check a variable is string? and object is number?
//   this.name = name;
//   this.marks = mark;
// }

// const calculateAverage = (mark) =>{
//   // how do I get the number of properties in an object?
//   let total =0;
//   for (let i = 0; i< mark.length; i++){
//     total +=mark[i];
//   }
//   let average = total /mark.length;
//   return average;
// }
// const calculateGrade = (mark) => {
//   //how do I represent each property of an object like forEach for an array?
    
//   let average = calculateAverage(mark);
//      switch (average){
//       case average>= 85 :
//        console.log("hi");
//        grade = "A+";
//        break;
//       case average >= 80 :
//         grade = "A-";
//         break;
//       case average >= 75 :
//         grade = "B+";
//         break;
//       case average >= 70:
//         grade = "B";
//         break;
//       case average >= 65:
//         grade = "C+";
//         break;
//       case average >= 60:
//         grade = "C";
//         break;
//       case average >= 55:
//         grade = "C-";
//         break;
//       case average >=50:
//         grade = "D";
//         break;
//       default:
//         grade = "F"
//         break;
//     }
// }
// const statusInfo = (name, mark) =>{
//   let average = calculateAverage(mark);
//   let grade = calculateGrade(mark);
//   console.log(name + " average = " + average + "\n\n")
//   console.log(name + " grade = " + grade + "\n\n");
// }

// let Abebe_mark = [80,70,90];
// let Abebe = new Student("Abebe",Abebe_mark);
// statusInfo("Abebe",Abebe_mark);

// ++++++++++++++++Find Hidden word+++++++++++++++++
// function findHiddenWord (word){
//   if(typeof word !== "string"){
//     console.log("is not string");
//   }
//   let hiddenWord = word.match(/[a-z]/g);
//   let hidden = "";
// for(let i =0; i<hidden.length; i++){
//   hidden += findHiddenWord(firstWord)[i];
// }
// console.log(hidden);
// }
// firstWord = 123;

// function detectWord(word){
//   if(typeof word !== "string"){
//     console.log("is not string");
//   }
//   let hiddenWord = "";
//   for(let i=0; i<word.length; i++){
//     let singleLetter = word.charAt(i);
//     if(singleLetter === singleLetter.toLowerCase()){
//       hiddenWord +=singleLetter;
//     }
//   }
//   return hiddenWord
// }

// console.log(detectWord("AAAADdLKJLKHoEUIgLKJIOs"));


// let canBeNested = (arr1, arr2) => {

//   if(Array.isArray(arr1) === false || Array.isArray(arr2) === false){
//     return "Please only enter arrays.";
//   }
//   let arr1Min = arr1[0];
//   let arr1Max = arr1[0];
//   let arr2Min = arr2[0];
//   let arr2Max = arr2[0];
//   arr1.forEach(element => {
//     if(element < arr1Min){
//       arr1Min = element;
//     }
//     if(element >arr1Max){
//       arr1Max = element;
//     }
//   });
//   arr2.forEach(element =>{
//     if(element <arr2Min){
//       arr2Min = element;
//     }
//     if(element > arr1Max){
//       arr2Max = element;
//     }
//   })
//   // decision
//   if(arr1Min>arr2Min && arr1Max<arr2Max){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(canBeNested([0,2,4.9],[-1,5]));


// // ++++++incremented number++++++
// function addition(num){
//   let incremented = num +1;
// 	return incremented;
// }
// console.log(" 2 + 1 = "+addition(2));
// // +++++++biwise operation+++++++
// function bitwise (num1, num2){
//   if(isNaN(num1) || isNaN(num2)){
//     return "not a number";
//   }
//   let bitnum1 = num1.toString(2);
//   let bitnum2 = num2.toString(2);
//   return bitwiseAND(bitnum1, bitnum2);  
// }

// let bitwiseAND = (bitstr1, bitstr2) => {
//   let resbit = "";
//     for(let i=bitstr2.length-1; i>=0; i--){
//       if(bitstr1.charAt(i)== 1 && bitstr2.charAt(i)== 1){
//         resbit += "1" ;
//       }else{
//         resbit += "0"; 
//       }
//   }
//   let splitted = resbit.split('');
//   let reversed = splitted.reverse();
//   let joined = reversed.join('');
//   return joined;
// }
// console.log(bitwise(2,7));

// ++++++magic array++++++++++++

/*
1,undertood
2, solve it on paper
I will see each element of the array from left to write to get any prime number . when get one I will store it . then I will add all primes I have stored then this summation is equal to the array[0] then it is magic array. IF I haven't got any then I will see the first element of the array if it is "0" the array is magic array.
3,general formula
[a,b,c,p,d,e,p];
if(p+p = a) then I got magic array
[a,b,c,d,e]
if(no p and a=0) then magic array
4,pseudocode
-define a function take array (isMagicArray). y
-check if input is array. y
-declare an empty array called (primeHolder) y
-forEach of array element check primity
 _how: if (a number>1 & is divisible by 1 and itself i.e prime)
 _if an element is prime, store it in primeHolder array.
-loop for each elements inside primeHolder
 _store their summation on a variable (primeSum)
 _if primeSum == array[0]
 ->return true;
-else if primeHolder has no element and array[0] ==0
 ->return true;
-else
 ->return false;
*/
let isMagicArray =(arr)=>{
  if(Array.isArray(arr)==false){
    return ("Error: please enter an array");
  }
 let primeHolder = [];
 arr.forEach(element => {
   if(isPrime(element)){
    primeHolder.push(element);
   }
 });
//  if no prime no.
 if(primeHolder.length == 0){
   if(arr[0] == 0){
     return true;
   }else return false;
 }
 else if(primeHolder.length !=0){
   let sum = 0;
   primeHolder.forEach( element =>{
      sum +=element;
   })
   if(sum === arr[0]){
    return true;
   }
 }
}
// isPrime checker
let isPrime = (num) =>{
  if(num <=1 ){
    return false
  }else if(num ===2){
    return true
  }else if(num % 2 ==0){
    return false
  }
  let limit = Math.sqrt(num);
  for(let i=3; i<=limit; i+=2){
    if(num %i == 0){
      console.log("hi");
      return false
    }
  }
  return true;
}
console.log(isMagicArray([8,5,-5,5,3])? "Magic Array":"Normal");