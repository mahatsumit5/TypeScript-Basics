let userInput: unknown;
let userName: string;
userInput = 2;
userInput = "sumit";

if (typeof userInput === "string") userName = userInput;

// never is new type if you try to get the result of this function it crash the code
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("error occred", 500);
console.log(result);
