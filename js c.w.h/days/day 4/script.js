function nice(name) {
  console.log("Hey " + name + " you are nice");
  console.log("Hey " + name + " you are good");
  console.log("Hey " + name + " your tshirt is nice ");
  console.log("Hey " + name + " your course is also good");
}
nice("Abhi");
nice("nitin");
function sum(a, b) {
  // console.log(a+b)
  return a + b;
}
function sum(a, b, c = 3) {
  // console.log(a+b)
  return a + b + c;
}
result1 = sum(6, 5);
result2 = sum(78, 5);
result3 = sum(45, 5);
console.log("The sum of these numbers is:", result1);
console.log("The sum of these numbers is:", result2);
console.log("The sum of these numbers is:", result3);

const func1 =(x)=>{
    console.log("Iam an arrow function",x)
}
func1(34)
func1(54)
func1(64)
func1(94)