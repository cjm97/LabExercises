const clearDisplay = (value) => {
  document.getElementById("display").value = value;
};

const getInput = (value) => {
  document.getElementById("display").value += value;
};

const calculateResult = () => {
  let equation = document.getElementById("display").value;

  let result = Function("return " + equation)();
  result = result.toString();

  if (result.includes(".")) {
    result = Number(result).toFixed(2);
  }
  document.getElementById("display").value = "";
  document.getElementById("display").value += result;
};

console.log(Function());
console.log(Function("return " + 3 + 4)());
