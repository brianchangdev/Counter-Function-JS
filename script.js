// 1. define a function that takes a single string argument
// 2. return values as an object, so define object inside function
	// allows you to add keys and values later if needed
// 3. value: number of chars
	// .length counts number of chars
// 4. value: number of words
	// .split() method splits a string object into an array of substrings or words
  // .split(" ") will split the string when there is a space
// 5. value: spaces
	// use .split("") to create an array of the string like above except no space in between quotes because its a char
  // also set countIt.spaces to 0
  // then run a loop over the array to go through each char and count spaces
  // .forEach calls a function on each element aka char in the array
  // if char === a space, then count the tally up by one
// 6. find the average word length
	// add up total number of chars (without the spaces) and divide by number of words

var superCounter = function(string) {
	var countIt = {};
  countIt.words = string.split(" ").length;
  countIt.spaces = 0;
  string.split("").forEach(function(ith) {
  	if(ith === " ") {
    	countIt.spaces +=1;
    }
  });
  countIt.chars = string.length;
  countIt.avgWordLength = (countIt.chars -countIt.spaces)/countIt.words; 
  return countIt;

}
console.log(superCounter("Keep the Blue Flag Flying High"))
