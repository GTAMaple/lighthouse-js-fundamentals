const sumLargestNumbers = function (data) {

  let largestNumber = 0;
  let secondLargest = 0;
  
  for (let i = 0; i < data.length; i++) {
    if (data[i] > largestNumber) {
      largestNumber = data[i];
      
    }
  }
  for (let j = 0; j < data.length; j++) {
    
    if (data[j] > secondLargest && data[j] < largestNumber) {
      secondLargest = data[j];
      
    }
  }

  let sum2Large = largestNumber + secondLargest;
  return sum2Large;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));