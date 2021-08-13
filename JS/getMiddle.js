// Get the Middle Character

// Description:
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

//   return s.substring(position, position + length);
// }

function getMiddle(str) {
  return str.substr(
    Math.ceil(str.length / 2 - 1),
    str.length % 2 === 0 ? 2 : 1
  );
}

// function getMiddle(s) {
//   return s.slice((s.length - 1) / 2, s.length / 2 + 1);
// }

// function getMiddle(s) {
//   return s.substring(Math.ceil(s.length / 2) - 1, Math.floor(s.length / 2) + 1);
// }

// const getMiddle = (s) => s.substr((s.length - 1) >>> 1, (~s.length & 1) + 1);

console.log(getMiddle("koihhggt"));
