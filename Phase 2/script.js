
function Student (fn,ln,marks)  {
  // properties. 
  this.fn = fn;
   this.ln = ln;
   this.maths = marks.maths;
   this.phy = marks.phy;
   this.chem = marks.chem;
   this.bio = marks.bio;
   this.eng = marks.eng;
   this.civ = marks.civ;
   let grade = 80;

    // method 1st
  this.average = function () {
    let average = (this.maths+this.phy+this.chem+this.bio+this.eng+this.civ)/ 6;
    // how do I get the number of properties in an object.
    return "Name: "+this.fn+" "+this.ln+"\n"+"Average mark: " + average +"\n\n";
  }

  //method  2nd
  this.convertToGrade = function (mark){
          switch (mark){
      case mark >= 85 :
       grade = "A+";
       break;
      case mark >= 80 :
        grade = "A-";
        break;
      case mark >= 75 :
        grade = "B+";
        break;
      case mark >= 70:
        grade = "B";
        break;
      case mark >= 65:
        grade = "C+";
        break;
      case mark >= 60:
        grade = "C";
        break;
      case mark >= 55:
        grade = "C-";
        break;
      case mark >=50:
        grade = "D";
        break;
      default:
        grade = "F"
        break;
    }
    console.log(grade);
    return ("Name: "+this.fn+" "+this.ln+"\n"+ "maths" +" = " + grade +"\n\n");
    
    };

    // method 3rd
  let info = function() {
    return this.fn + " " + this.ln +" average = "+ this.grade;
  }
};

let students_name = ["Abebe","Bekele","Chala","Dibora","Eba","Fira"];
let Abebe_marks = {
  maths : 90,
  phy : 80,
  chem : 93,
  bio: 70,
  eng: 88,
  civ: 83,
}

let Abebe = new Student ("Abebe","bebe",Abebe_marks);
//Test
console.log(Abebe.average());
console.log(Abebe.convertToGrade(84));