/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  for (let index = 1; index < preferences.length - 1; index++) {
    let first = preferences[index - 1];
    if (first !== 0) {
      let second = preferences[first - 1];
      if (second !== 0) {
        let third = preferences[second - 1];
        if (+third === +index && first !== second) {
          count++;
          preferences[index - 1] = 0;
          preferences[first - 1] = 0;
          preferences[second - 1] = 0;
        }
      }
    }
    preferences[index - 1] = 0;
  }
  return count;
};
