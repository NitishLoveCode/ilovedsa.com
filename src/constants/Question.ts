export const questionSetForStep1 =[
  {
    "id": 1,
    "title": "Reverse a String",
    "description": "Write a function that reverses the input string.",
    "starterCode": "function reverseString(str) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "console.log(reverseString(\"hello\") === \"olleh\")",
        expectedOutput: "olleh"
      },
      {
        input: "console.log(reverseString(\"world\"))",
        expectedOutput: "dlrow"
      }
    ]
  },
  {
    "id": 2,
    "title": "Check for Palindrome",
    "description": "Check if the given string is a palindrome (ignoring case and non-alphanumeric characters).",
    "starterCode": "function isPalindrome(str) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "isPalindrome(\"madam\")",
        expectedOutput: "true"
      },
      {
        input: "isPalindrome(\"hello\")",
        expectedOutput: "false"
      }
    ]
  },
  {
    "id": 3,
    "title": "Find Max Number",
    "description": "Return the largest number in an array.",
    "starterCode": "function findMax(arr) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "findMax([1, 5, 3])",
        expectedOutput: "5"
      },
      {
        input: "findMax([-1, -10, -3])",
        expectedOutput: "-1"
      }
    ]
  },
  {
    "id": 4,
    "title": "FizzBuzz",
    "description": "Return 'Fizz' if divisible by 3, 'Buzz' by 5, and 'FizzBuzz' by both.",
    "starterCode": "function fizzBuzz(n) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "fizzBuzz(15)",
        expectedOutput: "\"FizzBuzz\""
      },
      {
        input: "fizzBuzz(3)",
        expectedOutput: "\"Fizz\""
      },
      {
        input: "fizzBuzz(5)",
        expectedOutput: "\"Buzz\""
      },
      {
        input: "fizzBuzz(7)",
        expectedOutput: "\"7\""
      }
    ]
  },
  {
    "id": 5,
    "title": "Factorial",
    "description": "Calculate the factorial of a number.",
    "starterCode": "function factorial(n) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "factorial(5)",
        expectedOutput: "120"
      },
      {
        input: "factorial(0)",
        expectedOutput: "1"
      }
    ]
  },
  {
    "id": 6,
    "title": "Find Duplicates",
    "description": "Return true if there are duplicate values in the array.",
    "starterCode": "function hasDuplicates(arr) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "hasDuplicates([1, 2, 3])",
        expectedOutput: "false"
      },
      {
        input: "hasDuplicates([1, 2, 2])",
        expectedOutput: "true"
      }
    ]
  },
  {
    "id": 7,
    "title": "Anagram Check",
    "description": "Check if two strings are anagrams of each other.",
    "starterCode": "function isAnagram(str1, str2) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "isAnagram(\"listen\", \"silent\")",
        expectedOutput: "true"
      },
      {
        input: "isAnagram(\"hello\", \"world\")",
        expectedOutput: "false"
      }
    ]
  },
  {
    "id": 8,
    "title": "Count Vowels",
    "description": "Count the number of vowels in a string.",
    "starterCode": "function countVowels(str) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "countVowels(\"hello\")",
        expectedOutput: "2"
      },
      {
        input: "countVowels(\"xyz\")",
        expectedOutput: "0"
      }
    ]
  },
  {
    "id": 9,
    "title": "Fibonacci (nth value)",
    "description": "Return the nth Fibonacci number.",
    "starterCode": "function fibonacci(n) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "fibonacci(0)",
        expectedOutput: "0"
      },
      {
        input: "fibonacci(5)",
        expectedOutput: "5"
      },
      {
        input: "fibonacci(7)",
        expectedOutput: "13"
      }
    ]
  },
  {
    "id": 10,
    "title": "Capitalize First Letter",
    "description": "Capitalize the first letter of every word in the sentence.",
    "starterCode": "function capitalizeWords(str) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "capitalizeWords(\"hello world\")",
        expectedOutput: "\"Hello World\""
      },
      {
        input: "capitalizeWords(\"javascript is fun\")",
        expectedOutput: "\"Javascript Is Fun\""
      }
    ]
  },
  {
    "id": 11,
    "title": "Find Missing Number",
    "description": "Find the missing number in a sequence of 1 to n.",
    "starterCode": "function findMissing(arr) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "findMissing([1, 2, 4, 5])",
        expectedOutput: "3"
      },
      {
        input: "findMissing([2, 3, 1, 5])",
        expectedOutput: "4"
      }
    ]
  },
  {
    "id": 12,
    "title": "Merge Sorted Arrays",
    "description": "Merge two sorted arrays into one sorted array.",
    "starterCode": "function mergeArrays(a, b) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "mergeArrays([1, 3], [2, 4])",
        expectedOutput: "[1, 2, 3, 4]"
      }
    ]
  },
  {
    "id": 13,
    "title": "Sum of Array",
    "description": "Return the sum of all numbers in an array.",
    "starterCode": "function sumArray(arr) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "sumArray([1, 2, 3])",
        expectedOutput: "6"
      }
    ]
  },
  {
    "id": 14,
    "title": "Check Prime",
    "description": "Return true if the number is a prime.",
    "starterCode": "function isPrime(n) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "isPrime(7)",
        expectedOutput: "true"
      },
      {
        input: "isPrime(4)",
        expectedOutput: "false"
      }
    ]
  },
  {
    "id": 15,
    "title": "Remove Duplicates",
    "description": "Remove duplicate values from an array.",
    "starterCode": "function removeDuplicates(arr) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "removeDuplicates([1, 2, 2, 3])",
        expectedOutput: "[1, 2, 3]"
      }
    ]
  },
  {
    "id": 16,
    "title": "Second Largest Number",
    "description": "Return the second largest number from an array.",
    "starterCode": "function secondLargest(arr) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "secondLargest([10, 20, 20, 30])",
        expectedOutput: "20"
      }
    ]
  },
  {
    "id": 17,
    "title": "String Compression",
    "description": "Compress a string such as 'aabcccccaaa' to 'a2b1c5a3'.",
    "starterCode": "function compressString(str) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "compressString(\"aabcccccaaa\")",
        expectedOutput: "\"a2b1c5a3\""
      }
    ]
  },
  {
    "id": 18,
    "title": "Rotate Array",
    "description": "Rotate an array to the right by k steps.",
    "starterCode": "function rotateArray(arr, k) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "rotateArray([1,2,3,4,5], 2)",
        expectedOutput: "[4,5,1,2,3]"
      }
    ]
  },
  {
    "id": 19,
    "title": "Count Words in Sentence",
    "description": "Count the number of words in a given sentence.",
    "starterCode": "function countWords(sentence) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "countWords(\"Hello world\")",
        expectedOutput: "2"
      },
      {
        input: "countWords(\"One two three four\")",
        expectedOutput: "4"
      }
    ]
  },
  {
    "id": 20,
    "title": "Sum of Digits",
    "description": "Return the sum of digits in a number.",
    "starterCode": "function sumOfDigits(num) {\n  // Your code here\n}",
    "testCases": [
      {
        input: "sumOfDigits(1234)",
        expectedOutput: "10"
      }
    ]
  }
]