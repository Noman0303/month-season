function checkFactorial() {
  const number = parseFloat(document.getElementById("number").value);

  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial*i
  }


  // Display results
  document.getElementById("factorialResult").innerText = `Factorial of ${number} is ${factorial}`
}
