function vj(vj) {}

let arr = ["A", "gdje", "kuci"];
delete arr[1];
alert(arr[1]); //obrisalo je sredinu
alert(arr.length);
arr.splice(0, "Kako"); //zamjenio prvu rijec
let removed = arr.splice(0, 2);
//
let arr = [1, 0, false];

alert(arr.indexOf(0)); // 1
alert(arr.indexOf(false)); // 2
alert(arr.indexOf(null)); // -1
alert(arr.includes(1)); // true
//
let arr = [1, 2];
// create an array from: arr and [3,4]
alert(arr.concat([3, 4])); // 1,2,3,4
// create an array from: arr and [3,4] and [5,6]
alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// create an array from: arr and [3,4], then add values 5 and 6
alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
//
const characters = [
  { name: "Maus", age: 30 },
  { name: "Riker", age: 24 },
  { name: "Deana", age: 25 },
]; //array sa podatcima
const reducer = (map, val) => {
  if (map[val] == null) {
    map[val] = 1;
  } else {
    ++map[val];
  }
  return map;
};
characters.map((char) => char.age).reduce(reducer, {});
//
function Account(bal) {
  var balance = bal;
  this.getBalance = function () {
    return balance;
  };
  this.deposit = function (money) {
    if (money > 0) {
      balance += money;
    }
  };
}
var account = new Account(1000);
account.deposit(500); // OK
account.getBalance(); // OK
account.balance = 1000; // Error
//
module.exports = vj;
