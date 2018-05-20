// Code your solution in this file
function findMatching(array, string) {
 return array.filter(name => name.toUppercase() === string.toUpperCase());
}