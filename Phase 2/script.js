console.log("Javascript is Great");

let abebe = {
  firstName : "Abebe",
  lastName: "Kebede",
  mist: "Almaz",
  sera: function() {
   return(this.firstName + " " + this.lastName + " is tsegur korach");
   console.log(5+5);
  },
}
console.log(abebe);
console.log(abebe["firstName"]);
console.log(abebe.sera());

function Student(fn, ln, seraw){
  this.firstName = fn;
  this.lastName = ln;
  this.sera = function (){
    return this.firstName + "  " + this.lastName + " is "+ seraw;
  }
}

let Almaz = new Student ("Almaz", "Ayana", "temari");
let Abebe = new Student ("Abebe", "Kebede", "tsegur qorach");
console.log(Almaz);
console.log(Almaz.sera())
