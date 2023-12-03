function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    console.log(`${phrase} ${n1} and ${n2} is ${n1 + n2}`);
  }
  return n1 + n2;
}
const num1 = 1;
const num2 = 2;
const printResult: boolean = true;
add(num1, num2, true, "the result is");

enum IsActive {
  ACTIVE = "active", //can assign value to enum could be number or name by defaulat starts from 0,1,2 and so on
  NOTACTIVE = "inactive",
}
const person: {
  name: string;
  age: number;
  hobbies: string[]; //this is an array of strings
  role: [number, string]; //this is a tuple type
  active: IsActive;
} = {
  name: "Sumit",
  age: 25,
  hobbies: ["playing", "singing", "coding"],
  role: [2, "author"],
  active: IsActive.NOTACTIVE,
};
console.log(person);

let favSports: string[];

favSports = ["football", "cricket"];
console.log(favSports);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

function unionTypes(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else result = input1.toString() + input2.toString();
  return result;
}
const combinesAges = unionTypes(10, 20);
console.log(combinesAges);

const combineNames = unionTypes("sumit", "mahat");
console.log(combineNames);
