export const JS_DSA_QUESTIONS = [
  {
    id: 1,
    title: "Reverse a String",
    description: "Write a function that reverses the input string.",
    starterCode: `function reverseString(str) {
  // Your code here
}`,
    testCases: [
      `console.log(reverseString("hello") === "olleh");`,
      `console.log(reverseString("world") === "dlrow");`
    ]
  },
  {
    id: 2,
    title: "Check for Palindrome",
    description: "Check if the given string is a palindrome (ignoring case and non-alphanumeric characters).",
    starterCode: `function isPalindrome(str) {
  // Your code here
}`,
    testCases: [
      `console.log(isPalindrome("madam") === true);`,
      `console.log(isPalindrome("hello") === false);`
    ]
  },
  {
    id: 3,
    title: "Find Max Number",
    description: "Return the largest number in an array.",
    starterCode: `function findMax(arr) {
  // Your code here
}`,
    testCases: [
      `console.log(findMax([1, 5, 3]) === 5);`,
      `console.log(findMax([-1, -10, -3]) === -1);`
    ]
  },
  {
    id: 4,
    title: "FizzBuzz",
    description: "Return 'Fizz' if divisible by 3, 'Buzz' by 5, and 'FizzBuzz' by both.",
    starterCode: `function fizzBuzz(n) {
  // Your code here
}`,
    testCases: [
      `console.log(fizzBuzz(15) === "FizzBuzz");`,
      `console.log(fizzBuzz(3) === "Fizz");`,
      `console.log(fizzBuzz(5) === "Buzz");`,
      `console.log(fizzBuzz(7) === "7");`
    ]
  },
  {
    id: 5,
    title: "Factorial",
    description: "Calculate the factorial of a number.",
    starterCode: `function factorial(n) {
  // Your code here
}`,
    testCases: [
      `console.log(factorial(5) === 120);`,
      `console.log(factorial(0) === 1);`
    ]
  },
  {
    id: 6,
    title: "Find Duplicates",
    description: "Return true if there are duplicate values in the array.",
    starterCode: `function hasDuplicates(arr) {
  // Your code here
}`,
    testCases: [
      `console.log(hasDuplicates([1, 2, 3]) === false);`,
      `console.log(hasDuplicates([1, 2, 2]) === true);`
    ]
  },
  {
    id: 7,
    title: "Anagram Check",
    description: "Check if two strings are anagrams of each other.",
    starterCode: `function isAnagram(str1, str2) {
  // Your code here
}`,
    testCases: [
      `console.log(isAnagram("listen", "silent") === true);`,
      `console.log(isAnagram("hello", "world") === false);`
    ]
  },
  {
    id: 8,
    title: "Count Vowels",
    description: "Count the number of vowels in a string.",
    starterCode: `function countVowels(str) {
  // Your code here
}`,
    testCases: [
      `console.log(countVowels("hello") === 2);`,
      `console.log(countVowels("xyz") === 0);`
    ]
  },
  {
    id: 9,
    title: "Fibonacci (nth value)",
    description: "Return the nth Fibonacci number.",
    starterCode: `function fibonacci(n) {
  // Your code here
}`,
    testCases: [
      `console.log(fibonacci(0) === 0);`,
      `console.log(fibonacci(5) === 5);`,
      `console.log(fibonacci(7) === 13);`
    ]
  },
  {
    id: 10,
    title: "Capitalize First Letter",
    description: "Capitalize the first letter of every word in the sentence.",
    starterCode: `function capitalizeWords(str) {
  // Your code here
}`,
    testCases: [
      `console.log(capitalizeWords("hello world") === "Hello World");`,
      `console.log(capitalizeWords("javascript is fun") === "Javascript Is Fun");`
    ]
  },
  {
    id: 11,
    title: "Find Missing Number",
    description: "Find the missing number in a sequence of 1 to n.",
    starterCode: `function findMissing(arr) {
  // Your code here
}`,
    testCases: [
      `console.log(findMissing([1, 2, 4, 5]) === 3);`,
      `console.log(findMissing([2, 3, 1, 5]) === 4);`
    ]
  },
  {
    id: 12,
    title: "Merge Sorted Arrays",
    description: "Merge two sorted arrays into one sorted array.",
    starterCode: `function mergeArrays(a, b) {
  // Your code here
}`,
    testCases: [
      `console.log(JSON.stringify(mergeArrays([1, 3], [2, 4])) === JSON.stringify([1, 2, 3, 4]));`
    ]
  },
  {
    id: 13,
    title: "Sum of Array",
    description: "Return the sum of all numbers in an array.",
    starterCode: `function sumArray(arr) {
  // Your code here
}`,
    testCases: [
      `console.log(sumArray([1, 2, 3]) === 6);`
    ]
  },
  {
    id: 14,
    title: "Check Prime",
    description: "Return true if the number is a prime.",
    starterCode: `function isPrime(n) {
  // Your code here
}`,
    testCases: [
      `console.log(isPrime(7) === true);`,
      `console.log(isPrime(4) === false);`
    ]
  },
  {
    id: 15,
    title: "Remove Duplicates",
    description: "Remove duplicate values from an array.",
    starterCode: `function removeDuplicates(arr) {
  // Your code here
}`,
    testCases: [
      `console.log(JSON.stringify(removeDuplicates([1, 2, 2, 3])) === JSON.stringify([1, 2, 3]));`
    ]
  },
  {
    id: 16,
    title: "Second Largest Number",
    description: "Return the second largest number from an array.",
    starterCode: `function secondLargest(arr) {
  // Your code here
}`,
    testCases: [
      `console.log(secondLargest([10, 20, 20, 30]) === 20);`
    ]
  },
  {
    id: 17,
    title: "String Compression",
    description: "Compress a string such as 'aabcccccaaa' to 'a2b1c5a3'.",
    starterCode: `function compressString(str) {
  // Your code here
}`,
    testCases: [
      `console.log(compressString("aabcccccaaa") === "a2b1c5a3");`
    ]
  },
  {
    id: 18,
    title: "Rotate Array",
    description: "Rotate an array to the right by k steps.",
    starterCode: `function rotateArray(arr, k) {
  // Your code here
}`,
    testCases: [
      `console.log(JSON.stringify(rotateArray([1,2,3,4,5], 2)) === JSON.stringify([4,5,1,2,3]));`
    ]
  },
  {
    id: 19,
    title: "Count Words in Sentence",
    description: "Count the number of words in a given sentence.",
    starterCode: `function countWords(sentence) {
  // Your code here
}`,
    testCases: [
      `console.log(countWords("Hello world") === 2);`,
      `console.log(countWords("One two three four") === 4);`
    ]
  },
  {
    id: 20,
    title: "Sum of Digits",
    description: "Return the sum of digits in a number.",
    starterCode: `function sumOfDigits(num) {
  // Your code here
}`,
    testCases: [
      `console.log(sumOfDigits(1234) === 10);`
    ]
  }
];
