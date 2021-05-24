const whichSchool  = function (age) {
  //Elementary School if age is below 13
  if (age < 13) {
  console.log("Elementary School");
  }
  //Secondary School if age is between 13 and 18 (both inclusive)
  else if(age >= 13 && age <= 18){
   console.log("Secondary School");
  }
  //Lighthouse Labs in all other cases
  else if(age > 18){
    console.log("Lighthouse Labs");
  }
}
console.log("I am 11. Which school should I go to?");
console.log(whichSchool(19));
console.log("I am 13. Which school should I go to?");
console.log(whichSchool(13));
console.log("I am 18. Which school should I go to?");
console.log(whichSchool(18));