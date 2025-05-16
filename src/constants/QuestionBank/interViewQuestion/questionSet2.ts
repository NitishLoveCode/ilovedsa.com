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
];
