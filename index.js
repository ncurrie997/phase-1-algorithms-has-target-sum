// Write your algorithm here
function hasTargetSum(array, target) {
 for (let i = 0; i < array.length; i++) {
  const difference = target - array[i];

  for (let j = i + 1; j < array.length; j++) {
    if (array[j] === difference) return true;
  }
 }

 return false;
}

/* 
  Write the Big O time complexity of your function here

  since my code loops through a loop with n my Big O is 0(n^2)
*/

/* 
  Add your pseudocode here
iterate through each element in array and find the difference between that number and the target number
then iterate through the rest of the array and check if any number matches difference
when a match is found return true
if no match is found return false
  
*/

/*
  Add written explanation of your solution here
  the code uses a function called 'hasTargetSum' which runs
  each element of the array through each other using a nested for loop inside 
  the original for loop
  each element is subtracted from the target to get a 'difference' another loop
  runs each element through the array to see if it matches the 'difference' 
  if there is a match then it returns true stating that there is a 'hasTargetSum' condition
  if no match the code returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
