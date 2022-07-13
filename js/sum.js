const sum = (number1, number2) => {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    throw new Error("Please enter only numbers");
  }

  return number1 + number2;
};

export default sum;
