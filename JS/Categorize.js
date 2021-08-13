// function openOrSenior(data) {
//   // Empty Array
//   let result = [];
//   //  Looping through 'data'.
//   for (let i = 0; i < data.length; i++) {
//     result[i] = data[i][0] >= 55 && data[i][1] > 7 ? "Senior" : "Open";
//   }
//   //  Return the loop
//   return result;
// }
// console.log(openOrSenior("value"));

// function openOrSenior(data) {
//   return data.map(([age, handicap]) =>
//     age > 54 && handicap > 7 ? "Senior" : "Open"
//   );
// }
// console.log(openOrSenior(["data.map"]));

// const openOrSenior = (members) =>
//   members.map(([age, handicap]) =>
//     age >= 55 && handicap > 7 ? "Senior" : "Open"
//   );
// console.log(openOrSenior(["members.map"]));

// const openOrSenior = (data) =>
//   data.map((e) => (e[0] > 54 && e[1] > 7 ? "Senior" : "Open"));
// console.log(openOrSenior(["data.map"]));
