// Code your solution in this file
function findMatching(array, string) {
 return array.filter(name => name.toUpperCase() === string.toUpperCase());
}

function fuzzyMatch(array, string) {
  return array.filter(name => name.startsWith(string))
}

function matchName(array, string) {
 let newarray = for const user of array {
    return user.name
    } return newarray.filter(name => name === string)
}

