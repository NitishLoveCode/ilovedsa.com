export const questionSet2 = [
  {
    id: 1,
    title: "#12. Create and Use a Promise in JavaScript.",
    description:
      "Write a function that returns a Promise which resolves after 2 seconds with the message 'Promise resolved!'. Then, use `.then()` `catch` and `finally` to log the resolved message.\n\nFor Example:\n\nExpected Output (after 2 seconds):\n\n'Promise resolved!'",
    starterCode:
      "function createDelayedPromise() {\n  // Hey coder, write your code from here.\n}\n\n// Call the function and handle the resolved value.\n console.log(createDelayedPromise()); \n //You have to write (then catch and finally).;",
  },
  {
    id: 2,
    title: "#13. Demonstrate Shallow Copy vs Deep Copy in JavaScript.",
    description:
      "Write a function to demonstrate the difference between shallow copy and deep copy in JavaScript using a nested object.\n\n👉 In shallow copy, changes to nested properties affect the original object.\n👉 In deep copy, the original object remains unchanged when the copy is modified.\n\nFor Example:\n\nInput:\nconst original = {\n  name: 'Nitish',\n  address: { city: 'Delhi' }\n};\n\nExpected Output:\n// After modifying the shallow copy:\noriginal.address.city → 'Mumbai' ❌\n\n// After modifying the deep copy:\noriginal.address.city → 'Delhi' ✅",
    starterCode:
      "// Hey coder, write your code from here.\n\nconst original = {\n  name: 'Nitish',\n  address: { city: 'Delhi' }\n};\n\n// Create shallow copy and deep copy below\n\n// Perform changes and log the result",
  },
  {
    id: 3,
    title: "#14. Implement a Custom myMap() Method Using Prototype.",
    description:
      "Create a custom `myMap()` function using `Array.prototype`. It should work the same as the native `map()` method, returning a new array after applying the provided callback function to each element.\n\n👉 Use `this` to refer to the calling array.\n👉 Do not use the built-in `map()` method.\n\nFor Example:\n\nInput:\n[1, 2, 3].myMap(x => x * 2)\n\nExpected Output:\n[2, 4, 6]",
    starterCode:
      "// Hey coder, write your code from here.\n\nconst data = [20, 30, 40, 50, 60];\n\n",
  },
  {
    id: 4,
    title: "#15. Implement a Custom myForEach() Method Using Prototype.",
    description:
      "Create a custom `myForEach()` method using `Array.prototype`. This method should behave like the built-in `forEach()` and execute a callback on each array element without returning anything.\n\n👉 Use `this` to refer to the calling array.\n👉 Do not use the built-in `forEach()` method.\n\nFor Example:\n\nInput:\n[10, 20, 30].myForEach(x => console.log(x))\n\nExpected Output:\n10\n20\n30",
    starterCode:
      "// Hey coder, write your code from here.\n\n const data = [20, 30, 40, 50, 60];",
  },
  {
  id: 5,
  title: "#16. Flatten an Array Without Using Any Inbuilt Function.",
  description:
    "Write a recursive function to flatten a nested array without using any built-in array methods\n\nFor Example:\n\nInput:\n[1, [2, [3, 4], 5], 6]\n\nExpected Output:\n[1, 2, 3, 4, 5, 6]",
  starterCode:
    "function flattenArray(arr) {\n  // Hey coder, write your recursive code here.\n}\n\nconsole.log(flattenArray([1, [2, [3, 4], 5], 6]));"
},
{
  id: 7,
  title: "#18. Flatten an Array Using Inbuilt Methods.",
  description:
    "Write a function to flatten a nested array using JavaScript's built-in methods.\n\nFor Example:\n\nInput:\n[1, [2, [3, 4], 5], 6]\n\nExpected Output:\n[1, 2, 3, 4, 5, 6]",
  starterCode:
    "function flattenArrayUsingBuiltIn(arr) {\n  // Hey coder, write your code using inbuilt method(s)\n}\n\nconsole.log(flattenArrayUsingBuiltIn([1, [2, [3, 4], 5], 6]));"
}

];
