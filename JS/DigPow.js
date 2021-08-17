// Playing with digits

// function digPow(n, p) {1
//   var ans =
//     n
//       .toString()
//       .split("")
//       .map((v, i) => Math.pow(parseInt(v), i + p))
//       .reduce((a, b) => a + b) / n;
//   return ans % 1 == 0 ? ans : -1;
// }

// function digPow(n, p) {
//   var x = String(n)
//     .split("")
//     .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
//   return x % n ? -1 : x / n;
// }

// function digPow(n, p) {
//   var ans =
//     n
//       .toString()
//       .split("")
//       .map((v, i) => Math.pow(parseInt(v), i + p))
//       .reduce((a, b) => a + b) / n;
//   return ans % 1 == 0 ? ans : -1;
// }
