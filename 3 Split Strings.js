/* Complete the solution so that it splits the string into pairs of two
characters. If the string contains an odd number of characters then it should
replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']*/

function solution(str){
  const arrStr = str.split('');

  // Create the string pairs
  let arrStrIndex = 0;
  let arrElement = '';
  const appendChar = () => {
    if (arrStr[arrStrIndex]){
      arrElement += arrStr[arrStrIndex];
      arrStrIndex++;
    } else {
      arrElement += '_';
      arrStrIndex++;
    }
  }

  // Create the array
  const arr = [];
  while (arrStrIndex < arrStr.length){
    appendChar();
    appendChar();
    arr.push(arrElement);
    arrElement = "";
  }

  return arr
}

console.log(solution('abc'));
console.log(solution('abcdef'));