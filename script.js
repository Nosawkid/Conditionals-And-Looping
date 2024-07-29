const sumOfNumbers = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

const number = Number(prompt("Enter a number between 0 and 1 million"));

if (number > 0 && number < 1000000) {
  alert("Sum the numbers upto the given number is " + sumOfNumbers(number));
} else {
  alert("Invalid Numbers");
}
