// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { it, expect } = require("@jest/globals");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
describe("removeFirstItemAndShuffle", () => {
  var colors1 = ["purple", "blue", "green", "yellow", "pink"];
  // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
  var colors2 = [
    "chartreuse",
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron",
  ];
  // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    expect(removeFirstItemAndShuffle(colors1)).toEqual(
      expect.arrayContaining(["yellow", "blue", "pink", "green"])
    );
    expect(removeFirstItemAndShuffle(colors2)).toEqual(
      expect.arrayContaining([
        "saffron",
        "aquamarine",
        "periwinkle",
        "indigo",
        "ochre",
      ])
    );
  });
});

// b) Create the function that makes the test pass.

// create function that takes in an array as the argument (done)
// remove the first item from array with .shift() (done)
// use a custom .sort() with Math.random to shuffle it up and return (done)
// NOTE: after doing somer research, I'm reaching that this method isn't THE most ideal, something called the Fisher-Yates algorithm gives a better randomization, but I figure this is probably fine for the scope of this question...

const removeFirstItemAndShuffle = (array) => {
  array.shift();
  return array.sort(() => Math.random() - 0.5);
};

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minAndMax", () => {
  var nums1 = [3, 56, 90, -8, 0, 23, 6];
  // Expected output: [-8, 90]
  var nums2 = [109, 5, 9, 67, 8, 24];
  // Expected output: [5, 109]
  it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
    expect(minAndMax(nums1)).toEqual([-8, 90]);
    expect(minAndMax(nums2)).toEqual([5, 109]);
  });
});

// b) Create the function that makes the test pass.

// use Math.min to get smallest number array array (done)
// use Math.max to get largest number from array (done)
// add both those numbers to an array and return it (done)

// const minAndMax = (array) => {
//   let newArray = [];
//   newArray.push(Math.min(...array));
//   newArray.push(Math.max(...array));
//   return newArray;
// };

// refactor, since Math.min(...array) and Math.max(...array) are both numbers, then just put them both in an array and return it
const minAndMax = (array) => {
  return [Math.min(...array), Math.max(...array)];
};

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("newArrayFromTwoArraysWithNoDupes", () => {
  var testArray1 = [3, 7, 10, 5, 4, 3, 3];
  var testArray2 = [7, 8, 2, 3, 1, 5, 4];
  // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(newArrayFromTwoArraysWithNoDupes(testArray1, testArray2)).toEqual([
      3, 7, 10, 5, 4, 8, 2, 1,
    ]);
  });
});

// b) Create the function that makes the test pass.

// use concat to combine the arrays (done)
// use Set() to remove duplicates (done)

const newArrayFromTwoArraysWithNoDupes = (arr1, arr2) => {
  return [...new Set(arr1.concat(arr2))];
};
