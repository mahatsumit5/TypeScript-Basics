var userInput;
var userName;
userInput = 2;
userInput = "sumit";
if (typeof userInput === "string")
    userName = userInput;
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("error occred", 500);
console.log(result);
