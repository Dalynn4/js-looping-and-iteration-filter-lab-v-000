// Code your solution in this file
function findMatching(array, string) {
 return array.filter(name => name.toUpperCase() === string.toUpperCase());
}

function fuzzyMatch(array, string) {
  return array.filter(name => name.startsWith(string))
}