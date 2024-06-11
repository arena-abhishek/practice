//  --task 1 ---
/* let calcutat () ={
    sum(){
        return this.a+ this.b
    },
    read (){
        this.a = +prompt(`the first number is`, 0);
        this.b = +prompt(`the second number is`, 0);
    }
}
let calculator =sum.read() */
// alert(`sum=`sum.read())

//----task 1----

/* Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

ucFirst("john") == "John" */

//---- answer----

/* function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("john")) */

//----task 2----

/* Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false */

//---- answer----

/* function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes(`viagra`) || lowerStr.includes(`xxx`);
}
console.log(checkSpam("buy ViAgRA now"));clear
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit")); */


//----task 3----

/* 
Truncate the text
importance: 5
Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.

For instance:

truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"

truncate("Hi everyone!", 20) == "Hi everyone!" */


//----answer----


/* function trunctate(str,maxlength){
  return (str.length > maxlength) ? str.slice(0,maxlength - 1)+ '...':str;  
}
trunctate("What I'd like to tell on this topic is:", 20) */
