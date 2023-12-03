// function
function add(a: number, b: number) {
  return a + b;
}
function voidReturn(a: string) {
  console.log(a);
}
voidReturn("this is a void return type");

function undefinedReturn(a: string): undefined {
  console.log(a);
  return;
}

undefinedReturn("this is a undefined return type");
let combinevalues: (a: number, b: number) => number;

combinevalues = add;
console.log(combinevalues(1, 1));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

console.log(
  addAndHandle(1, 2, (res) => {
    console.log(res);
  })
);
