function join(arr, token) {
  const zbroj = arr.reduce((a, b) => a + token + b);
}

let skupina = ["1", "2", "3", "4", "5", "6"];
const rez = skupina.filter((rez) => skupina.lenght > 1);
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(skupina.reduce(reducer));

const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x * 2);
console.log(map1);
