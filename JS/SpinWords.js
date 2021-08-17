//  Stop SninnipS My sdroW!

function spinWords(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 5 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

console.log(spinWords("tookto, took, lookme"));

// function spinWords(str){
//   return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');1


// console.log(spinWords("tookto, took, lookme"));
// }


// function spinWords(str) {
//   return str.split(" ").map(spinSingleWord).join(" ");

//   console.log(spinWords("tookto, took, lookme"));
// }

// function spinSingleWord(word) {
//     return word.length > 4 ? word.split("").reverse().join("") : word;
    

//     console.log(spinWords("tookto, took, lookme"));
// }

