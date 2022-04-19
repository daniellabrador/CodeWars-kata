/* Jaden Smith, the son of Will Smith, is the star of films such as The Karate
Kid (2010) and After Earth (2013). Jaden is also known for some of his
philosophy that he delivers via Twitter. When writing on Twitter, he is known for
almost always capitalizing every word. For simplicity, you'll have to capitalize
each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith.
The strings are actual quotes from Jaden Smith, but they are not capitalized
in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
Link to Jaden's former Twitter account @officialjaden via archive.org:
  https://web.archive.org/web/20190624190255/https://twitter.com/officialjaden */

// Test Inputs
const str1 = "How can mirrors be real if our eyes aren't real",
      str2 = "The quick brown fox jumps over the lazy-ass dog.";

// Solution
String.prototype.toJadenCase = function () {
  const string = this.valueOf().split(/(?<=[- ])/g);
  string.forEach((word, i) => {
    string[i] = word.charAt(0).toUpperCase() + word.slice(1)
  })
  return string.join("");
};

console.log(str1.toJadenCase());
console.log(str2.toJadenCase());