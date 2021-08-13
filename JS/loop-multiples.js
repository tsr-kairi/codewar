// Multiples of 3 or 5

function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(solution(3));

// const solution = (n) =>
//   n <= 0
//     ? 0
//     : Array.from({ length: n }, (_, i) =>
//         i % 3 == 0 || i % 5 == 0 ? i : 0
//       ).reduce((x, y) => x + y);

// console.log(solution(3));

// const solution = (n) => {
//   let s = 0;
//   for (let i = 0; i < n; i++) s += i % 3 ? (i % 5 ? 0 : i) : i;
//   return s;
// };

// console.log(solution(5));

// function solution(number) {
//   for (acc = 0; --number > 2; ) {
//     acc = !(number % 3) || !(number % 5) ? acc + number : acc;
//   }
//   return acc;
// }

// console.log(solution(3));
