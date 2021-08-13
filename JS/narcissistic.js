// Does my number look big in this?


// function narcissistic(value) {
//   let str = value.toString(),
//     len = str.length,
//     sum = 0;
//   for (let i = 0; i < len; i++) {
//     sum += Math.pow(str[i], len);
//   }
//   return sum === value ? true : false;
// }

// function narcissistic(value) {
//   return (
//     ("" + value).split("").reduce(function (p, c) {
//       return p + Math.pow(c, ("" + value).length);
//     }, 0) == value
//   );
// }

// const narcissistic = (value) =>
//   +("" + value)
//     .split("")
//     .reduce((s, n, _, a) => s + Math.pow(n, a.length), 0) == value;

// function narcissistic(value) {
//   var power = ("" + value).length;
//   return (
//     [...("" + value)].reduce((a, b) => a + Math.pow(b, power), 0) === value
//   );
// }

// console.log(narcissistic("value"));