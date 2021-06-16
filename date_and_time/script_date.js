// вычислить промежуток в милисекунда между двумя любыми датами

let a = new Date();
let b = new Date(2020, 5, 15, 0, 0, 0, 0);
let c = (a - b);
console.log(c);