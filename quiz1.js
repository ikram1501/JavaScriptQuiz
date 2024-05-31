// 1. Fungsi reverseString
function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  
  console.log(reverseString("hello")); // Output: "olleh"
  console.log(reverseString("world")); // Output: "dlrow"
  
  
  console.log("------------------------");
  
  // 2. Fungsi fizzBuzz
  function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  
  fizzBuzz(15); // Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
  
  console.log("------------------------");
  
  // 3. Fungsi secondLargest
  function secondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
      }
    }
  
    return secondLargest;
  }
  
  console.log(secondLargest([10, 5, 20, 8])); // Output: 10
  console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4