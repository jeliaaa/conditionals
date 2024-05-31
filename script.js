var isGreaterThanEight = 9 > 8; // true
var isGreaterOrEqualOfEight = 9 >= 8; // true
var isLess = 9 < 8; // false
var isLessOrEqual = 8 <= 8; // true

var comparison = (num1, num2) => {
  if (num1 > num2) {
    return `${num1} is greater than ${num2}`;
  } else if (num1 < num2) {
    return `${num1} is less than ${num2}`;
  } else {
    return `${num1} is equal to ${num2}`;
  }
};

console.log(comparison(10, 4));
console.log(comparison(1, 4));
console.log(comparison(4, 4));

// ${name} is an adult

// var arr = [0, 1, 2, 3, 4];

// arr.map((number) => {
//   console.log(number);
// });

var obj = {
  name: "aaa",
};
console.log(obj.name);

var users = [
  { id: 0, name: "Giorgi", age: 10 },
  { id: 1, name: "Zaza", age: 19 },
  { id: 2, name: "Nini", age: 21 },
  { id: 3, name: "Manana", age: 16 },
];
users.forEach((user) => {
  if (user.age >= 18) {
    console.log(`${user.name} is an adult`);
  }
});

var currentUser = {
  name: "adad",
  role: "user",
};

if (currentUser.role === "admin") {
  console.log("adminia");
}

function ragac(number) {
  if (number === 8) {
    console.log("rva");
  }
}
ragac("8");

// და ; ან ; არა

if (5 > 3 && 6 > 2) {
  console.log("ki");
} // და and

if (5 < 3 || 3 > 1) {
  console.log("ki an");
} // ან or

if (!5 > 3) {
  console.log("metia");
}

if (true && !false) {
  console.log("Something");
}

var person = {
  isEighteen: true,
};

// !true = false
// !false = true

// if (!person.isEighteen) {
//   console.log("aris tvrameti wlis");
// }

console.log(5 === 5);
console.log(3 != 5);

var age = 14;

switch (age) {
  case 10:
    console.log(age);
    break;
  case 14:
    console.log(age);
    break;
  default:
    console.log("sxva");
}

if (age === 10) {
  console.log(age);
} else if (age === 14) {
  console.log(age);
}
