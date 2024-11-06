// 1-.
let d = prompt("1-Sonni kiriting") - 0;
let s = prompt("2-sonni kiriting") - 0;
function firthMisol(a, b) {
  console.log(a + b);
}
firthMisol(d, s);

// 2-.
function secondMisol() {
  let arr = [12, 3, 4, 66, 123, 555];
}

// 1-rasm
// 1-.
let person = {
  name: "Abdulloh",
  age: 19,
  job: "Logistic company",
  interest: "game",
  hobby: "sleep",
  number: "+998944683325",
  username: "AU",
};

for (let key in person) {
  console.log(`${key} - ${person[key]}`);
}
// 2-.
const person1 = {
  name: "Abdulloh",
  age: 19,
};

const person2 = {
  hobby: "Volleyball",
  interest: "Sleep",
};

const mergedPerson = { ...person1, ...person2 };
console.log(mergedPerson);
// 3-.
let numbers = [1, 2, 3, 4, 5];
numbers[numbers.length - 1] += 1;
console.log(numbers);
// 4-.
function addNumberBasedOnParity(arr) {
  let sum = arr.reduce((acc, num) => acc + num, 0);
  if (arr[0] % 2 === 0) {
    arr.unshift(sum);
  } else {
    arr.push(sum);
  }
  return arr;
}
console.log(addNumberBasedOnParity([1, 2, 3, 4, 5]));
// 5-.
let arr = [1, 2, 3, 4, 5, 6];
[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
console.log(arr);
// 6-.
function addWords(words = [], count = 0) {
  if (count === 6) return words;
  let word = prompt("Enter a word:");
  words.push(word);
  return addWords(words, count + 1);
}

console.log(addWords());
// 7-.
function fillArray(arr = []) {
  if (arr.length === 3) return arr;
  let value = prompt("Enter a value:");
  arr.push(value);
  return fillArray(arr);
}

let filledArray = fillArray();
filledArray.forEach((value) => console.log(`Answer: ${value}`));

2 - rasm;
// 1-.
function addTwoNumbers() {
  let a = parseInt(prompt("Birinchi sonni kiriting:"));
  let b = parseInt(prompt("Ikkinchi sonni kiriting:"));
  return a + b;
}

console.log("Yig'indi:", addTwoNumbers());
// 2-.
function sumArray(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumArray([1, 2, 3, 4]));
// 3-.
function positiveNumbers(arr) {
  return arr.filter(num => num > 0);
}

console.log(positiveNumbers([-2, 5, -3, 7, 9,-1]));
// 4-.
let arr2 = ["5", 2, "true"];
arr2 = arr2.map((el) => {
  if (el === "5") return 5;
  if (el === "salom") return 0;
  return el;
});

console.log(arr2);
// 5-.
const personArr = [
  { name: "Abdulloh", age: 19, status: false },
  { name: "Ibrohim", age: 20, status: true },
  { name: "Shodiyor", age: 18, status: false }
];

personArr.filter(person => !person.status).forEach(person => console.log(person.name));
// 6-.
function avarageThree() {
  let a = parseInt(prompt("Birinchi sonni kiriting"))
  let b = parseInt(prompt("Ikkinchi sonni kiriting"))
  let c = parseInt(prompt("Uchinchi sonni kiriting"))
  return Math.floor((a + b + c) / 3)
}
console.log("O'rtacha qiymat:", avarageThree());
// 7-.
let arr3 = [];
for (let i = 0; i < 4; i++) {
  let num = parseInt(prompt(`Array uchun ${i + 1}-sonni kiriting:`));
  arr3.push(num);
}

if (arr3[0] % 2 === 0) {
  arr3[0] = "juft";
} else if (arr3[0] % 3 === 0) {
  arr3[0] = "toq";
}

console.log(arr3);
// 8-.
let arrA = ["apple", "banana", "orange"];
let arrB = ["banana", "kiwi", "apple"];

let commonElements = arrA.filter(value => arrB.includes(value));
console.log(commonElements);
