// sumFor function using a for-loop
function sumFor(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// sumWhile function using a while-loop
function sumWhile(numbers) {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
}

// sumRecursion function using recursion
function sumRecursion(numbers, index = 0) {
  if (index === numbers.length) {
    return 0;
  }
  return numbers[index] + sumRecursion(numbers, index + 1);
}

// sumTheSimpleWay function using underscore library
function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, function (sum, num) {
    return sum + num;
  }, 0);
}
const numbers = [1, 2, 3, 4, 5];

console.log(sumFor(numbers));
console.log(sumWhile(numbers));
console.log(sumRecursion(numbers));
console.log(sumTheSimpleWay(numbers));
