/*
Complete the method/function so that it converts dash/underscore delimited words
into camel casing. The first word within the output should be capitalized only
if the original word was capitalized (known as Upper Camel Case, also often
referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str){
  const strArr = str.split(/[-_]+/);
  strArr.forEach((word, i)=>{
    if(i===0) return;
    strArr[i] = word.charAt(0).toUpperCase() + word.slice(1);
  })
  return strArr.join("")
}

console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('The_Stealth_Warrior'));