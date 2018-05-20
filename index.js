// Code your solution in this file
function findMatching(array, string) {
 return array.filter(name => name.toUpperCase() === string.toUpperCase());
}

function fuzzyMatch(array, string) {
  return array.filter(name => name.startsWith(string))
}

function matchName(array, string) {
  let result = []
  for (const user of array) {
      result.push(user.name)
        } return user.filter(name => name === string)
}

